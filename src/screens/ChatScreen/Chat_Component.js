import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import {Pressable, Spacing, Text} from '../../components';
import theme from '../../theme';
import createStyles from './Chat.style';
import images from '../../assets/images';
import TabBar from '../../components/TabBar';
import ChatTab from '../Tabs/ChatTab/ChatTab';
import StatusTab from '../Tabs/StatusTab/StatusTab';
import {AppConstant} from '../../constants/constants';

const Chat_Component = ({
  button1Press,
  onPressLeftContent,
  routeMap,
  selectedTab,
  notificationClick,
  avatar,
  name,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.avatar}
            defaultSource={images.ic_place_holder}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text
            type={'helper-text'}
            netflixSansBold={true}
            color={colors?.grayLight}>
            {name}
          </Text>
        </View>
        <Pressable onPress={notificationClick}>
          <Image
            source={images.noti}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </Pressable>
        <Spacing direction="x" />
        <Pressable>
          <Image
            source={images.setting}
            resizeMode="contain"
            style={styles.iconStyle}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerMainWrapper}>
        {renderHeader()}
        <View style={styles.tabWrapper}>
          <TabBar routeMap={routeMap} />
        </View>
        <Spacing size="md" />
      </View>
      {/* {selectedTab === AppConstant.chatType ? <ChatTab /> : <StatusTab />} */}
    </View>
  );
};

export default Chat_Component;
