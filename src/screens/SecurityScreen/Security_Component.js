import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Spacing, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Security.style';

const Security_Component = ({
  btnRestePasswordPress,
  placeHolder,
  onChangePassword,
  valuePassword,
  unlockButtonProps,
  tittleNote,
  tittleText,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={styles.wrapper}
          enableOnAndroid={true}
          resetScrollToCoords={{x: 0, y: 0}}>
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
          <Button {...unlockButtonProps} />
        </KeyboardAwareScrollView>
      </View>
      <View style={{padding: theme.sizes.spacing.pv}}>
        {/* <Button
          label={'Reset Password'}
          variant="ghost"
          themedColor={colors.text}
          isCompact={true}
          onPress={btnRestePasswordPress}
        /> */}
      </View>
    </View>
  );
};

export default Security_Component;
