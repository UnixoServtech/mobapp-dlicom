import React, {Component} from 'react';
import {connect} from 'react-redux';
import Strings from '../../localization/Strings';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import Select_Wallet_Component from './Select_Wallet_Component';
import Routes from '../../navigation/Routes';
const tempArray = Array(5)
  .fill(0)
  .map((_, i) => {
    return {
      name: `Davis ${i}`,
      avatar: 'https://picsum.photos/300/300',
      id: `0xc0ffee254729296a..${i}`,
    };
  });

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walletList: tempArray,
      selectedWallet: null,
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.nextPress = this.nextPress.bind(this);
    this.onChangeRadio = this.onChangeRadio.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  nextPress = () => {
    // alert(JSON.stringify(this.state.selectedWallet));
    navigate(Routes.MANUAL_BACKUP_STEP);
  };

  onChangeRadio = (item, index) => {
    let {walletList} = this.state;
    walletList.forEach(element => {
      element.selected = element === item;
    });
    this.setState({walletList, selectedWallet: item});
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
export default connect(mapStateToProps, mapActionCreators)(Wallet);
