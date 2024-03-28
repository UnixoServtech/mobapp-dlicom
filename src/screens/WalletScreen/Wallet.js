import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Wallet_Component from './Wallet_Component';
import Routes from '../../navigation/Routes';
import Strings from '../../localization/Strings';
import {AppConstant, TOKENS} from '../../constants/constants';
import {selectNewWallet} from '../../redux/actions/userWallets';
import Clipboard from '@react-native-clipboard/clipboard';
import {Toast} from '../../components/Toast';
import Share from 'react-native-share';
import {getAccountBalance, getTokenListByAccount} from '../../core/eth';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: AppConstant.tokenType,
      wallet: {},
      wallets: [],
      showQrModal: false,
      walletBalance: 0,
      tokenList: [],
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.onReceiveClick = this.onReceiveClick.bind(this);
    this.onScanClick = this.onScanClick.bind(this);
    this.hideActionModal = this.hideActionModal.bind(this);
    this.onModalHide = this.onModalHide.bind(this);
    this.btnShareAddress = this.btnShareAddress.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.onPressRightContent = this.onPressRightContent.bind(this);
    this.sendTokenModalRef = React.createRef();
    this.onHistoryClick = this.onHistoryClick.bind(this);
  }

  async componentDidMount() {
    this.setState(prev => ({
      wallet: this.props.selectedWallet,
      wallets: this.props.wallets,
    }));
    this.focusListener = this.props.navigation.addListener(
      'focus',
      async () => {
        this.getProfile();
      },
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedWallet !== this.props.selectedWallet) {
      this.setState(
        {
          wallet: this.props.selectedWallet,
        },
        () => {
          this.getProfile();
        },
      );
    }
    if (prevState.tokenList !== this.state.tokenList) {
      this.setState({
        tokenList: this.state.tokenList,
      });
    }
  }

  componentWillUnmount() {
    this.focusListener();
  }

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  onSendClick = () => {
    this.sendTokenModalRef?.current?.open();
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

  getProfile = async () => {
    try {
      // Get wallet balance
      const walletAddress = this.props.selectedWallet?.wallet?.address;
      const walletBalance = await getAccountBalance(
        walletAddress,
        'https://polygon-mumbai-bor-rpc.publicnode.com/',
      );

      // Get token parameters
      const tokenAddresses = Object.values(TOKENS)
        .map(item => item?.tokenAddress)
        .join(',');

      // Fetch current token prices
      const pricesResponse = await fetch(
        `https://coins.llama.fi/prices/current/${tokenAddresses}?searchWidth=4h`,
      );
      if (!pricesResponse.ok) {
        throw new Error('Failed to fetch token prices');
      }

      const pricesData = await pricesResponse.json();

      // Set balance in USDC
      this.setState({
        walletBalance:
          walletBalance *
          pricesData?.coins[
            'ethereum:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          ]?.price,
      });

      // Fetch token percentages
      const percentagesResponse = await fetch(
        `https://coins.llama.fi/percentage/${tokenAddresses}`,
      );
      if (!percentagesResponse.ok) {
        throw new Error('Failed to fetch token percentages');
      }
      const percentagesData = await percentagesResponse.json();

      // Get token balances
      const tokenBalance = await getTokenListByAccount(
        walletAddress,
        Object.values(TOKENS),
        'https://eth.llamarpc.com/',
      );

      // Combine data
      const combinedList = {};
      for (const key in pricesData.coins) {
        if (
          percentagesData.coins.hasOwnProperty(key) &&
          tokenBalance.hasOwnProperty(key)
        ) {
          combinedList[key] = {
            ...pricesData.coins[key],
            percentage: percentagesData.coins[key],
            ...tokenBalance[key],
          };
        }
      }

      // Set state
      this.setState({tokenList: Object.values(combinedList)});
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  onPressRightContent = () => {
    navigate(Routes.MANAGE_TOKEN_VIEW);
  };

  onHistoryClick = () => {
    navigate(Routes.WALLET_HISTORY);
  };

  render() {
    const {selectedTab, searchWord, showActionSheet, showQrModal} = this.state;
    return (
      <>
        <Wallet_Component
          selectedAccountName={this.state.wallet?.name}
          avatarLink={this.state.wallet?.avatar}
          amount={
            this.state.walletBalance ? this.state.walletBalance?.toFixed(6) : 0
          }
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
          tokenList={this.state.tokenList}
          sendTokenModalRef={this.sendTokenModalRef}
          onPressRightContent={this.onPressRightContent}
          onHistoryClick={this.onHistoryClick}
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
