/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import images from '../../assets/images';
import BottomModal from '../../components/BottomModal';
import CustomIcon from '../../components/CustomIcon';
import TabBar from '../../components/TabBar';
import {AppConstant} from '../../constants/constants';
import Strings from '../../localization/Strings';
import {
  Header,
  Pressable,
  Spacing,
  Text,
  Button,
  ListItem,
  QRCodeModal,
  Input,
  BottomSheetHeader,
} from '../../components';
import theme from '../../theme';
import SwapView from '../SwapScreen/SwapView';
import Tokens from '../TokensScreen/Tokens';
import createStyles from './Wallet.style';
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
  actionSheetProp,
  onPressAccount,
  onItemPress,
  showQrCodeModal = false,
  hideQrCodeModal,
  contentPress,
  walletAddress,
  headerText,
  btnShareAddress,
  tokenList,
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
      <Pressable style={styles.accountWrapper} onPress={onPressAccount}>
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

  const _renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          onItemPress(item, index);
        }}>
        <ListItem.Content>
          <ListItem.Icon>
            <Image
              source={{uri: item?.avatar}}
              style={{
                height: theme.sizes.image.xl4,
                width: theme.sizes.image.xl4,
                borderRadius: theme.sizes.xl4 / 2,
              }}
            />
          </ListItem.Icon>
          <ListItem.Body>
            <ListItem.Title>{item?.name}</ListItem.Title>
            <ListItem.Address>{item?.wallet?.address}</ListItem.Address>
          </ListItem.Body>
        </ListItem.Content>
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
            textAlign={'center'}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            ${amount}
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
        <Tokens tokenList={tokenList} />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: theme.sizes.spacing.tableHeader + 20,
          }}>
          <SwapView />
        </ScrollView>
      )}
      <BottomModal
        modalVisible={actionSheetProp?.showActionSheet}
        onRequestClose={actionSheetProp?.onRequestClose}
        noPadding={true}
        swipeDirection={'down'}
        displayConfirmButton={false}>
        <View>
          <View
            style={{
              paddingHorizontal: theme.sizes.spacing.xs10,
              paddingBottom: 0,
            }}>
            <Spacing size={theme.normalize(8)} />
            {actionSheetProp?.wallets?.map(({item, index}) => {
              return <></>;
            })}
            <FlatList
              data={actionSheetProp?.wallets}
              keyExtractor={(item, index) => index}
              renderItem={(item, index) => _renderItem(item, index)}
              ItemSeparatorComponent={<Spacing size={theme.sizes.spacing.sm} />}
            />
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: colors?.actionSheet?.borderColor,
              marginVertical: theme.normalize(12),
            }}>
            <Button
              themedColor={colors?.actionSheet?.buttonColor}
              {...actionSheetProp?.cancelBtnProp}
            />
          </View>
        </View>
      </BottomModal>
      <QRCodeModal
        isVisible={showQrCodeModal}
        headerText={headerText}
        qrValue={walletAddress}
        contentValue={walletAddress}
        btnLabel={'Share address'}
        onBackdropPress={hideQrCodeModal}
        onModalHide={hideQrCodeModal}
        contentPress={contentPress}
        btnPress={btnShareAddress}
      />
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
