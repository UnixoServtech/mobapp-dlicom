import React, {Component} from 'react';
import {connect} from 'react-redux';
import {navigate} from '../../navigation/NavigationUtils';
import Splash_Component from './Splash_Component';
import Routes from '../../navigation/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import {LOCAL_STORAGE} from '../../constants/storage';
import {setDarkMode} from '../../redux/actions/global';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    let isDarkTheme = await AsyncStorage.getItem(LOCAL_STORAGE.DARK_THEME);
    this.props.setDarkMode(JSON.parse(isDarkTheme));
    setTimeout(() => {
      // navigate(Routes.ONBOARDING.ONBOARDING);
      navigate(Routes.HOME_NAV.ROOT_NAV);
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
