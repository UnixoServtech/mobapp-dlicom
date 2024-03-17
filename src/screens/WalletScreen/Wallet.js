import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Wallet_Component from './Wallet_Component';
import Routes from '../../navigation/Routes';
import Strings from '../../localization/Strings';
import {AppConstant} from '../../constants/constants';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: AppConstant.tokenType,
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.onSendClick = this.onSendClick.bind(this);
    this.onReceiveClick = this.onReceiveClick.bind(this);
    this.onScanClick = this.onScanClick.bind(this);
  }

  componentDidMount() {}

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

  render() {
    const {selectedTab} = this.state;
    return (
      <>
        <Wallet_Component
          selectedAccountName={'randomuser.io'}
          avatarLink={'https://picsum.photos/300/300'}
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
