import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import ManualBackupStep_Component from './ManualBackupStep_Component';
import Strings from '../../localization/Strings';
import {Toast} from '../../components/Toast';
import Clipboard from '@react-native-clipboard/clipboard';
import {goBack} from '../../navigation/NavigationUtils';

class ManualBackupStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seedPhraseHidden: true,
      seedPhrase:
        'usual seek approve sudden round check elbow embark sure siren vanish trend',
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.revealSeedPhrase = this.revealSeedPhrase.bind(this);
    this.copySeedPhrase = this.copySeedPhrase.bind(this);
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
  }

  componentDidMount() {}

  handleCreateNewWallet = () => {};

  revealSeedPhrase = () => {
    this.setState({
      seedPhraseHidden: !this.state.seedPhraseHidden,
    });
  };

  copySeedPhrase = async () => {
    Toast.show({
      type: 'success',
      text1: 'Seed Phrase detail copied..',
    });
    await Clipboard.setString(this.state.seedPhrase);
  };

  onPressLeftContent = () => {
    goBack();
  };

  render() {
    return (
      <>
        <ManualBackupStep_Component
          headerLeftText={Strings.back}
          headerText={Strings.back_up_your_sed_phrase}
          noteText={Strings.back_up_your_sed_phrase_note}
          copyButton={Strings.copy_seed_phrase}
          btn1Label={Strings.backup_on_cloud}
          btn2Label={Strings.backup_manually}
          seedPhraseHidden={this.state.seedPhraseHidden}
          revealSeedPhrase={this.revealSeedPhrase}
          copyPress={this.copySeedPhrase}
          seedPhrase={this.state.seedPhrase}
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
export default connect(mapStateToProps, mapActionCreators)(ManualBackupStep);
