import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import ConfirmSeedPhrase_Component from './ConfirmSeedPhrase_Component';
let wordDir =
  'report ocean inject absurd spot cube ripple border asset glare legal like';
class ConfirmSeedPhrase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      seedPhraseReady: false,
      selectedPhrase: [],
    };

    this.selectWord = this.selectWord.bind(this);
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.primaryButtonPress = this.primaryButtonPress.bind(this);
  }

  // useEffect(() => {
  //   const wordsFromRoute = route.params?.words ?? [];
  //   setConfirmedWords(
  //     new Array(wordsFromRoute.length).fill({
  //       word: undefined,
  //       originalPosition: undefined,
  //     }),
  //   );
  //   createWordsDictionary();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  componentDidMount = async () => {
    this.createWordsDictionary();
  };

  createWordsDictionary = () => {
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
      seedPhraseReady: tempConfirmedWords?.length == 3,
    });
  };

  onPressLeftContent = () => {
    goBack();
  };

  primaryButtonPress = () => {
    const {selectedPhrase} = this.state;
    console.log({selectedPhrase});
    navigate('HomeScreen');
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
