import React, {Component} from 'react';
import {connect} from 'react-redux';
import Settings_Component from './Settings_Component';
import Strings from '../../../localization/Strings';
import {SwitchToggle} from '../../../components';
import {setDarkMode} from '../../../redux/actions/global';
import {
  navigate,
  navigateAndSimpleReset,
} from '../../../navigation/NavigationUtils';
import Routes from '../../../navigation/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import {LOCAL_STORAGE} from '../../../constants/storage';
import EncryptedStorage from 'react-native-encrypted-storage';
import * as constants from '../../../constants/constants';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.onSwitchToggle = this.onSwitchToggle.bind(this);
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onPrivacySecurityClick = this.onPrivacySecurityClick.bind(this);
    this.onPrivacyClick = this.onPrivacyClick.bind(this);
    this.onNotificationClick = this.onNotificationClick.bind(this);
    this.onNotificationPreferencesClick =
      this.onNotificationPreferencesClick.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    this.setState(prev => ({
      wallet: this.props.selectedWallet,
      wallets: this.props.wallets,
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedWallet !== this.props.selectedWallet) {
      this.setState({
        wallet: this.props.selectedWallet,
      });
    }
  }

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  onSwitchToggle = async () => {
    const {isDarkTheme} = this.props;
    await AsyncStorage.setItem(
      LOCAL_STORAGE.DARK_THEME,
      JSON.stringify(!isDarkTheme),
    );
    this.props.setDarkMode(!isDarkTheme);
  };

  onProfileClick = () => {};

  onPrivacySecurityClick = () => {
    // navigate(Routes.SETTINGS.PRIVACY_SECURITY);
  };

  onPrivacyClick = () => {
    // navigate(Routes.SETTINGS.PRIVACY);
  };

  onNotificationClick = () => {
    // navigate(Routes.SETTINGS.NOTIFICATIONS);
  };

  onNotificationPreferencesClick = () => {
    // navigate(Routes.SETTINGS.NOTIFICATION_PREFERENCES);
    this.onLogout();
  };

  onLogout = async () => {
    await EncryptedStorage.removeItem('persist:root');
    await AsyncStorage.removeItem(LOCAL_STORAGE.BIOMETRY);
    await AsyncStorage.removeItem(LOCAL_STORAGE.PASSWORD);
    await AsyncStorage.removeItem(LOCAL_STORAGE.ENCRYPTED_MNEMONIC);
    await EncryptedStorage.clear();
    await AsyncStorage.clear();
    constants.mnemonic = '';
  };

  render() {
    const {isDarkTheme} = this.props;
    return (
      <>
        <Settings_Component
          source={this.state.wallet?.avatar}
          username={this.state.wallet?.name}
          status={this.state.wallet?.wallet?.address}
          button1Press={this.handleCreateNewWallet}
          button2Press={this.handleImportWallet}
          row1Prop={{
            tittle: Strings.profile,
            leftIconName: 'user_circle_1',
            onPress: this.onProfileClick,
          }}
          row2Prop={{
            tittle: Strings.dark_white,
            leftIconName: 'dark',
            disabled: true,
            rightElement: (
              <SwitchToggle
                switchOn={isDarkTheme}
                onPress={this.onSwitchToggle}
              />
            ),
          }}
          row3Prop={{
            tittle: Strings.privacy_and_security,
            leftIconName: 'Shield_done',
            onPress: this.onPrivacySecurityClick,
          }}
          row4Prop={{
            tittle: Strings.privacy,
            leftIconName: 'lock',
            onPress: this.onPrivacyClick,
          }}
          row5Prop={{
            tittle: Strings.notifications,
            leftIconName: 'bell',
            onPress: this.onNotificationClick,
          }}
          row6Prop={{
            tittle: Strings.notification_preferences,
            leftIconName: 'bell-off',
            onPress: this.onNotificationPreferencesClick,
          }}
        />
      </>
    );
  }
}

const mapActionCreators = {setDarkMode};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
    isDarkTheme: state.global.isDarkTheme,
    selectedWallet: state.userWallets.selectedWallet,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Settings);
