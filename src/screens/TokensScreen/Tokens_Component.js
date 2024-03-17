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
                    uri: 'https://s3-alpha-sig.figma.com/img/1a91/7ed8/f3dfd5867d4a36e222f80ab5163e4abe?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8nZHvvTppEjN4qw4bP2ZJC6dmMKBDY~dLbmd3sRUONQ9ipX6w-xFqUnrOzf69iFdUa9b434mPOAnVq-nNJSDGSNdlPkeEMpo5npn8bAqNW-BSWW7QkYJXuaQher7BiybqsTMc5KT9SW4tiSiGqw1UaUoibRAumhcWWuy1RFdzX56D2Z2-kLMdjH1Go578AMCyYpV52FIn-UjkcqBYCv5~2aPVkJ0JeZuUtaHtiZ-2~dwp~QsJMhMNDGWH0rcCNQp4HRYUx6~8gSn8UVQfZkxV7HINM4s0ihZVE9ISFajk8DPccaey-NAKJWySoQhfLQbrC3PDk1uTUMcLCRfP9Tmw__',
                  }}
                  style={styles.avatar}
                  defaultSource={images.ic_place_holder}
                />
              </ListItem.Icon>
              <ListItem.Body>
                <ListItem.Title>USDT</ListItem.Title>
                <ListItem.Note>
                  $2,580.73{' '}
                  <ListItem.Note
                    color={
                      index % 2 === 0 ? colors?.token?.down : colors?.token?.up
                    }>
                    -0.01%
                  </ListItem.Note>
                </ListItem.Note>
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

export default Tokens_Component;
