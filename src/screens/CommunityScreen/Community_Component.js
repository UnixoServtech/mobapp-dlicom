import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Header, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Community.style';

const Community_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header centerElement={'Community'} isLeftIconHidden />
    </View>
  );
};

export default Community_Component;
