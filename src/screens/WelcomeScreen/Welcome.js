import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import Welcome_Component from './Welcome_Component';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {
    navigate(Routes.CREATE_PASSWORD, {createType: 'New'});
  };

  handleImportWallet = () => {
    navigate(Routes.CREATE_PASSWORD, {createType: 'Import'});
  };

  render() {
    return (
      <>
        <Welcome_Component
          buttonCreateNewWallet={this.handleCreateNewWallet}
          buttonImportWallet={this.handleImportWallet}
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
