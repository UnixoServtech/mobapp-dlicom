import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LOCAL_STORAGE} from '../../constants/storage';
import {navigateAndSimpleReset} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import {setDarkMode} from '../../redux/actions/global';
import Splash_Component from './Splash_Component';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let isDarkTheme = await AsyncStorage.getItem(LOCAL_STORAGE.DARK_THEME);
    this.props.setDarkMode(JSON.parse(true));
    setTimeout(async () => {
      // Navigate User to Security Screen if BIOMETRY or PASSWORD is stored.
      if (
        ((await AsyncStorage.getItem(LOCAL_STORAGE.BIOMETRY)) ||
          (await AsyncStorage.getItem(LOCAL_STORAGE.PASSWORD))) &&
        (await AsyncStorage.getItem(LOCAL_STORAGE.WALLET_CREATED))
      ) {
        navigateAndSimpleReset(Routes.ONBOARDING.SECURITY);
      } else {
        navigateAndSimpleReset(Routes.ONBOARDING.ONBOARDING);
      }
    }, 1500);
  }

  render() {
    return (
      <>
        <Splash_Component />
      </>
    );
  }
}

const mapActionCreators = {setDarkMode};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
    isDarkTheme: state.global.isDarkTheme,
  };
};
export default connect(mapStateToProps, mapActionCreators)(Splash);
