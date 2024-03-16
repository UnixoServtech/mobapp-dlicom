import React, {Component} from 'react';
import {connect} from 'react-redux';
import SettingsTemplate_Component from '../SettingsTemplate/SettingsTemplate_Component';
import {goBack} from '../../../navigation/NavigationUtils';
import {SwitchToggle} from '../../../components';
import Strings from '../../../localization/Strings';

class NotificationPreference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotificationNonContact: false,
      showMention: false,
      showTransaction: false,
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangeNotificationNonContact =
      this.onChangeNotificationNonContact.bind(this);
    this.onChangeWalletTransaction = this.onChangeWalletTransaction.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  onChangeNotificationNonContact = () => {
    this.setState({
      showNotificationNonContact: !this.state.showNotificationNonContact,
    });
  };

  onChangeShowMention = () => {
    this.setState({
      showMention: !this.state.showMention,
    });
  };

  onChangeWalletTransaction = () => {
    this.setState({
      showTransaction: !this.state.showTransaction,
    });
  };

  render() {
    const {showMention, showNotificationNonContact, showTransaction} =
      this.state;
    return (
      <>
        <SettingsTemplate_Component
          headerTittle={Strings.notification_preferences}
          renderSettingsList={[
            {
              isLeftDisabled: true,
              tittle: Strings.notification_from_non_contact,
              headerLabel: Strings.notification_preferences,
              disabled: true,
              rightElement: (
                <SwitchToggle
                  switchOn={showNotificationNonContact}
                  onPress={this.onChangeNotificationNonContact}
                />
              ),
            },
            {
              isLeftDisabled: true,
              tittle: Strings.show_mentions,
              disabled: true,
              rightElement: (
                <SwitchToggle
                  switchOn={showMention}
                  onPress={this.onChangeShowMention}
                />
              ),
            },
            {
              isLeftDisabled: true,
              tittle: Strings.wallet_transaction,
              disabled: true,
              rightElement: (
                <SwitchToggle
                  switchOn={showTransaction}
                  onPress={this.onChangeWalletTransaction}
                />
              ),
            },
          ]}
          onPressLeftContent={this.onPressLeftContent}
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
export default connect(
  mapStateToProps,
  mapActionCreators,
)(NotificationPreference);
