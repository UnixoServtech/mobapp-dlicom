import React, {Component} from 'react';
import {connect} from 'react-redux';
import SettingsTemplate_Component from '../SettingsTemplate/SettingsTemplate_Component';
import {goBack} from '../../../navigation/NavigationUtils';
import {SwitchToggle} from '../../../components';
import Strings from '../../../localization/Strings';

class NotificationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangeShowNotification = this.onChangeShowNotification.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  onChangeShowNotification = () => {
    this.setState({
      showNotification: !this.state.showNotification,
    });
  };

  render() {
    return (
      <>
        <SettingsTemplate_Component
          headerTittle={Strings.notifications}
          renderSettingsList={[
            {
              isLeftDisabled: true,
              tittle: Strings.show_notification,
              headerLabel: Strings.notifications,
              disabled: true,
              rightElement: (
                <SwitchToggle
                  switchOn={this.state.showNotification}
                  onPress={this.onChangeShowNotification}
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
export default connect(mapStateToProps, mapActionCreators)(NotificationView);
