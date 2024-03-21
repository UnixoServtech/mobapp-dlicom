import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Header, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Browser.style';

const Browser_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header centerElement={'Browser'} isLeftIconHidden />
    </View>
  );
};

export default Browser_Component;
