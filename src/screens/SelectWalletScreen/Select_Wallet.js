import React, {Component} from 'react';
import {connect} from 'react-redux';
import images from '../../assets/images';
import {toDataUrl} from '../../core/Blockies';
import {addNewEthAccount} from '../../core/eth';
import Strings from '../../localization/Strings';
import {goBack, navigateAndSimpleReset} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import {
  addWallets,
  defaultWallet,
  selectNewWallet,
} from '../../redux/actions/userWallets';
import Select_Wallet_Component from './Select_Wallet_Component';
import AsyncStorage from '@react-native-community/async-storage';
import {LOCAL_STORAGE} from '../../constants/storage';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletList: [],
      selectedWallet: 0,
      index: 1,
      defaultWallet: {},
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.nextPress = this.nextPress.bind(this);
    this.onChangeRadio = this.onChangeRadio.bind(this);
    this.onPressAddNewWallet = this.onPressAddNewWallet.bind(this);
  }

  componentDidMount() {
    const wallet = JSON.parse(this.props?.route?.params?.wallet);
    if (wallet) {
      const initWallet = {
        name: `Davis ${0}`,
        avatar: toDataUrl(wallet.address),
        id: wallet.address,
        wallet: {address: wallet?.address},
        selected: true,
      };
      this.setState(prev => ({
        ...prev,
        walletList: [...prev.walletList, initWallet],
        selectedWallet: 0,
        defaultWallet: {
          name: `Davis ${0}`,
          avatar: toDataUrl(wallet.address),
          id: wallet.address,
          wallet: wallet,
          selected: true,
        },
      }));
    }
  }

  onPressLeftContent = () => {
    goBack();
  };

  nextPress = async () => {
    this.props.addWallets(this.state.walletList);
    this.props.defaultWallet(this.state.walletList[0]);
    this.props.selectNewWallet(
      this.state.walletList[this.state.selectedWallet],
    );

    await AsyncStorage.setItem(LOCAL_STORAGE.WALLET_CREATED, 'true');

    // Navigate user to HomeView
    navigateAndSimpleReset(Routes.HOME_NAV.ROOT_NAV);
  };

  onChangeRadio = (item, index) => {
    let {walletList} = this.state;
    walletList.forEach(element => {
      element.selected = element === item;
    });
    this.setState({walletList, selectedWallet: index});
  };

  onPressAddNewWallet = async () => {
    if (this.state.index > 4) {
      return;
    }

    // To create new Wallet from mnemonic.
    const newWallet = await addNewEthAccount(
      this.state.defaultWallet?.wallet.mnemonic?.phrase,
      this.state.index,
    );
    if (newWallet) {
      const derivedWallet = {
        name: `Davis ${this.state.index}`,
        avatar: toDataUrl(newWallet.address),
        id: newWallet.address,
        wallet: newWallet,
        selected: false,
      };
      // Add new wallet to existing walletList.
      this.setState(prev => ({
        ...prev,
        walletList: [...prev.walletList, derivedWallet],
        index: prev.index + 1,
      }));
    }
  };

  render() {
    const {walletList} = this.state;
    return (
      <>
        <Select_Wallet_Component
          headerLeftText={Strings.back}
          onPressLeftContent={this.onPressLeftContent}
          walletNote={Strings.walletNote}
          walletTittle={Strings.chooseYourUserName}
          walletList={walletList}
          btnLabel={Strings.next}
          btnPress={this.nextPress}
          onChangeRadio={this.onChangeRadio}
          btnAddNewWalletLabel={Strings.addNewWallet}
          btnPressAddNewWallet={this.onPressAddNewWallet}
          btnAddNewWalletRightIcon={images.ic_plus}
          btnAddNewWalletIsDisabled={this.state.index > 4}
        />
      </>
    );
  }
}

const mapActionCreators = {
  addWallets,
  defaultWallet,
  selectNewWallet,
};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Wallet);
