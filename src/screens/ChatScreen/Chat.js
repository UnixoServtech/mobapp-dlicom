import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Chat_Component from './Chat_Component';
import Routes from '../../navigation/Routes';
import Strings from '../../localization/Strings';
import {AppConstant} from '../../constants/constants';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: AppConstant.chatType,
      wallet: {},
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.notificationClick = this.notificationClick.bind(this);
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

  handleCreateNewWallet = () => {
    navigate(Routes.ACTIVE_CHAT_VIEW);
  };

  handleImportWallet = () => {};

  switchTab = type => {
    const {selectedTab} = this.state;
    if (selectedTab === type) {
      return;
    }
    this.setState({
      selectedTab: type,
    });
  };

  notificationClick = () => {
    navigate(Routes.NOTIFICATION);
  };

  render() {
    const {selectedTab} = this.state;
    return (
      <>
        <Chat_Component
          notificationClick={this.notificationClick}
          button2Press={this.handleImportWallet}
          routeMap={[
            {
              label: Strings.chat,
              selected: selectedTab === AppConstant.chatType,
              type: AppConstant.chatType,
              onPress: () => this.switchTab(AppConstant.chatType),
            },
            {
              label: Strings.status,
              selected: selectedTab === AppConstant.statusType,
              type: AppConstant.statusType,
              onPress: () => this.switchTab(AppConstant.statusType),
            },
          ]}
          selectedTab={selectedTab}
          avatar={this.state.wallet?.avatar}
          name={this.state.wallet?.name}
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
    selectedWallet: state.userWallets.selectedWallet,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Chat);
