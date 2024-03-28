import {CODE, SALT, SERVICE_ANDROID, SERVICE_IOS, USER} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import * as Keychain from 'react-native-keychain';
import {connect} from 'react-redux';
import {LOCAL_STORAGE} from '../../constants/storage';
import Encryptor from '../../core/Encryptor';
import Strings from '../../localization/Strings';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import Device from '../../utils/device';
import CreatePassword_Component from './CreatePassword_Component';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Platform} from 'react-native';

const encryptor = new Encryptor();

class CreatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      isGenericPasswordSet: false,
      biometryType: undefined,
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.buttonPressCreatePassword = this.buttonPressCreatePassword.bind(this);
  }

  async componentDidMount() {
    this.setBiometrySupported();
    await EncryptedStorage.removeItem('persist:root');
    await EncryptedStorage.clear();
    await AsyncStorage.clear();
  }

  componentDidUpdate(prevProps, prevState) {}

  handleCreateNewWallet = async () => {
    console.log(await Keychain.getSupportedBiometryType());
    const keychainObject = await Keychain.getGenericPassword();
    if (keychainObject.password) {
      console.log(JSON.stringify(keychainObject));
    }
  };

  // To check Biometry Supported or not
  setBiometrySupported = async () => {
    // To remove Existing wallets(if it is)
    await AsyncStorage.clear();
    const BIOMETRY_TYPE = {
      TouchID: 'TouchID',
      FaceID: 'FaceID',
      OpticID: 'OpticID',
      Fingerprint: 'Fingerprint',
      Face: 'Face',
      Iris: 'Iris',
    };

    Keychain.getSupportedBiometryType()
      .then(biometryType => {
        switch (biometryType) {
          case BIOMETRY_TYPE.TouchID:
            this.setState({biometryType: BIOMETRY_TYPE.TouchID});
            break;
          case BIOMETRY_TYPE.FaceID:
            this.setState({biometryType: BIOMETRY_TYPE.FaceID});
            break;
          case BIOMETRY_TYPE.OpticID:
            this.setState({biometryType: BIOMETRY_TYPE.OpticID});
            break;
          case BIOMETRY_TYPE.Fingerprint:
            this.setState({biometryType: BIOMETRY_TYPE.Fingerprint});
            break;
          case BIOMETRY_TYPE.Face:
            this.setState({biometryType: BIOMETRY_TYPE.Face});
            break;
          case BIOMETRY_TYPE.Iris:
            this.setState({biometryType: BIOMETRY_TYPE.Iris});
            break;
          default:
            return undefined;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // To set Password for the first time
  async setGenericPassword(password) {
    try {
      // Encrypted Password
      const encryptorPassword = await encryptor.encrypt(CODE, {password}, SALT);

      if (encryptorPassword) {
        const data = await Keychain.setGenericPassword(
          USER,
          encryptorPassword,
          {
            accessControl:
              Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
            accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
            authenticationPrompt: {
              title: Strings.authenticationPromptTitle,
            },
            service: Device.isAndroid() ? SERVICE_ANDROID : SERVICE_IOS,
            authenticateType:
              Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
          },
        );
        console.log(
          'Credentials saved successfully with biometry protection in keychain',
          data,
        );

        let {passwordHash} = JSON.parse(encryptorPassword);

        // Store Aes Key to generate password hash at Unlock Time.
        await AsyncStorage.setItem(
          LOCAL_STORAGE.PASSWORD_HASH,
          passwordHash.toString(),
        );

        // isBiometrySupported and getting data from setGenericPassword then set flag to true.
        if (this.state.biometryType && Object.keys(data).length > 0) {
          console.log('with BIOMETRY');
          await AsyncStorage.setItem(LOCAL_STORAGE.BIOMETRY, 'true');
          await AsyncStorage.setItem(LOCAL_STORAGE.PASSWORD, 'true');
        } else {
          console.log('without BIOMETRY');
          await AsyncStorage.setItem(LOCAL_STORAGE.PASSWORD, 'true');
        }
        if (this.props?.route?.params?.createType === 'New') {
          // navigate(Routes.MANUAL_BACKUP_STEP);
          navigate(Routes.VERIFY_PASSWORD);
        } else {
          navigate(Routes.ONBOARDING.IMPORT_WALLET, {
            password: this.state.newPassword,
          });
        }
      }
    } catch (error) {
      console.log('Error saving credentials:', error.message);
      if (error.name === 'BiometryEnrollmentCancel') {
        console.log('Biometric enrollment canceled by the user.');
      } else {
        console.log('Unknown error:', error);
      }
    }
  }

  onPressLeftContent = () => {
    goBack();
  };

  onChangeNewPassword = text => {
    this.setState({
      newPassword: text,
    });
  };

  onChangeConfirmPassword = text => {
    this.setState({
      confirmPassword: text,
    });
  };

  buttonPressCreatePassword = async () => {
    this.setGenericPassword(this.state.newPassword);
  };

  render() {
    return (
      <>
        <CreatePassword_Component
          leftHeaderText="Back"
          onPressLeftContent={this.onPressLeftContent}
          tittleText="Create Password"
          tittleNote="This password will unlock your Dlicom wallet."
          placeHolder="Enter New Password"
          onChangeNewPassword={this.onChangeNewPassword}
          valueNewPassword={this.state.newPassword}
          newPasswordButtonProps={{
            label: Strings.createPassword,
            isDisabled: this.state.newPassword?.trim()?.length === 0,
            onPress: this.buttonPressCreatePassword,
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
export default connect(mapStateToProps, mapActionCreators)(CreatePassword);
