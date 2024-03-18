import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet from '../BottomSheet';
import theme from '../../theme';
import {useTheme} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BottomSheetHeader, Button, Input, Spacing} from '..';
import Strings from '../../localization/Strings';

const createStyles = (colors: any) => StyleSheet.create({});

const SendTokenModal = ({
  modalRef,
  modalHeader,
  walletAddressPlaceHolder,
  walletAddressValue,
  onScanClick,
  amountPlaceHolder,
  amountLabel,
  amountValue,
  onAmountChange,
  onContinuePress,
  continueBtnDisable,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);
  return (
    <BottomSheet
      ref={modalRef}
      height={theme.normalize(360)}
      closeOnPressMask={false}
      customStyles={{
        mask: {backgroundColor: 'transparent'},
        container: {
          elevation: 100,
          backgroundColor: colors?.actionSheet?.backgroundColor,
          paddingTop: theme.normalize(15),
        },
      }}>
      <View style={{flex: 1}}>
        <BottomSheetHeader
          label={modalHeader}
          onClose={() => modalRef?.current?.close?.()}
        />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          contentContainerStyle={{
            padding: theme.sizes.spacing.ph,
          }}>
          <Spacing size="sm" />
          <Input
            placeholder={walletAddressPlaceHolder}
            value={walletAddressValue}
            rightIconName={'Scan'}
            isRightIconVisible
            onRightIconPress={onScanClick}
            isDisabled
          />
          <Spacing size="sm" />
          <Input
            placeholder={amountPlaceHolder}
            label={amountLabel}
            value={amountValue}
            onChangeText={onAmountChange}
            keyboardType={'number-pad'}
          />
          <Spacing size="sm" />
          <Button
            label={Strings.confirm}
            isDisabled={continueBtnDisable}
            onPress={onContinuePress}
          />
        </KeyboardAwareScrollView>
      </View>
    </BottomSheet>
  );
};

export default SendTokenModal;
