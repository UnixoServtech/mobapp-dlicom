import React, {Component} from 'react';
import {connect} from 'react-redux';
import Strings from '../../localization/Strings';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import Select_Wallet_Component from './Select_Wallet_Component';
import Routes from '../../navigation/Routes';
import {importNewWallet} from '../../redux/actions/userWallets';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletList: [],
      selectedWallet: null,
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.nextPress = this.nextPress.bind(this);
    this.onChangeRadio = this.onChangeRadio.bind(this);
    this.onPressAddNewWallet = this.onPressAddNewWallet.bind(this);
  }

  componentDidMount() {
    const wallet = this.props?.route?.params?.wallet;
    if (wallet) {
      console.log(wallet, wallet.address);
      const initWallet = {
        name: `Davis ${0}`,
        avatar: 'https://picsum.photos/300/300',
        id: wallet.address,
        wallet: wallet,
        selected: true,
      };
      this.setState(prev => ({
        ...prev,
        walletList: [...prev.walletList, initWallet],
        selectedWallet: 0,
      }));
    }
  }

  onPressLeftContent = () => {
    goBack();
  };

  nextPress = () => {
    // navigate(Routes.MANUAL_BACKUP_STEP);
    this.props.importNewWallet(this.state.walletList[0]);
  };

  onChangeRadio = (item, index) => {
    let {walletList} = this.state;
    walletList.forEach(element => {
      element.selected = element === item;
    });
    this.setState({walletList, selectedWallet: item});
    console.log(this.state.selectedWallet);
  };

  onPressAddNewWallet = () => {};

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
        />
      </>
    );
  }
}

const mapActionCreators = {
  importNewWallet,
};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Wallet);
