import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput, View} from 'react-native';
import theme from '../theme';
import CustomIcon from './CustomIcon';
import createStyles from './styles/SearchView.style';
import {Pressable} from '.';

const SearchBar = ({
  onPressRightContent,
  rightContent,
  leftContent,
  value,
  onChangeText,
  restInputProp,
  showRightContent,
  placeHolderText,
  style,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <>
      <View style={[styles.wrapper, style]}>
        {rightContent ? (
          rightContent
        ) : (
          <CustomIcon
            name={'Search'}
            color={colors?.searchView?.placeHolderColor}
            size={theme.sizes.icons.lg}
          />
        )}
        <TextInput
          placeholder={placeHolderText}
          style={styles.inputText}
          placeholderTextColor={colors?.searchView?.placeHolderColor}
          value={value}
          onChangeText={onChangeText}
          {...restInputProp}
        />
        {showRightContent ? (
          <Pressable onPress={onPressRightContent}>
            {leftContent ? (
              leftContent
            ) : (
              <CustomIcon
                name={'Close'}
                color={colors?.searchView?.placeHolderColor}
                size={theme.sizes.icons.lg}
              />
            )}
          </Pressable>
        ) : null}
      </View>
    </>
  );
};

export default SearchBar;
