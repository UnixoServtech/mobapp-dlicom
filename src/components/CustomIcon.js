import Icomoon from 'react-native-icomoon';
import json from '../constants/selection.json';

export default function CustomIcon({name, ...restProps}) {
  return <Icomoon iconSet={json} name={name} {...restProps} />;
}
