import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Header, Pressable, Spacing, Text} from '../../components';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import createStyles from './Chat.style';

const Chat_Component = ({button1Press, onPressLeftContent}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <View style={{padding:40}}>
        <Pressable onPress={button1Press}>
          <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
            Chat_Component
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Chat_Component;
