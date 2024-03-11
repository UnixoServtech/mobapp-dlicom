import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {
  Header,
  SearchBar,
  Pressable,
  ListItem,
  Spacing,
} from '../../components';
import createStyles from './SelectCoin.style';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import images from '../../assets/images';

const SelectCoin_Component = ({
  onPressLeftContent,
  searchWord,
  onChangeSearchWord,
  onPressRightContent,
  coinList,
  onItemClick = () => {},
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        onPressLeftContent={onPressLeftContent}
        centerElement={Strings.chose_coin}
        centerTextRest={{
          interSemiBold: true,
        }}
      />
      <View style={styles.searchWrapper}>
        <SearchBar
          placeHolderText={Strings.coins}
          value={searchWord}
          onChangeText={onChangeSearchWord}
          showRightContent={searchWord?.trim?.().length > 0}
          onPressRightContent={onPressRightContent}
        />
      </View>
      <FlatList
        data={coinList}
        contentContainerStyle={{
          paddingHorizontal: theme.sizes.spacing.ph,
        }}
        ListFooterComponent={<Spacing size={theme.sizes.spacing.tabHeight} />}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <Pressable onPress={() => onItemClick(item, index)}>
            <ListItem.Content>
              <ListItem.Icon>
                <Image
                  source={{uri: 'https://picsum.photos/300/300'}}
                  style={styles.avatar}
                  defaultSource={images.ic_place_holder}
                />
              </ListItem.Icon>
              <ListItem.Body>
                <ListItem.Title>USDT</ListItem.Title>
              </ListItem.Body>
              <ListItem.Right>
                <ListItem.Amount>130.4115</ListItem.Amount>
                <ListItem.FiatAmount>$130.32</ListItem.FiatAmount>
              </ListItem.Right>
            </ListItem.Content>
            <Spacing />
          </Pressable>
        )}
      />
    </View>
  );
};

export default SelectCoin_Component;
