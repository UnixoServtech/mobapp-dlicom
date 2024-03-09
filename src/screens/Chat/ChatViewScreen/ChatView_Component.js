import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import createStyles from './ChatView.style';
import theme from '../../../theme';
import {Header, Text} from '../../../components';

const ChatView_Component = ({onPressLeftContent}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header onPressLeftContent={onPressLeftContent} />
      <View style={{padding: 50}}>
        <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
          ChatView_Component
        </Text>
      </View>
    </View>
  );
};

export default ChatView_Component;
