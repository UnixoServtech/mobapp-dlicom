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
import {toDataUrl} from '../../../core/Blockies';
import moment from 'moment';
import {getERC20TokenDetails, isERC20} from '../../../core/eth';
import {ethers} from 'ethers';

const Wallet_History_Component = ({
  onPressLeftContent,
  historyList,
  onHistoryItemPress,
  ownAddress,
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
        renderItem={({item, index}) => {
          const status = isERC20(
            item?.to,
            'https://polygon-mumbai-bor-rpc.publicnode.com/',
          ).then(data => {
            return data;
          });

          return (
            <Pressable
              key={`Item - ${index}`}
              style={{marginTop: theme.normalize(5)}}
              onPress={onHistoryItemPress}>
              <ListItem>
                <ListItem.Date>
                  {moment.unix(item?.timeStamp).format('MMM DD, YYYY')}
                </ListItem.Date>
                <ListItem.Content>
                  <ListItem.Icon>
                    <Image
                      source={{
                        uri:
                          item?.from?.toLowerCase() !== ownAddress.toLowerCase()
                            ? toDataUrl(item?.from)
                            : toDataUrl(item?.to),
                      }}
                      style={styles.icon}
                      defaultSource={images.ic_place_holder}
                    />
                  </ListItem.Icon>
                  <ListItem.Body>
                    <ListItem.Title interBold={true}>
                      {item?.from?.toLowerCase() === ownAddress.toLowerCase()
                        ? 'Transfer'
                        : 'Received'}
                    </ListItem.Title>
                    <Spacing size={theme.normalize(3)} />
                    <ListItem.Note>
                      {item?.from?.toLowerCase() !== ownAddress.toLowerCase()
                        ? 'From:' + item?.from
                        : 'To:' + item?.to}
                    </ListItem.Note>
                  </ListItem.Body>
                  <ListItem.Right>
                    <CustomIcon
                      name={
                        item?.from?.toLowerCase() === ownAddress.toLowerCase()
                          ? 'Arrow_Up_circle'
                          : 'Arrow_Down_circle'
                      }
                      color={'#4EFF8A'}
                      size={theme.sizes.icons.xl3}
                    />
                    <Spacing size={theme.normalize(3)} />
                    <ListItem.Amount>
                      {item?.input === '0x'
                        ? item?.from?.toLowerCase() === ownAddress.toLowerCase()
                          ? '- ' + ethers.formatEther(item?.value)
                          : '+ ' + ethers.formatEther(item?.value)
                        : item?.input === '0x' &&
                          isERC20(
                            item?.to,
                            'https://polygon-mumbai-bor-rpc.publicnode.com/',
                          )
                        ? getERC20TokenDetails(item?.input).value
                        : getERC20TokenDetails(item?.input).value}
                    </ListItem.Amount>
                  </ListItem.Right>
                </ListItem.Content>
                {/* <ListItem.Status color={'red'}>Failed</ListItem.Status> */}
              </ListItem>
              <View style={{height: 1, backgroundColor: colors?.borderColor}} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Wallet_History_Component;
