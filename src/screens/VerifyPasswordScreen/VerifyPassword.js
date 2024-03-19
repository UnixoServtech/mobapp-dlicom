import {CODE, SALT, SERVICE_ANDROID, SERVICE_IOS} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import * as Keychain from 'react-native-keychain';
import {connect} from 'react-redux';
import {LOCAL_STORAGE} from '../../constants/storage';
import Encryptor from '../../core/Encryptor';
import {createNewEthWallet} from '../../core/eth';
import Strings from '../../localization/Strings';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import Device from '../../utils/device';
import VerifyPassword_Component from './VerifyPassword_Component';

const encryptor = new Encryptor();

class VerifyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isGenericPasswordSet: false,
      biometryType: undefined,
      randomWallet: {},
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangPassword = this.onChangPassword.bind(this);
    this.buttonPressVerifyPassword = this.buttonPressVerifyPassword.bind(this);
    this.createWallet = this.createWallet.bind(this);
    this.navigateToBackupScreen = this.navigateToBackupScreen.bind(this);
  }

  async componentDidMount() {
    await this.createWallet();

    if (await AsyncStorage.getItem(LOCAL_STORAGE.BIOMETRY)) {
      await this.getCredentialsWithBiometry();
    }
  }

  // To retrieve credentials with biometric authentication
  getCredentialsWithBiometry = async () => {
    try {
      // It returns keychain stored credentials.
      const credentials = await Keychain.getGenericPassword({
        service: Device.isAndroid() ? SERVICE_ANDROID : SERVICE_IOS,
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      });
      if (credentials) {
        // To get decrypted password.
        const decryptedPasswordObj = await encryptor.decrypt(
          CODE,
          credentials?.password,
          SALT,
        );
        console.log(decryptedPasswordObj); // TODO: Remove in prod. build
        if (decryptedPasswordObj?.password) {
          this.navigateToBackupScreen();
        }
      }
    } catch (error) {
      console.log('Error retrieving credentials:', error.message);
      if (error.message.includes('authentication failed')) {
        console.log('Biometric authentication failed.');
      } else {
        console.log('Unknown error:', error);
      }
      return null;
    }
  };

  onPressLeftContent = () => {
    goBack();
  };

  onChangPassword = text => {
    this.setState({
      password: text,
    });
  };

  buttonPressVerifyPassword = async () => {
    if (this.state.password) {
      const passwordHash = await encryptor.getPasswordHash(
        CODE,
        {password: this.state.password},
        SALT,
      );
      if (
        passwordHash ===
        (await AsyncStorage.getItem(LOCAL_STORAGE.PASSWORD_HASH))
      ) {
        this.navigateToBackupScreen();
      }
    }
  };

  navigateToBackupScreen = async () => {
    if (
      this.state.randomWallet &&
      Object.keys(this.state.randomWallet).length > 0
    ) {
      navigate(Routes.MANUAL_BACKUP_STEP, {
        wallet: JSON.stringify(this.state.randomWallet),
      });
    } else {
      navigate(Routes.MANUAL_BACKUP_STEP, {
        wallet: JSON.stringify(await this.createWallet()),
      });
    }
  };

  createWallet = async () => {
    if (Object.keys(this.state.randomWallet).length === 0) {
      const randomWallet = await createNewEthWallet();
      if (randomWallet) {
        this.setState(prev => ({...prev, randomWallet: randomWallet}));
      }

      return randomWallet;
    }
  };

  render() {
    return (
      <>
        <VerifyPassword_Component
          leftHeaderText="Back"
          onPressLeftContent={this.onPressLeftContent}
          tittleText="Verify Password"
          tittleNote="This password will navigate you to Backup Screen"
          placeHolder="Enter Password"
          onChangePassword={this.onChangPassword}
          valuePassword={this.state.password}
          passwordButtonProps={{
            label: Strings.verifyPassword,
            isDisabled: this.state.password?.trim()?.length === 0,
            onPress: this.buttonPressVerifyPassword,
          }}
        />
      </>
    );
  }
}

const mapActionCreators = {};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
  };
};
export default connect(mapStateToProps, mapActionCreators)(VerifyPassword);
