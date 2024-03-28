import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wallet_History_Detail_Component from './Wallet_History_Detail_Component';
import {goBack} from '../../../navigation/NavigationUtils';

class WalletHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  render() {
    return (
      <>
        <Wallet_History_Detail_Component
          onPressLeftContent={this.onPressLeftContent}
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
