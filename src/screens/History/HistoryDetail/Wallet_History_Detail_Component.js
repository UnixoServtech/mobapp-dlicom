/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import images from '../../../assets/images';
import {
  Header,
  ListItem,
  Spacing,
  TokenHistoryDetail,
} from '../../../components';
import CustomIcon from '../../../components/CustomIcon';
import Strings from '../../../localization/Strings';
import theme from '../../../theme';
import createStyles from './WalletHistoryDetail.style';

const Wallet_History_Detail_Component = ({onPressLeftContent}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        onPressLeftContent={onPressLeftContent}
        centerElement={Strings.wallet_history}
      />
      <ScrollView bounces={false} contentContainerStyle={{paddingVertical: 10}}>
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
        <View style={{paddingHorizontal: theme.sizes.spacing.ph}}>
          <Spacing size="xl" />
          <TokenHistoryDetail
            avatarLink={
              'https://s3-alpha-sig.figma.com/img/f0b8/c514/3914494218b431fad0bdba3817a5997c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LQGLLHF7LaRjBHikM10wtsLCMCvvKyi5NPNXUM4ZnVTGjoJiFNjp~wUE58RT-T7Vw7P0DtEWufIL3ce-iVgBJvAKCc1YTZUdeXx92QlMwCakLQeDZ1sd7reFScDO~qx~WL97NN9pzV0eEYDgWFRfZ0t7k80GS0r4qjcvPfGfoKytbWY51DDN5wprxJj9rjlKUXPo1CYWPlCXd7gLZfbLDCTaBnv3dY9SDkA-xkbHNSId4cY-UDPkFg9F~kPzXxdruhJ6fu3q9p1YdEI9Tzc~EDS6hjKe5Jv4rs529r4JjDspCY8eEht4QzlTCu-AxP3U5o7oh7vrItxxtCk8g7LlPw__'
            }
            walletInfo={'hero.dlicom.io (0xgh30...452662)'}
            gasValue={'5.5900657 USD-T'}
            transferStatus={'Likely in < 20 seconds'}
            maxGasFee={'5.58010 USD-T'}
            totalAmount={'22.0645 USD-T'}
            totalMaxAmount={'25.560108 USD-T'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallet_History_Detail_Component;
