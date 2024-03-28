/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {
  Header,
  Pressable,
  Spacing,
  Text,
  Input,
  BottomSheetHeader,
  Button,
} from '../../components';
import theme from '../../theme';
import createStyles from './Wallet.style';
import images from '../../assets/images';
import CustomIcon from '../../components/CustomIcon';
import Strings from '../../localization/Strings';
import TabBar from '../../components/TabBar';
import Tokens from '../TokensScreen/Tokens';
import SwapView from '../SwapScreen/SwapView';
import {AppConstant} from '../../constants/constants';
import BottomModal from '../../components/BottomModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BottomSheet from '../../components/BottomSheet';
import SendTokenModal from '../../components/SendTokenModal';

const Wallet_Component = ({
  onPressRightContent,
  selectedAccountName,
  avatarLink,
  amount,
  onSendClick,
  onReceiveClick,
  onScanClick,
  routeMap,
  selectedTab,
  onPress,
  onPress1,
  sendTokenModalRef,
  onAmountChange,
  onScanIconClick,
  onContinuePress,
  onHistoryClick,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderUserInfoView = () => {
    return (
      <Pressable style={styles.accountWrapper}>
        <Image
          source={{uri: avatarLink}}
          defaultSource={images.ic_place_holder}
          style={styles.smallAvatar}
        />
        <Spacing direction="x" size={8} />
        <Text amikoRegular={true} size={theme.typography.fontSizes.sm}>
          {selectedAccountName}
        </Text>
        <Spacing direction="x" size={8} />
        <View style={{transform: [{rotate: '90deg'}]}}>
          <CustomIcon
            name={'chevron-right'}
            color={colors?.text}
            size={theme.sizes.icons.xs}
          />
        </View>
      </Pressable>
    );
  };

  const renderIcon = (iconName, labelName, iconStyle = {}, onPress) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: colors?.iconBtnBg,
            height: theme.normalize(48),
            width: theme.normalize(48),
            borderRadius: theme.normalize(15),
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.07)',
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={iconStyle}>
            <CustomIcon
              name={iconName}
              color={colors?.iconColor}
              size={theme.normalize(28)}
            />
          </View>
        </View>
        <Text
          interMedium={true}
          size={theme.typography.fontSizes.xs}
          textAlign={'center'}>
          {labelName}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        isLeftIconHidden={true}
        isCenterLeft={true}
        centerElement={'Wallet'}
        rightContent={[
          {
            icon: 'Sliders_horizontal',
            onPressRightContent: onPressRightContent,
          },
        ]}
      />

      <View style={styles.mainWrapper}>
        <View style={{alignItems: 'center'}}>
          <Image
            // resizeMode="contain"
            source={images.ic_wallet_bg}
            style={{
              width: '100%',
              height: 380,
              // aspectRatio: 1,
              position: 'absolute',
              top: -70,
            }}
          />
          {renderUserInfoView()}
          <Spacing size="md" />
          <Text
            urbanistSemiBold={true}
            size={theme.typography.fontSizes.xl6}
            style={{maxWidth: '80%'}}
            textAlign={'center'}>
            {amount}
          </Text>
          <Spacing size="xl" />
          <View
            style={{
              flexDirection: 'row',
            }}>
            {renderIcon(
              'Send',
              Strings.send,
              {
                transform: [{rotate: '-44.91deg'}],
                top: 4,
              },
              onSendClick,
            )}
            <Spacing direction="x" size="xl" />
            {renderIcon(
              'Send',
              Strings.receive,
              {
                transform: [{rotate: '135deg'}],
                bottom: 4,
              },
              onReceiveClick,
            )}
            <Spacing direction="x" size="xl" />
            {renderIcon('Scan', Strings.scan, {}, onScanClick)}
            <Spacing direction="x" size="xl" />
            {renderIcon('Loader-2', Strings.history, {}, onHistoryClick)}
          </View>
        </View>
        <View style={styles.tabWrapper}>
          <TabBar routeMap={routeMap} bgColor={colors?.semiTransparentBg} />
        </View>
        <Spacing size="md" />
      </View>
      {selectedTab === AppConstant.tokenType ? (
        <Tokens />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: theme.sizes.spacing.tableHeader + 20,
          }}>
          <SwapView />
        </ScrollView>
      )}
      <SendTokenModal
        modalRef={sendTokenModalRef}
        modalHeader={'Send TOKEN'}
        walletAddressPlaceHolder={'Wallet Address'}
        amountPlaceHolder={'0.0'}
        amountLabel={'Amount'}
        onAmountChange={onAmountChange}
        onScanClick={onScanIconClick}
        onContinuePress={onContinuePress}
        continueBtnDisable={true}
      />
    </View>
  );
};

export default Wallet_Component;
{
  /* <Input
label="label"
optionalLabel="optionalLabel"
value="Ethereum"
isRightIconVisible
// isAsDropdown={true}
/>
<Input
label="label"
placeholder={'Name'}
isRightIconVisible
isLeftIconVisible
rightIconName={'Scan'}
leftIconName={'Scan'}
// isAsDropdown={true}
/>
<Input
label="label"
placeholder={'Name'}
// isAsDropdown={true}
/>
<Input
label="label"
placeholder={'Name'}
disableFocusHandling={true}
// isAsDropdown={true}
/> */
}
