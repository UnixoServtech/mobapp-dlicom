import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Welcome_Component from './Welcome_Component';
import {navigate} from '../../navigation/NavigationUtils';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {
    navigate('SecurityScreen');
  };

  handleImportWallet = () => {
    navigate('WalletScreen');
  };

  render() {
    return (
      <>
        <Welcome_Component
          button1Press={this.handleCreateNewWallet}
          button2Press={this.handleImportWallet}
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
export default connect(mapStateToProps, mapActionCreators)(Welcome);
