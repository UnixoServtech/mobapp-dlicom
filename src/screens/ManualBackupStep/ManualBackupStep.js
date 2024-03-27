import Clipboard from '@react-native-clipboard/clipboard';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Toast} from '../../components/Toast';
import Strings from '../../localization/Strings';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import ManualBackupStep_Component from './ManualBackupStep_Component';
import Routes from '../../navigation/Routes';
import Share from 'react-native-share';
import {PermissionsAndroid, Platform} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';

class ManualBackupStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seedPhraseHidden: true,
      seedPhrase: '',
      setWordsDict: '',
      wallet: {},
    };
    this.handleCreateNewWallet = this.handleCreateNewWallet.bind(this);
    this.revealSeedPhrase = this.revealSeedPhrase.bind(this);
    this.copySeedPhrase = this.copySeedPhrase.bind(this);
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.secondaryButtonPress = this.secondaryButtonPress.bind(this);
    this.primaryButtonPress = this.primaryButtonPress.bind(this);
  }

  componentDidMount() {
    if (this.props?.route?.params?.wallet) {
      const wallet = JSON.parse(this.props?.route?.params?.wallet);
      console.log(wallet); // TODO: Remove in prod. build
      this.setState(prev => ({
        ...prev,
        seedPhrase: wallet?.mnemonic?.phrase,
        wallet: wallet,
      }));
    }
  }

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

  primaryButtonPress = async () => {
    const {config, fs} = ReactNativeBlobUtil;
    let directory =
      fs?.dirs?.[Platform.OS === 'ios' ? 'DocumentDir' : 'LegacyDownloadDir'];
    const newDoc = `mnemonic_${moment().format('YYYYMMDD_HHmmss')}.txt`;
    const filePath = `${directory}/${newDoc}`;
    if (Platform.OS === 'ios') {
      this.writeFileOnDirectory(filePath);
    } else if (
      Platform.OS === 'android' &&
      DeviceInfo.getSystemVersion() < 13
    ) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Storage Permission Required',
            message: 'Allow Dlicom to access storage for mnemonic backups.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.writeFileOnDirectory(filePath);
        } else {
          // If permission denied then show alert
          Toast({type: 'success', text1: 'Storage Permission Not Granted'});
        }
      } catch (err) {
        // To handle permission related exception
        console.log(err);
      }
    } else {
      this.writeFileOnDirectory(filePath);
    }
  };

  writeFileOnDirectory = async filePath => {
    await ReactNativeBlobUtil.fs
      .writeFile(filePath, this.state.seedPhrase, 'utf8')
      .then(success => {
        Share.open({
          url: `file://${filePath}`,
        }).catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  secondaryButtonPress = async () => {
    navigate(Routes.SEED_PHRASE, {
      wallet: JSON.stringify(this.state.wallet),
    });
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
          btn2Label={Strings.next}
          seedPhraseHidden={this.state.seedPhraseHidden}
          revealSeedPhrase={this.revealSeedPhrase}
          copyPress={this.copySeedPhrase}
          seedPhrase={this.state.seedPhrase}
          onPressLeftContent={this.onPressLeftContent}
          primaryButtonPress={this.primaryButtonPress}
          secondaryButtonPress={this.secondaryButtonPress}
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
