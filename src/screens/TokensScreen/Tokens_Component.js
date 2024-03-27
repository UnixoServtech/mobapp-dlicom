import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {ListItem, Spacing, Pressable} from '../../components';
import theme from '../../theme';
import createStyles from './Token.style';
import images from '../../assets/images';

const Tokens_Component = ({
  button1Press,
  button2Press,
  onItemClick = () => {},
  tokenList,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={tokenList}
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
                  source={{
                    uri: item?.tokenImageUri,
                  }}
                  style={styles.avatar}
                  defaultSource={images.ic_place_holder}
                />
              </ListItem.Icon>
              <ListItem.Body>
                <ListItem.Title>{item?.symbol}</ListItem.Title>
                <ListItem.Note>
                  ${item?.price}{' '}
                  <ListItem.Note
                    color={
                      item?.percentage < 0
                        ? colors?.token?.down
                        : colors?.token?.up
                    }>
                    {item?.percentage > 0
                      ? '+' + item?.percentage.toFixed(2)
                      : item?.percentage.toFixed(2)}
                    %
                  </ListItem.Note>
                </ListItem.Note>
              </ListItem.Body>
              <ListItem.Right>
                <ListItem.Amount>{item?.balance}</ListItem.Amount>
                <ListItem.FiatAmount>
                  ${item?.balance * item?.price}
                </ListItem.FiatAmount>
              </ListItem.Right>
            </ListItem.Content>
            <Spacing />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Tokens_Component;
