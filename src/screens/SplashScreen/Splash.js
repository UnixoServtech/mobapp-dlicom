import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  navigate,
  navigateAndSimpleReset,
} from '../../navigation/NavigationUtils';
import Splash_Component from './Splash_Component';
import Routes from '../../navigation/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import {LOCAL_STORAGE} from '../../constants/storage';
import {setDarkMode} from '../../redux/actions/global';
import {LOCAL_STORAGE} from '../../constants/storage';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let isDarkTheme = await AsyncStorage.getItem(LOCAL_STORAGE.DARK_THEME);
    this.props.setDarkMode(JSON.parse(isDarkTheme));
    setTimeout(async () => {
      if (
        (await AsyncStorage.getItem(LOCAL_STORAGE.BIOMETRY)) ||
        (await AsyncStorage.getItem(LOCAL_STORAGE.PASSWORD))
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
