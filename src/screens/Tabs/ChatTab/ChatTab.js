import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatTab_Component from './ChatTab_Component';

class ChatTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  onWordSearch = text => {
    console.log({text});
    this.setState({
      searchWord: text,
    });
  };

  clearSearch = () => {
    this.setState({
      searchWord: '',
    });
  };

  render() {
    const {searchWord} = this.state;
    return (
      <>
        <ChatTab_Component
          storyList={Array(9)
            .fill(0)
            .map((_, i) => i)}
          searchProp={{
            placeHolderText: 'Search',
            value: searchWord,
            onChangeText: this.onWordSearch,
            showRightContent: searchWord?.trim().length > 0,
            onPressRightContent: this.clearSearch,
          }}
          button1Press={this.handleCreateNewWallet}
          button2Press={this.handleImportWallet}
          dataList={Array(9)
            .fill(0)
            .map((_, i) => i)}
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
export default connect(mapStateToProps, mapActionCreators)(ChatTab);
