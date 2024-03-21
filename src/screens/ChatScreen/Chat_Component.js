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
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/56e9/dca9/865a9ee40e0fa951d89b499668c178cc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSyuHldwYs3x5emUPwwso9HyPLoGscmO8A74SLdGU-89RjmhYkWUYhXzUvBDN9U3-bXdWxdCMMAPrE9vpPSiIcasHLRqnY886IrGnEhsVZky1zlKNucOHHjBaAhzTNR0NcEDyu~6FTjUb3PMQsmOULl23IJ-xhVoPpPNc641CZrpeiWpVA~N51HXiNOaxBcOwoKPSzwfjlh618By05NZZQLpW6ZFixTA1PIU7xQZ1cM1IufSAK57O0JQ2Z4IssVuh-dbCuEC6jTADkhwaDP1RQYFxADuwmCAs9~j06w7op47fmFetUG7uYwUWHJeAF~UTZobIETG15hwKzVlJvVmQg__',
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
            hero.dlicom.io
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
