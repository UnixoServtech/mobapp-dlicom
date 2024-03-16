import React, {Component} from 'react';
import {connect} from 'react-redux';
import PrivacyView_Component from './PrivacyView_Component';
import {goBack} from '../../../navigation/NavigationUtils';
import {SwitchToggle} from '../../../components';
import Strings from '../../../localization/Strings';

class PrivacyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreviewMsg: false,
      showReadMsg: false,
      showPreviewChannelLink: false,
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangePreviewMsgClick = this.onChangePreviewMsgClick.bind(this);
    this.onChangeDisplayReadMsgClick =
      this.onChangeDisplayReadMsgClick.bind(this);
    this.onChangePreviewChannelLink =
      this.onChangePreviewChannelLink.bind(this);
    this.onWhoCanChatWithMeClick = this.onWhoCanChatWithMeClick.bind(this);
    this.onWhoCanSeeProfileClick = this.onWhoCanSeeProfileClick.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  onChangePreviewMsgClick = () => {
    this.setState({
      showPreviewMsg: !this.state.showPreviewMsg,
    });
  };

  onChangeDisplayReadMsgClick = () => {
    this.setState({
      showReadMsg: !this.state.showReadMsg,
    });
  };

  onChangePreviewChannelLink = () => {
    this.setState({
      showPreviewChannelLink: !this.state.showPreviewChannelLink,
    });
  };

  onWhoCanChatWithMeClick = () => {
    console.log('onWhoCanChatWithMeClick');
  };

  onWhoCanSeeProfileClick = () => {
    console.log('onWhoCanSeeProfileClick');
  };

  render() {
    const {showPreviewChannelLink, showPreviewMsg, showReadMsg} = this.state;
    return (
      <>
        <PrivacyView_Component
          settingTemplateProp={{
            headerTittle: Strings.privacy,
            onPressLeftContent: this.onPressLeftContent,
            renderSettingsList: [
              {
                isLeftDisabled: true,
                tittle: Strings.preview_message,
                headerLabel: Strings.privacy,
                disabled: true,
                rightElement: (
                  <SwitchToggle
                    switchOn={showPreviewMsg}
                    onPress={this.onChangePreviewMsgClick}
                  />
                ),
              },
              {
                isLeftDisabled: true,
                tittle: Strings.display_read_message,
                disabled: true,
                rightElement: (
                  <SwitchToggle
                    switchOn={showReadMsg}
                    onPress={this.onChangeDisplayReadMsgClick}
                  />
                ),
              },
              {
                isLeftDisabled: true,
                tittle: Strings.preview_channel_link,
                disabled: true,
                rightElement: (
                  <SwitchToggle
                    switchOn={showPreviewChannelLink}
                    onPress={this.onChangePreviewChannelLink}
                  />
                ),
              },
              {section: true},
              {
                leftIconName: 'Message_write',
                tittle: Strings.who_can_chat_with_me,
                onPress: this.onWhoCanChatWithMeClick,
                extraPadding: true,
              },
              {
                leftIconName: 'user_circle_1',
                tittle: Strings.who_can_see_my_profile_picture,
                onPress: this.onWhoCanSeeProfileClick,
              },
            ],
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
export default connect(mapStateToProps, mapActionCreators)(PrivacyView);
