import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LOCAL_STORAGE} from '../../constants/storage';
import {navigateAndSimpleReset} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';
import Splash_Component from './Splash_Component';
import {setDarkMode} from '../../redux/actions/global';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // check(PERMISSIONS.IOS.FACE_ID)
    //   .then(res => {
    //     console.log(res);
    //     request(PERMISSIONS.IOS.FACE_ID)
    //       .then(res => {
    //         console.log(res);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    let isDarkTheme = await AsyncStorage.getItem(LOCAL_STORAGE.DARK_THEME);
    this.props.setDarkMode(
      isDarkTheme == null ? true : JSON.parse(isDarkTheme),
    );
    setTimeout(async () => {
      // Navigate User to Security Screen if BIOMETRY or PASSWORD is stored and wallet is created.
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
