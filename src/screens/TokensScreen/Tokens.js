import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tokens_Component from './Tokens_Component';

class Tokens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenList: Array(9)
        .fill(0)
        .map((_, i) => i),
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  render() {
    const {tokenList} = this.state;
    return (
      <>
        <Tokens_Component
          tokenList={tokenList}
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
export default connect(mapStateToProps, mapActionCreators)(Tokens);
