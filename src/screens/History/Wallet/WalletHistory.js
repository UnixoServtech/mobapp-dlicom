import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wallet_History_Component from './Wallet_History_Component';
import {goBack, navigate} from '../../../navigation/NavigationUtils';
import Routes from '../../../navigation/Routes';

class WalletHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onHistoryItemPress = this.onHistoryItemPress.bind(this);
  }

  componentDidMount() {}

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
          historyList={Array(9)
            .fill(0)
            .map((_, i) => i)}
          onHistoryItemPress={this.onHistoryItemPress}
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
export default connect(mapStateToProps, mapActionCreators)(WalletHistory);
