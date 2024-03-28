/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React, {useRef} from 'react';
import {FlatList, Image, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import images from '../../assets/images';
import {
  BottomSheetHeader,
  Button,
  Header,
  Input,
  ListItem,
  Pressable,
  SearchBar,
  Spacing,
  SwitchToggle,
} from '../../components';
import CustomIcon from '../../components/CustomIcon';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import Device from '../../utils/device';
import createStyles from './ManageToken.style';

const ManageToken_Component = ({
  searchBarProp,
  tokenList,
  addNetworkClick,
  onTokenClick,
  tokenSelectDeselect,
  onRequestNetworkModalClose,
  showNetworkModal,
  onPressLeftContent,
}) => {
  const nameRef = useRef(null);
  const symbolRef = useRef();
  const decimalRef = useRef();

  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header onPressLeftContent={onPressLeftContent} />
      <Spacing />
      {/* Search View */}
      <View style={styles.searchWrapper}>
        <SearchBar style={styles.searchStyle} {...searchBarProp} />
        <Pressable onPress={addNetworkClick}>
          <CustomIcon
            name={'Plus'}
            size={theme.sizes.icons.xl2}
            color={colors?.searchView?.placeHolderColor}
          />
        </Pressable>
      </View>
      <Spacing size="md" />

      <FlatList
        data={tokenList}
        contentContainerStyle={{
          paddingTop: theme.sizes.spacing.ph,
          paddingHorizontal: theme.sizes.spacing.ph,
        }}
        ListFooterComponent={<Spacing size={theme.sizes.spacing.tabHeight} />}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <Pressable onPress={() => onTokenClick && onTokenClick(item, index)}>
            <ListItem.Content>
              <ListItem.Icon>
                <Image
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/1a91/7ed8/f3dfd5867d4a36e222f80ab5163e4abe?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8nZHvvTppEjN4qw4bP2ZJC6dmMKBDY~dLbmd3sRUONQ9ipX6w-xFqUnrOzf69iFdUa9b434mPOAnVq-nNJSDGSNdlPkeEMpo5npn8bAqNW-BSWW7QkYJXuaQher7BiybqsTMc5KT9SW4tiSiGqw1UaUoibRAumhcWWuy1RFdzX56D2Z2-kLMdjH1Go578AMCyYpV52FIn-UjkcqBYCv5~2aPVkJ0JeZuUtaHtiZ-2~dwp~QsJMhMNDGWH0rcCNQp4HRYUx6~8gSn8UVQfZkxV7HINM4s0ihZVE9ISFajk8DPccaey-NAKJWySoQhfLQbrC3PDk1uTUMcLCRfP9Tmw__',
                  }}
                  style={styles.avatar}
                  defaultSource={images.ic_place_holder}
                />
              </ListItem.Icon>
              <ListItem.Body>
                <ListItem.Title>Ethereum</ListItem.Title>
                <ListItem.Note>ETH</ListItem.Note>
              </ListItem.Body>
              <ListItem.Right>
                <SwitchToggle
                  switchOn={item?.isSelected}
                  onPress={() =>
                    tokenSelectDeselect && tokenSelectDeselect(item, index)
                  }
                />
              </ListItem.Right>
            </ListItem.Content>
            <Spacing />
          </Pressable>
        )}
      />

      <Modal
        isVisible={showNetworkModal}
        style={[styles.modal]}
        backdropColor={'#191A1D'}
        backdropOpacity={0.85}
        onBackdropPress={onRequestNetworkModalClose}
        onBackButtonPress={onRequestNetworkModalClose}>
        <View style={[styles.viewWrapper]}>
          <View style={[styles.viewContainer]}>
            <View
              style={{
                marginTop: theme.normalize(20),
              }}>
              <BottomSheetHeader
                onClose={onRequestNetworkModalClose}
                label={Strings.custom_network}
              />
            </View>
            <KeyboardAwareScrollView
              style={{flexGrow: 1, maxHeight: Device.getDeviceHeight() * 0.61}}
              contentContainerStyle={{
                padding: theme.normalize(15),
              }}>
              <Input isAsDropdown={true} value={'Ethereum'} />
              <Spacing />
              <Input
                placeholder={Strings.wallet_address}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  nameRef.current?.focus();
                }}
                restProps={{
                  blurOnSubmit: false,
                }}
              />
              <Spacing />
              <Input
                placeholder={Strings.name}
                ref={nameRef}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  symbolRef.current?.focus();
                }}
              />
              <Spacing />
              <Input
                placeholder={Strings.symbol}
                ref={symbolRef}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  decimalRef.current?.focus();
                }}
              />
              <Spacing />
              <Input
                placeholder={Strings.decimals}
                ref={decimalRef}
                keyboardType={'decimal-pad'}
              />
              <Spacing size="xl" />
              <Button label={Strings.save} />
              <Spacing size="xl" />
            </KeyboardAwareScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ManageToken_Component;
