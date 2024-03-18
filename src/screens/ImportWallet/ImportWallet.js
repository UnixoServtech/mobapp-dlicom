import React, {Component} from 'react';
import {connect} from 'react-redux';
import {importNewEthWallet, isValidMnemonic} from '../../core/eth';
import Strings from '../../localization/Strings';
import {goBack, navigate} from '../../navigation/NavigationUtils';
import ImportWallet_Component from './ImportWallet_Component';
import Routes from '../../navigation/Routes';

class ImportWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seedPhrase: '',
    };
    this.onPressLeftContent = this.onPressLeftContent.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.primaryButtonPress = this.primaryButtonPress.bind(this);
    this.secondaryButtonPress = this.secondaryButtonPress.bind(this);
  }

  componentDidMount() {}

  onPressLeftContent = () => {
    goBack();
  };

  onChangeText = text => {
    this.setState({
      seedPhrase: text,
    });
  };

  primaryButtonPress = async () => {
    if (
      this.state.seedPhrase &&
      isValidMnemonic(this.state.seedPhrase.trim())
    ) {
      try {
        const wallet = await importNewEthWallet(this.state.seedPhrase.trim());
        if (wallet) {
          console.log(wallet);
          navigate(Routes.ONBOARDING.SELECT_WALLET, {wallet});
        }
      } catch (error) {}
    } else {
      alert('Enter valid seed Mnemonic');
    }
  };

  secondaryButtonPress = () => {
    this.setState({
      seedPhrase: '',
    });
  };

  // isHintSeedPhrase = hintText => {
  //   const words = this.props.route.params?.words;
  //   if (words) {
  //     const lower = string => String(string).toLowerCase();
  //     return lower(hintText) === lower(words.join(' '));
  //   }
  //   return false;
  // };

  render() {
    const {seedPhrase} = this.state;
    return (
      <>
        <ImportWallet_Component
          button1Press={this.handleCreateNewWallet}
          onPressLeftContent={this.onPressLeftContent}
          leftHeaderText={Strings.back}
          tittleText={Strings.enter_your_keys}
          tittleNote={Strings.paste_your_keys_here}
          placeHolder={Strings.paste_your_keys_here}
          onChangeText={this.onChangeText}
          value={seedPhrase}
          primaryButtonProps={{
            label: Strings.confirm,
            isDisabled: seedPhrase?.trim()?.length === 0,
            onPress: this.primaryButtonPress,
          }}
          secondaryButtonProps={{
            label: Strings.cancel,
            variant: 'ghost',
            themedColor: '#6C7072',
            onPress: this.secondaryButtonPress,
          }}
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
export default connect(mapStateToProps, mapActionCreators)(ImportWallet);
