import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from '../../../navigation/NavigationUtils';
import ChatView_Component from './ChatView_Component';

class ChatView extends Component {
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
        <ChatView_Component onPressLeftContent={this.onPressLeftContent} />
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
export default connect(mapStateToProps, mapActionCreators)(ChatView);
