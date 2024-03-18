import React from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../theme';
import {useTheme} from '@react-navigation/native';
import {Pressable, Text} from '..';
import CustomIcon from '../CustomIcon';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      height: theme.normalize(38),
      alignItems: 'center',
      paddingHorizontal: theme.sizes.spacing.ph,
    },
  });
const BottomSheetHeader = ({onClose, label}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View>
      <View style={styles.wrapper}>
        <Pressable onPress={onClose}>
          <CustomIcon
            name={'Close'}
            color={colors?.text}
            size={theme.sizes.icons.xl2}
          />
        </Pressable>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginRight: theme.sizes.icons.xl2,
          }}>
          <Text size={theme.typography.fontSizes.xl} amikoBold={true}>
            {label}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: colors?.headerBorder,
          marginTop: theme.normalize(15),
        }}
      />
    </View>
  );
};

export default BottomSheetHeader;
