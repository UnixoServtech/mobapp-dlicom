import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wallet_History_Component from './Wallet_History_Component';
import {goBack, navigate} from '../../../navigation/NavigationUtils';
import Routes from '../../../navigation/Routes';
import {getActivityHistory} from '../../../core/eth';

class WalletHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {wallet: {}, history: []};
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onHistoryItemPress = this.onHistoryItemPress.bind(this);
  }

  componentDidMount() {
    this.setState(
      prev => ({
        wallet: this.props.selectedWallet,
      }),
      () => {
        getActivityHistory(this.state.wallet?.wallet?.address)
          .then(data => {
            console.log(data);
            this.setState({
              history: data,
            });
          })
          .catch(error => {
            console.log(error);
          });
      },
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedWallet !== this.props.selectedWallet) {
      this.setState({
        wallet: this.props.selectedWallet,
      });
    }
  }

  onPressLeftContent = () => {
    goBack();
  };

  onHistoryItemPress = () => {
    navigate(Routes.WALLET_HISTORY_DETAIL);
  };

  render() {
    return (
      <>
        <Wallet_History_Component
          onPressLeftContent={this.onPressLeftContent}
          historyList={this.state.history}
          onHistoryItemPress={this.onHistoryItemPress}
          ownAddress={this.state.wallet?.wallet?.address}
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
export default connect(mapStateToProps, mapActionCreators)(WalletHistory);
