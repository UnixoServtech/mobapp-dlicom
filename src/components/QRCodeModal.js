/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Modal from 'react-native-modal';
import theme from '../theme';
import {useTheme} from '@react-navigation/native';
import createStyles from './styles/QRModal.style';
import {Button, Pressable, Spacing, Text} from '.';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import CustomIcon from './CustomIcon';

const QRModal = ({
  isVisible = true,
  headerText,
  qrValue,
  contentValue,
  btnLabel,
  btnRightIcon = 'Share',
  btnPress,
  onBackdropPress,
  contentPress,
  onModalHide,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  return (
    <>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onModalHide={onModalHide}
        onBackdropPress={onBackdropPress}>
        <View style={{justifyContent: 'center'}}>
          <View style={styles.content}>
            <Text type={'device-header'} amikoBold={true}>
              {headerText}
            </Text>
            <Spacing size="md" />
            <View style={styles.qrWrapper}>
              {qrValue ? (
                <QRCode value={qrValue} size={theme.normalize(180)} />
              ) : null}
            </View>
            <Spacing size="md" />
            <Pressable style={styles.copyWrapper} onPress={contentPress}>
              <CustomIcon
                name={'Copy'}
                color={colors?.white}
                size={theme.sizes.icons.xl2}
              />
              <Spacing direction={5} />
              <Text type={'helper-text'} amikoRegular={true}>
                {contentValue}
              </Text>
            </Pressable>
            <Spacing size="xl" />
            <View style={{width: '100%'}}>
              <Button
                label={btnLabel}
                isCompact={true}
                showIconRight={true}
                rightIconName={btnRightIcon}
                removeSpace={true}
                onPress={btnPress}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default QRModal;
