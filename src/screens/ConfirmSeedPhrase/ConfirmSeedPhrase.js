import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import ConfirmSeedPhrase_Component from './ConfirmSeedPhrase_Component';
import {Toast} from '../../components/Toast';
let wordDir =
  'report ocean inject absurd spot cube ripple border asset glare legal like';

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fisher-Yates shuffle algorithm
 *
 * @param {array} wordDir
 * @param {array} phrase
 * @returns Shuffled array
 */
function shuffleArray(wordDir, phrase) {
  console.log(phrase);
  // Remove words from random positions
  for (let i = 0; i < 3; i++) {
    const randomPosition = getRandomInt(0, wordDir.length - 1);
    wordDir.splice(randomPosition, 1);
  }

  // Add new phrases words to wordDir.
  for (let i = 0; i < 3; i++) {
    const randomPosition = getRandomInt(0, phrase.length - 1);
    wordDir[wordDir.length] = phrase[randomPosition];
  }

  for (let i = wordDir.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordDir[i], wordDir[j]] = [wordDir[j], wordDir[i]];
  }
  return wordDir;
}

class ConfirmSeedPhrase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      seedPhraseReady: false,
      selectedPhrase: [],
      phrase: '',
      wallet: {},
    };

    this.selectWord = this.selectWord.bind(this);
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.primaryButtonPress = this.primaryButtonPress.bind(this);
  }

  componentDidMount = async () => {
    const wallet = JSON.parse(this.props?.route?.params?.wallet);
    if (wallet) {
      const phrase = wallet?.mnemonic?.phrase;
      this.setState(prev => ({
        ...prev,
        wallet: wallet,
        phrase: phrase,
      }));
      const shuffledList = shuffleArray(wordDir.split(' '), phrase.split(' '));
      // Create list from shuffled array.
      this.createWordsDictionary(shuffledList.join(' '));
    }
  };

  createWordsDictionary = wordDir => {
    let _wordDir = JSON.stringify(wordDir).replace(/"/g, '').split(' ');
    let wordsDict = [];
    _wordDir.forEach(element => {
      wordsDict.push({
        selected: false,
        word: element,
      });
    });
    this.setState({
      words: wordsDict,
    });
  };

  selectWord = (item, index) => {
    let {words} = this.state;
    let tempConfirmedWords = [];
    words.forEach(element => {
      if (element?.word === item?.word) {
        element.selected = !element.selected;
      }
      if (element.selected) {
        tempConfirmedWords.push(element?.word);
      }
    });
    this.setState({
      words,
      selectedPhrase: tempConfirmedWords,
      seedPhraseReady: tempConfirmedWords?.length === 3,
    });
  };

  onPressLeftContent = () => {
    goBack();
  };

  primaryButtonPress = () => {
    const {selectedPhrase} = this.state;
    console.log({selectedPhrase});
    if (
      this.state.phrase.includes(this.state.selectedPhrase[0]) &&
      this.state.phrase.includes(this.state.selectedPhrase[1]) &&
      this.state.phrase.includes(this.state.selectedPhrase[2])
    ) {
      navigate(Routes.ONBOARDING.SELECT_WALLET, {
        wallet: JSON.stringify(this.state.wallet),
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Select valid phrases.',
      });
    }
  };

  render() {
    return (
      <>
        <ConfirmSeedPhrase_Component
          seedPhraseList={this.state.seedPhraseList}
          onSeedPhraseSelect={this.selectWord}
          words={this.state.words}
          onPressLeftContent={this.onPressLeftContent}
          seedPhraseReady={this.state.seedPhraseReady}
          primaryButtonPress={this.primaryButtonPress}
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
