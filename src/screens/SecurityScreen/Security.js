import {CODE, SALT, SERVICE_ANDROID, SERVICE_IOS} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import * as Keychain from 'react-native-keychain';
import {connect} from 'react-redux';
import {LOCAL_STORAGE} from '../../constants/storage';
import Encryptor from '../../core/Encryptor';
import Strings from '../../localization/Strings';
import {navigateAndSimpleReset} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import Device from '../../utils/device';
import Security_Component from './Security_Component';

const encryptor = new Encryptor();

class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.resetGenericPassword = this.resetGenericPassword.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.getCredentialsWithBiometry =
      this.getCredentialsWithBiometry.bind(this);
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
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: {
        title: Strings.authenticationPromptTitle,
      },
      authenticateType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
    });
    if (isReset) {
      AsyncStorage.removeItem(LOCAL_STORAGE.BIOMETRY);
      AsyncStorage.removeItem(LOCAL_STORAGE.PASSWORD);
      navigateAndSimpleReset(Routes.ONBOARDING.ONBOARDING);
    }
  };

  handleImportWallet = () => {};

  // To retrieve credentials with biometric authentication
  getCredentialsWithBiometry = async () => {
    try {
      // It returns keychain stored credentials.
      const credentials = await Keychain.getGenericPassword({
        service: Device.isAndroid() ? SERVICE_ANDROID : SERVICE_IOS,
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      });
      if (credentials) {
        // To get decrypted password.
        const decryptedPasswordObj = await encryptor.decrypt(
          CODE,
          credentials?.password,
          SALT,
        );
        console.log(decryptedPasswordObj);
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

  render() {
    return (
      <>
        <Security_Component
          button1Press={this.resetGenericPassword} // Todo: Remove once the flow is updated.
          button2Press={this.handleImportWallet}
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
