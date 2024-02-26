import {Dimensions, Platform} from 'react-native';
import shadow from './shadow';
import colors from './colors';
import typography from './typography';
import sizes from './sizes';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
export const scaleWidth = SCREEN_WIDTH / 360;
export const scaleHeight = SCREEN_HEIGHT / 800;
export const _scale = Math.min(scaleWidth, scaleHeight);

const normalize = size => {
  return Math.ceil(size * _scale);
};

const isIos = () => {
  return Platform.OS === 'ios';
};

const theme = {
  sizes,
  typography,
  normalize,
  isIos,
  shadow,
  colors,
};

export {theme};
export default theme;
