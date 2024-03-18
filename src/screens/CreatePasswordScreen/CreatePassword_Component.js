import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Header, Spacing, Text} from '../../components';
import theme from '../../theme';
import createStyles from './CreatePassword.style';

const CreatePassword_Component = ({
  leftHeaderText,
  onPressLeftContent,
  tittleText,
  tittleNote,
  placeHolder,
  onChangeText,
  valueNewPassword,
  onChangeNewPassword,
  newPasswordButtonProps,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        leftText={leftHeaderText}
        onPressLeftContent={onPressLeftContent}
      />
      <KeyboardAwareScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.wrapper}
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
            onChangeText={onChangeNewPassword}
            value={valueNewPassword}
            returnKeyType={'next'}
            autoCorrect={false}
          />
          <Spacing size="xl" />
          <Button {...newPasswordButtonProps} />
          <Spacing />
          <Spacing />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CreatePassword_Component;
