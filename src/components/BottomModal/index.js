import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {useTheme} from '@react-navigation/native';
import {View, theme} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Device from '../../utils/device';
import ModalDragger from './ModalDragger';
const createStyles = colors =>
  StyleSheet.create({
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    keyboardAwareWrapper: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'black',
    },
    modal: {
      minHeight: 200,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      maxHeight: Device.getDeviceHeight() - 200,
      flexGrow: 1,
      // justifyContent: 'flex-end',
      padding: 15,
    },
    wrapper: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });

export default function BottomModal({
  children,
  onRequestClose,
  modalVisible,
  modalStyle,
  backdropColor = '#191A1D',
  swipeDirection,
  noPadding,
}) {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  let backgroundColor = colors?.actionSheet?.backgroundColor;
  return (
    <Modal
      isVisible={modalVisible}
      style={[styles.bottomModal, modalStyle]}
      onBackdropPress={onRequestClose}
      onBackButtonPress={onRequestClose}
      onSwipeComplete={onRequestClose}
      swipeDirection={swipeDirection}
      backdropColor={backdropColor}
      backdropOpacity={0.85}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={600}
      animationOutTiming={600}
      propagateSwipe>
      <SafeAreaView
        contentContainerStyle={styles.keyboardAwareWrapper}
        style={[styles.wrapper, {backgroundColor: backgroundColor}]}>
        <View
          style={[
            styles.modal,
            {backgroundColor: backgroundColor},
            noPadding && {padding: 0},
          ]}>
          {noPadding && <View style={{height: 15}} />}
          {swipeDirection ? <ModalDragger /> : null}
          {children}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
