import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import ConfirmSeedPhrase_Component from './ConfirmSeedPhrase_Component';
import {goBack} from '../../navigation/NavigationUtils';

class ConfirmSeedPhrase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        'abstract',
        'accident',
        'acoustic',
        'announce',
        'artefact',
        'attitude',
        'bachelor',
        'broccoli',
        'business',
        'category',
        'champion',
        'bachelor bachelor',
      ],
    };

    this.onSeedPhraseSelect = this.onSeedPhraseSelect.bind(this);
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
  }

  componentDidMount = async () => {};

  tryExportSeedPhrase = async password => {
    console.log({password});
    return JSON.stringify(password).replace(/"/g, '').split(' ');
  };

  onSeedPhraseSelect = (item, index) => {
    alert(JSON.stringify(item));
  };

  onPressLeftContent = () => {
    goBack();
  };

  render() {
    return (
      <>
        <ConfirmSeedPhrase_Component
          seedPhraseList={this.state.seedPhraseList}
          onSeedPhraseSelect={this.onSeedPhraseSelect}
          words={this.state.words}
          onPressLeftContent={this.onPressLeftContent}
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
export default connect(mapStateToProps, mapActionCreators)(ConfirmSeedPhrase);
