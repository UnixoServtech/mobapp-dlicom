import {CODE, SALT, MNEMONIC_SALT, SERVICE_ANDROID, SERVICE_IOS} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import * as Keychain from 'react-native-keychain';
import {connect} from 'react-redux';
import {LOCAL_STORAGE} from '../../constants/storage';
import Encryptor from '../../core/Encryptor';
import Strings from '../../localization/Strings';
import {navigateAndSimpleReset} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import {configureStore} from '../../redux/';
import Device from '../../utils/device';
import Security_Component from './Security_Component';
import {Toast} from '../../components/Toast';
import EncryptedStorage from 'react-native-encrypted-storage';
import * as constants from '../../constants/constants';

const persistor = configureStore().persistor; // TODO: Remove once the flow is updated.

const encryptor = new Encryptor();

class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
    this.resetGenericPassword = this.resetGenericPassword.bind(this);
    this.getCredentialsWithBiometry =
      this.getCredentialsWithBiometry.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.buttonPressUnlockPassword = this.buttonPressUnlockPassword.bind(this);
    this.setMnemonic = this.setMnemonic.bind(this);
  }

  async componentDidMount() {
    if (await AsyncStorage.getItem(LOCAL_STORAGE.BIOMETRY)) {
      await this.getCredentialsWithBiometry();
    }
    console.log(this.props?.wallets);
  }

  // TODO: Remove once the flow is updated.
  resetGenericPassword = async () => {
    // To remove existing Generic Password.
    const isReset = await Keychain.resetGenericPassword({
      service: Device.isAndroid() ? SERVICE_ANDROID : SERVICE_IOS,
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: {
        title: Strings.authenticationPromptTitle,
      },
      authenticateType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
    });
    if (isReset) {
      EncryptedStorage.removeItem('persist:root');
      // To Clear Redux Persist Data
      // persistor.purge();
      AsyncStorage.removeItem(LOCAL_STORAGE.BIOMETRY);
      AsyncStorage.removeItem(LOCAL_STORAGE.PASSWORD);
      navigateAndSimpleReset(Routes.ONBOARDING.ONBOARDING);
    }
  };

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
        if (decryptedPasswordObj?.password) {
          this.setMnemonic(decryptedPasswordObj?.password);
          navigateAndSimpleReset(Routes.HOME_NAV.ROOT_NAV);
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

  onChangePassword = text => {
    this.setState({
      password: text,
    });
  };

  buttonPressUnlockPassword = async () => {
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
        this.setMnemonic(this.state.password);
        navigateAndSimpleReset(Routes.HOME_NAV.ROOT_NAV);
      } else {
        Toast.show({
          type: 'success',
          text1: 'Enter valid Password.',
        });
      }
    }
  };

  setMnemonic = async password => {
    encryptor
      .decrypt(
        password,
        await EncryptedStorage.getItem(LOCAL_STORAGE.ENCRYPTED_MNEMONIC),
        MNEMONIC_SALT,
      )
      .then(data => {
        constants.mnemonic = data?.password;
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Security_Component
          btnRestePasswordPress={this.resetGenericPassword} // Todo: Remove once the flow is updated.
          placeHolder="Enter Password"
          onChangePassword={this.onChangePassword}
          valuePassword={this.state.password}
          unlockButtonProps={{
            label: Strings.unlockWallet,
            isDisabled: this.state.password?.trim()?.length === 0,
            onPress: this.buttonPressUnlockPassword,
          }}
          tittleText={'Unlock your wallet'}
          tittleNote={'Enter Password to Unlock your wallet.'}
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
    wallets: state.userWallets.wallets,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Security);
