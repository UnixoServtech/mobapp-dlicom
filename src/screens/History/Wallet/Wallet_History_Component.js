/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, View} from 'react-native';
import images from '../../../assets/images';
import {Header, ListItem, Pressable, Spacing} from '../../../components';
import CustomIcon from '../../../components/CustomIcon';
import Strings from '../../../localization/Strings';
import theme from '../../../theme';
import createStyles from './WalletHistory.style';

const Wallet_History_Component = ({
  onPressLeftContent,
  historyList,
  onHistoryItemPress,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        onPressLeftContent={onPressLeftContent}
        centerElement={Strings.wallet_history}
      />
      <FlatList
        data={historyList}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{paddingBottom: theme.sizes.spacing.ph}}
        renderItem={({item, index}) => (
          <Pressable
            style={{marginTop: theme.normalize(5)}}
            onPress={onHistoryItemPress}>
            <ListItem>
              <ListItem.Date>Sep 26, 2023</ListItem.Date>
              <ListItem.Content>
                <ListItem.Icon>
                  <Image
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/1a91/7ed8/f3dfd5867d4a36e222f80ab5163e4abe?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8nZHvvTppEjN4qw4bP2ZJC6dmMKBDY~dLbmd3sRUONQ9ipX6w-xFqUnrOzf69iFdUa9b434mPOAnVq-nNJSDGSNdlPkeEMpo5npn8bAqNW-BSWW7QkYJXuaQher7BiybqsTMc5KT9SW4tiSiGqw1UaUoibRAumhcWWuy1RFdzX56D2Z2-kLMdjH1Go578AMCyYpV52FIn-UjkcqBYCv5~2aPVkJ0JeZuUtaHtiZ-2~dwp~QsJMhMNDGWH0rcCNQp4HRYUx6~8gSn8UVQfZkxV7HINM4s0ihZVE9ISFajk8DPccaey-NAKJWySoQhfLQbrC3PDk1uTUMcLCRfP9Tmw__',
                    }}
                    style={styles.icon}
                    defaultSource={images.ic_place_holder}
                  />
                </ListItem.Icon>
                <ListItem.Body>
                  <ListItem.Title interBold={true}>Transfer</ListItem.Title>
                  <Spacing size={theme.normalize(3)} />
                  <ListItem.Note>To:0x06012cf... 7a266d</ListItem.Note>
                </ListItem.Body>
                <ListItem.Right>
                  <CustomIcon
                    name={'Arrow_Down_circle'}
                    color={'#4EFF8A'}
                    size={theme.sizes.icons.xl3}
                  />
                  <Spacing size={theme.normalize(3)} />
                  <ListItem.Amount>-200.00</ListItem.Amount>
                </ListItem.Right>
              </ListItem.Content>
              <ListItem.Status color={'red'}>Failed</ListItem.Status>
            </ListItem>
            <View style={{height: 1, backgroundColor: colors?.borderColor}} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Wallet_History_Component;
