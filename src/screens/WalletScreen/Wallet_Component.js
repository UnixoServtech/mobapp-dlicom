import { useTheme } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import images from '../../assets/images';
import { Button, Header, ListItem, Pressable, Radio, Spacing, Text } from '../../components';
import theme from '../../theme';
import createStyles from './Wallet.style';

const Wallet_Component = ({
  headerLeftText,
  onPressLeftContent,
  walletTittle,
  walletNote,
  walletList,
  btnLabel,
  btnPress,
  onChangeRadio,
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
          <Pressable
            onPress={() => onChangeRadio(item, index)}>
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
        <Button label={btnLabel} onPress={btnPress} showIconRight={true} />
      </View>
    </View>
  );
};

export default Wallet_Component;
{
  /* <ListItem>
<ListItem.Content>
  <ListItem.Icon>
    <Image
      source={{uri: 'https://picsum.photos/200/300'}}
      style={styles.avatar}
    />
  </ListItem.Icon>
  <ListItem.Body>
    <ListItem.Title>#Crypto</ListItem.Title>
    <ListItem.Note>For sure!..</ListItem.Note>
  </ListItem.Body>
  <ListItem.Right>
    <ListItem.Amount>130.4115</ListItem.Amount>
    <ListItem.FiatAmount>$130.32</ListItem.FiatAmount>
  </ListItem.Right>
</ListItem.Content>
</ListItem> */
}


// <View
// style={{
//   flexDirection: 'row',
//   backgroundColor: '#191A1D',
//   borderWidth: 1,
//   borderColor: '#27282B',
//   marginHorizontal: 20,
//   borderRadius: 16,
// }}>
// <View style={{flex: 0.85, padding: 12}}>
//   <Text
//     archivoRegular={true}
//     size={theme.typography.fontSizes.xs}
//     color={'#606060'}>
//     Seed Phrase
//   </Text>
//   <Spacing size="5" />
//   <Text type={'helper-text'} amikoBold={true} lineHeight={24}>
//     picture goddess brisk program absurd clock shiver twin salmon
//     picture dust prefer
//   </Text>
// </View>
// <View style={{width: 1, backgroundColor: '#27282B'}} />
// <View
//   style={{
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'center',
//     flex: 0.15,
//   }}>
//   <CustomIcon
//     // name={'Eye_off1'}
//     name={'Eye'}
//     color={'white'}
//     size={theme.sizes.icons.xl2}
//   />
// </View>
// </View>