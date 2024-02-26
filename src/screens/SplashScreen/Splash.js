import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SplashComponent from './Splash.component';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <SplashComponent />
      </>
    );
  }
}
