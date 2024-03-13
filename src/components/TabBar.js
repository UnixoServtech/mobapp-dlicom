import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import theme from '../theme';
import {Pressable, Text} from '.';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      height: theme.normalize(40),
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.07)',
      backgroundColor: colors?.segment?.bg,
      borderRadius: theme.normalize(11),
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.normalize(5),
    },
    textWrapper: isActive => ({
      height: theme.normalize(32),
      justifyContent: 'center',
      backgroundColor: isActive ? colors?.segment?.activeBg : '#ffffff00',
      borderRadius: theme.normalize(10),
      flex: 0.5,
      alignItems: 'center',
    }),
  });

function TabBar({routeMap}) {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.wrapper}>
      {routeMap?.map((item, index) => {
        return (
          <Pressable
            style={styles.textWrapper(item?.selected)}
            onPress={item?.onPress}
            key={`${index}`}>
            <Text
              color={
                item?.selected
                  ? colors?.segment?.activeText
                  : colors?.segment?.text
              }
              size={theme.typography.fontSizes.xss}
              interMedium={true}>
              {item?.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TabBar;
