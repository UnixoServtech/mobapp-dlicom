import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const createStyles = colors =>
  StyleSheet.create({
    draggerWrapper: {
      width: '100%',
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    borderless: {
      borderColor: 'white',
    },
    dragger: {
      width: 48,
      height: 5,
      borderRadius: 4,
      backgroundColor: '#6C7072',
    },
  });

function ModalDragger({borderless}) {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={[styles.draggerWrapper]}>
      <View style={styles.dragger} />
    </View>
  );
}

export default ModalDragger;
