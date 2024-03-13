import React, {Component} from 'react';
import {connect} from 'react-redux';
import Notification_Component from './Notification_Component';
import {goBack} from '../../navigation/NavigationUtils';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.handleImportWallet = this.handleImportWallet.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  handleImportWallet = () => {};

  render() {
    return (
      <>
        <Notification_Component
          onPressLeftContent={this.onPressLeftContent}
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
export default connect(mapStateToProps, mapActionCreators)(Notification);
