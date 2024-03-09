import Icomoon from 'react-native-icomoon';
import json from '../constants/selection.json';

export default function CustomIcon({name, ...restProps}) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Icomoon iconSet={json} name={name} {...restProps} />;
}
