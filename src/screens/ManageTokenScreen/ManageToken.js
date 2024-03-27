import React, {Component} from 'react';
import {connect} from 'react-redux';
import ManageToken_Component from './ManageToken_Component';

class ManageToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      tokenList: Array(12)
        .fill(0)
        .map((_, i) => i),
      showNetworkModal: false,
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.onSearchCoin = this.onSearchCoin.bind(this);
    this.onSearchCancel = this.onSearchCancel.bind(this);
    this.addNetworkClick = this.addNetworkClick.bind(this);
    this.onTokenClick = this.onTokenClick.bind(this);
    this.tokenSelectDeselect = this.tokenSelectDeselect.bind(this);
    this.onRequestNetworkModalClose =
      this.onRequestNetworkModalClose.bind(this);
    this.nameRef = null;
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  onSearchCoin = value => {
    this.setState({
      searchWord: value,
    });
  };

  onSearchCancel = () => {
    this.setState({
      searchWord: '',
    });
  };

  addNetworkClick = () => {};

  onTokenClick = (item, index) => {
    this.setState({showNetworkModal: true});
  };

  tokenSelectDeselect = (item, index) => {};

  onRequestNetworkModalClose = () => {
    this.setState({
      showNetworkModal: false,
    });
  };

  onSubmitEditingWallet = () => {
    this.nameRef?.current?.focus();
  };

  render() {
    const {tokenList, searchWord, showNetworkModal} = this.state;
    return (
      <>
        <ManageToken_Component
          searchBarProp={{
            placeHolderText: 'coins',
            value: searchWord,
            onChangeText: this.onSearchCoin,
            showRightContent: searchWord.trim()?.length > 0,
            onPressRightContent: this.onSearchCancel,
          }}
          button1Press={this.handleCreateNewWallet}
          button2Press={this.handleImportWallet}
          tokenList={tokenList}
          addNetworkClick={this.addNetworkClick}
          onTokenClick={this.onTokenClick}
          tokenSelectDeselect={this.tokenSelectDeselect}
          showNetworkModal={showNetworkModal}
          onRequestNetworkModalClose={this.onRequestNetworkModalClose}
          onSubmitEditingWallet={this.onSubmitEditingWallet}
          nameRef={this.nameRef}
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
export default connect(mapStateToProps, mapActionCreators)(ManageToken);
