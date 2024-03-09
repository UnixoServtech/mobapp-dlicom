import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Spacing, Text} from '../../components';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import createStyles from './Chat.style';

const Chat_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
        Chat_Component
      </Text>
    </View>
  );
};

export default Chat_Component;
