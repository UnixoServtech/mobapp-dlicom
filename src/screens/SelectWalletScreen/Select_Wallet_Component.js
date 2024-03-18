import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, View} from 'react-native';
import images from '../../assets/images';
import {
  Button,
  Header,
  ListItem,
  Pressable,
  Radio,
  Spacing,
  Text,
} from '../../components';
import theme from '../../theme';
import createStyles from './Select_Wallet.style';

const Select_Wallet_Component = ({
  headerLeftText,
  onPressLeftContent,
  walletTittle,
  walletNote,
  walletList,
  btnLabel,
  btnPress,
  onChangeRadio,
  btnAddNewWalletLabel,
  btnPressAddNewWallet,
  btnAddNewWalletRightIcon,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        noBorder={false}
        leftText={headerLeftText}
        onPressLeftContent={onPressLeftContent}
      />

      <View style={{marginTop: theme.normalize(30), alignItems: 'center'}}>
        <Text type={'device-header'}>{walletTittle}</Text>
        <Spacing size="5" />
        <Text type={'helper-text'} interLight={true} color={colors.caption}>
          {walletNote}
        </Text>
      </View>
      <FlatList
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: theme.normalize(40)}}
        data={walletList}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <Pressable onPress={() => onChangeRadio(item, index)}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Icon>
                  <Image
                    source={{uri: item?.avatar}}
                    style={styles.avatar}
                    defaultSource={images.ic_place_holder}
                  />
                </ListItem.Icon>
                <ListItem.Body>
                  <ListItem.Title>{item?.name}</ListItem.Title>
                  <ListItem.Note>{item?.id}</ListItem.Note>
                </ListItem.Body>
                <ListItem.Right>
                  <Radio
                    _borderColor={colors?.text}
                    onChange={() => onChangeRadio(item, index)}
                    selected={item?.selected}
                  />
                </ListItem.Right>
              </ListItem.Content>
            </ListItem>
          </Pressable>
        )}
      />
      <View style={{margin: theme.sizes.spacing.ph}}>
        <Button
          label={btnAddNewWalletLabel}
          onPress={btnPressAddNewWallet}
          showIconRight={true}
          rightIcon={btnAddNewWalletRightIcon}
        />
        <Spacing size="xl" />
        <Button label={btnLabel} onPress={btnPress} showIconRight={true} />
      </View>
    </View>
  );
};

export default Select_Wallet_Component;
