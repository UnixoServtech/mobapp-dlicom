import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Header, Spacing, Text} from '../../components';
import theme from '../../theme';
import createStyles from './VerifyPassword.style';

const VerifyPassword_Component = ({
  leftHeaderText,
  onPressLeftContent,
  tittleText,
  tittleNote,
  placeHolder,
  onChangeText,
  valuePassword,
  onChangePassword,
  passwordButtonProps,
  isLoading,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        leftText={leftHeaderText}
        onPressLeftContent={onPressLeftContent}
      />
      <View style={styles.wrapper}>
        <KeyboardAwareScrollView
          style={{flex: 1}}
          enableOnAndroid={true}
          resetScrollToCoords={{x: 0, y: 0}}>
          <View>
            <Text
              type={'large-header'}
              interBold={true}
              lineHeight={theme.typography.lineHeights.xl5}>
              {tittleText}
            </Text>
            <Spacing size={'xs'} />
            <Text
              color={colors.caption}
              lineHeight={theme.typography.lineHeights.xl}>
              {tittleNote}
            </Text>
            <Spacing size={'xl'} />
            <TextInput
              autoCapitalize={'none'}
              placeholder={placeHolder}
              multiline={false}
              textAlignVertical={'top'}
              numberOfLines={1}
              style={styles.textInput}
              placeholderTextColor={colors.gray1}
              onChangeText={onChangePassword}
              value={valuePassword}
              returnKeyType={'next'}
              autoCorrect={false}
              secureTextEntry={true}
            />
            <Spacing size="xl" />
          </View>
        </KeyboardAwareScrollView>
        <Button {...passwordButtonProps} />
      </View>
    </View>
  );
};

export default VerifyPassword_Component;
