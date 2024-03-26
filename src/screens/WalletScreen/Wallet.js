import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Wallet_Component from './Wallet_Component';
import Routes from '../../navigation/Routes';
import Strings from '../../localization/Strings';
import {AppConstant} from '../../constants/constants';
import {selectNewWallet} from '../../redux/actions/userWallets';
import Clipboard from '@react-native-clipboard/clipboard';
import {Toast} from '../../components/Toast';
import Share from 'react-native-share';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: AppConstant.tokenType,
      wallet: {},
      wallets: [],
      showQrModal: false,
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.onReceiveClick = this.onReceiveClick.bind(this);
    this.onScanClick = this.onScanClick.bind(this);
    this.hideActionModal = this.hideActionModal.bind(this);
    this.onModalHide = this.onModalHide.bind(this);
    this.btnShareAddress = this.btnShareAddress.bind(this);
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
    this.setState({
      showQrModal: true,
    });
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

  onModalHide = () => {
    this.setState({
      showQrModal: false,
    });
  };

  btnShareAddress = () => {
    Share.open({
      message: this.state.wallet?.wallet?.address,
    }).catch(err => console.log(err));
  };

  contentPress = async () => {
    await Clipboard.setString(this.state.wallet?.wallet?.address);
    Toast.show({
      type: 'success',
      text1: 'Wallet address copied!',
    });
  };

  render() {
    const {selectedTab, searchWord, showActionSheet, showQrModal} = this.state;
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
          headerText={this.state.wallet?.name}
          showQrCodeModal={showQrModal}
          hideQrCodeModal={this.onModalHide}
          contentPress={this.contentPress}
          walletAddress={this.state.wallet?.wallet?.address}
          btnShareAddress={this.btnShareAddress}
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
