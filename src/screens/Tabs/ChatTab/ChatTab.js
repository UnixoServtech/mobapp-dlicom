import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatTab_Component from './ChatTab_Component';
import Strings from '../../../localization/Strings';
import Share from 'react-native-share';

class ChatTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      showActionSheet: false,
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
    this.hideActionModal = this.hideActionModal.bind(this);
    this.onItemPress = this.onItemPress.bind(this);
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {};

  handleImportWallet = () => {};

  onWordSearch = text => {
    this.setState({
      searchWord: text,
    });
  };

  clearSearch = () => {
    this.setState({
      searchWord: '',
    });
  };

  onItemPress = (item, index) => {
    this.setState({
      showActionSheet: true,
    });
  };

  hideActionModal = () => {
    this.setState({showActionSheet: false});
  };

  handleShareAction = () => {
    Share.open({
      message: 'https://pedalsup.com/',
    });
  };

  handleMarkAllRead = () => {
    console.log('handleMarkAllRead');
  };

  handleClearHistory = () => {
    console.log('handleClearHistory');
  };

  handleDeleteChat = () => {
    console.log('handleDeleteChat');
  };

  render() {
    const {searchWord, showActionSheet} = this.state;
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
          actionSheetProp={{
            showActionSheet: showActionSheet,
            onRequestClose: this.hideActionModal,
            shareBtnProp: {
              label: Strings.share_chat,
              onPress: this.handleShareAction,
            },
            markAllReadBtnProp: {
              label: Strings.mark_all_read,
              onPress: this.handleMarkAllRead,
            },
            clearHistoryBtnProp: {
              label: Strings.clear_history,
              onPress: this.handleClearHistory,
            },
            deleteChatBtnProp: {
              label: Strings.delete_chat,
              onPress: this.handleDeleteChat,
            },
            cancelBtnProp: {
              label: Strings.cancel,
              onPress: this.hideActionModal,
              variant: 'link',
            },
          }}
          onItemPress={this.onItemPress}
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
