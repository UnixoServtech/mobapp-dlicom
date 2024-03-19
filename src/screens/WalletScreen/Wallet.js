import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Wallet_Component from './Wallet_Component';
import Routes from '../../navigation/Routes';
import Strings from '../../localization/Strings';
import {AppConstant} from '../../constants/constants';
import {selectNewWallet} from '../../redux/actions/userWallets';
class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: AppConstant.tokenType,
      wallet: {},
      wallets: [],
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.onReceiveClick = this.onReceiveClick.bind(this);
    this.onScanClick = this.onScanClick.bind(this);
    this.hideActionModal = this.hideActionModal.bind(this);
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

  onSendClick = () => {
    console.log('onSendClick');
  };

  onReceiveClick = () => {
    console.log('onReceiveClick');
  };

  onScanClick = () => {
    console.log('onScanClick');
  };

  switchTab = type => {
    if (this.state.selectedTab === type) {
      return;
    }
    this.setState({
      selectedTab: type,
    });
  };

  hideActionModal = () => {
    this.setState({showActionSheet: false});
  };

  render() {
    const {selectedTab, searchWord, showActionSheet} = this.state;
    return (
      <>
        <Wallet_Component
          selectedAccountName={this.state.wallet?.name}
          avatarLink={this.state.wallet?.avatar}
          amount={'$ 5,323.00'}
          onSendClick={this.onSendClick}
          onReceiveClick={this.onReceiveClick}
          onScanClick={this.onScanClick}
          routeMap={[
            {
              label: Strings.tokens,
              selected: selectedTab === AppConstant.tokenType,
              type: AppConstant.tokenType,
              onPress: () => this.switchTab(AppConstant.tokenType),
            },
            {
              label: Strings.swap,
              selected: selectedTab === AppConstant.swapType,
              type: AppConstant.swapType,
              onPress: () => this.switchTab(AppConstant.swapType),
            },
          ]}
          selectedTab={selectedTab}
          onPress={() => navigate(Routes.GROUP_VIEW)}
          onPress1={() => navigate(Routes.SELECT_COIN)}
          actionSheetProp={{
            showActionSheet: showActionSheet,
            onRequestClose: this.hideActionModal,
            cancelBtnProp: {
              label: Strings.cancel,
              onPress: this.hideActionModal,
              variant: 'link',
            },
            wallets: this.state.wallets,
          }}
          onItemPress={(item, index) => {
            this.props.selectNewWallet(item);
            this.hideActionModal();
          }}
          onPressAccount={() =>
            this.setState({
              showActionSheet: true,
            })
          }
        />
      </>
    );
  }
}

const mapActionCreators = {selectNewWallet};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
    selectedWallet: state.userWallets.selectedWallet,
    userWallets: state.userWallets,
    wallets: state.userWallets.wallets,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Wallet);
