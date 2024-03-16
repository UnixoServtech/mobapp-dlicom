import React, {Component} from 'react';
import {connect} from 'react-redux';
import Settings_Component from './Settings_Component';
import Strings from '../../../localization/Strings';
import {SwitchToggle} from '../../../components';
import {setDarkMode} from '../../../redux/actions/global';
import {navigate} from '../../../navigation/NavigationUtils';
import Routes from '../../../navigation/Routes';

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
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  onSwitchToggle = () => {
    const {isDarkTheme} = this.props;
    this.props.setDarkMode(!isDarkTheme);
  };

  onProfileClick = () => {};

  onPrivacySecurityClick = () => {
    navigate(Routes.SETTINGS.PRIVACY_SECURITY);
  };

  onPrivacyClick = () => {
    navigate(Routes.SETTINGS.PRIVACY);
  };

  onNotificationClick = () => {
    navigate(Routes.SETTINGS.NOTIFICATIONS);
  };

  onNotificationPreferencesClick = () => {
    navigate(Routes.SETTINGS.NOTIFICATION_PREFERENCES);
  };

  render() {
    const {isDarkTheme} = this.props;
    return (
      <>
        <Settings_Component
          source={
            'https://s3-alpha-sig.figma.com/img/cb87/e6f1/7f1b4f2493f74ca4945652e8ad78daac?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCCkSBpqZYedRfyYNClw2EFV~X6FJZat5gkFsMu3wYqN6AaB0QLchOIoYVbf2aVtVSl7YObLpfsEdcHk0gACdSsPpyOn1f8rPkfYLsbLBlbeMuTX46mDkJfZtb-Kf8f6WWI-v6lzHX5TAWlzDDQqx3yDBciqLuF~3AGQKUrwWY5~HBbDr4tHqh7Or1NcLu3oBH1iN7zDH13ZpYtuDLG6pX-hL1cEQVBtjdhtLGmH-KDammO8ic7Hwk6-cihDMBdS9lvqco0D6XRBWVNg6IQIPWelRyBdJLLX-E6sOBL2kmdf1T7NmqMHgCKS~Ar~Su126cZTemBsA3bI0vdNqZxsEQ__'
          }
          username={'Austin-NFT'}
          status={'Trust your feelings , be a good human beings'}
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
  };
};
export default connect(mapStateToProps, mapActionCreators)(Settings);
