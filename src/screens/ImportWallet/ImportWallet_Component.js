/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput, View} from 'react-native';
import {Button, Header, Spacing, Text} from '../../components';
import theme from '../../theme';
import createStyles from './ImportWallet.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ImportWallet_Component = ({
  leftHeaderText,
  onPressLeftContent,
  tittleText,
  tittleNote,
  placeHolder,
  onChangeText,
  value,
  primaryButtonProps,
  secondaryButtonProps,
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
              autoFocus
              autoCapitalize={'none'}
              placeholder={placeHolder}
              multiline={true}
              textAlignVertical={'top'}
              numberOfLines={4}
              style={styles.textInput}
              placeholderTextColor={colors.gray1}
              onChangeText={onChangeText}
              value={value}
              returnKeyType={'next'}
              autoCorrect={false}
            />
          </View>
        </KeyboardAwareScrollView>
        <Spacing size="xl" />
        <Button showIconRight={true} {...primaryButtonProps} />
        {/* <Spacing />
        <Button {...secondaryButtonProps} /> */}
      </View>
    </View>
  );
};

export default ImportWallet_Component;
