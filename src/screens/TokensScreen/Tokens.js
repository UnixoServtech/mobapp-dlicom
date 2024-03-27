import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tokens_Component from './Tokens_Component';

class Tokens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenList: this.props.tokenList,
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tokenList !== this.props.tokenList) {
      this.setState({
        tokenList: this.props.tokenList,
      });
    }
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
