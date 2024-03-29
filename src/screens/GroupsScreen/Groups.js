import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from '../../navigation/NavigationUtils';
import Groups_Component from './Groups_Component';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: Array(9)
        .fill(0)
        .map((_, i) => i),
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  render() {
    return (
      <>
        <Groups_Component
          button2Press={this.handleImportWallet}
          onPressLeftContent={this.onPressLeftContent}
          groupList={this.state.groupList}
          btnLabel={'Next'}
          isDisabled
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
export default connect(mapStateToProps, mapActionCreators)(Groups);
