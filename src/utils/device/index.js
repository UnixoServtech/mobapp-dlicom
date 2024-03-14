'use strict';

import {Dimensions, Platform} from 'react-native';
import {getModel, hasNotch, getApiLevel} from 'react-native-device-info';

export default class Device {
  static getDeviceWidth() {
    return Dimensions.get('window').width;
  }

  static getDeviceHeight() {
    return Dimensions.get('window').height;
  }

  static isIos() {
    return Platform.OS === 'ios';
  }

  static isAndroid() {
    return Platform.OS === 'android';
  }

  static isLandscape() {
    return this.getDeviceWidth() > this.getDeviceHeight();
  }

  static isIphone5() {
    return this.getDeviceWidth() === 320;
  }

  static isIphone5S() {
    return this.getDeviceWidth() === 320;
  }

  static isIphone6() {
    return this.getDeviceWidth() === 375;
  }

  static isIphone6Plus() {
    return this.getDeviceWidth() === 414;
  }

  static isIphone6SPlus() {
    return this.getDeviceWidth() === 414;
  }

  static isIphoneX() {
    return this.getDeviceWidth() >= 375 && this.getDeviceHeight() >= 812;
  }

  static isSmallDevice() {
    return this.getDeviceHeight() < 600;
  }

  static isMediumDevice() {
    return this.getDeviceHeight() < 736;
  }

  static isLargeDevice() {
    return this.getDeviceHeight() > 736;
  }

  static isIphone12() {
    const model = getModel();
    const models = ['iPhone 12', 'iPhone 12 Pro', 'iPhone 12 Pro Max'];
    return models.includes(model);
  }

  static hasNotch() {
    return hasNotch();
  }

  static async getDeviceAPILevel() {
    const apiLevel = await getApiLevel();
    return apiLevel;
  }
}
