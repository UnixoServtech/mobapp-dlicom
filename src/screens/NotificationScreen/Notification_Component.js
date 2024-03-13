import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Header, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Notification.style';

const Notification_Component = ({onPressLeftContent, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        onPressLeftContent={onPressLeftContent}
        centerElement={'Notification'}
      />
    </View>
  );
};

export default Notification_Component;
