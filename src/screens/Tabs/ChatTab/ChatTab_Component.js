/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import images from '../../../assets/images';
import {
  Button,
  ListItem,
  Pressable,
  SearchBar,
  Spacing,
  Text,
} from '../../../components';
import BottomModal from '../../../components/BottomModal';
import theme from '../../../theme';
import createStyles from './ChatTab.style';

const ChatTab_Component = ({
  storyList,
  searchProp,
  dataList,
  onCancel,
  onConfirm,
  modalVisible = true,
  onRequestClose,
  actionSheetProp,
  onItemPress = () => {},
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderStoryView = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: theme.sizes.spacing.ph}}>
        {storyList?.map((item, i) => (
          <View style={styles.storyMainWrapper} key={i}>
            <View style={styles.storyWrapper}>
              <Image
                style={styles.storyAvatar}
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/a187/9766/0b899dafdc87da291a392291b3d15a2e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yqx7rEFHgZZv0zV9eqRstyS7gHhlDv7lgQidvgaz5RltV7X0bFKw-z5CCTWTo0-~dlhq3n-BBVWpxfz2on5XJ9maJ1bcQku59KQ54B21L4ddFOAhDRNrAqhn8-K2PMTzhNCxr4NoFSkeRNQ8zU5fzkcUi4tyFOaKUmW-dpKNDQZC2jvXeXGfOs2uMvvvdJkvhi1bY5JQlnnTI1QURTosnQGuYAD4cgpohKoQvJ5IeFbrtKRmq~5GoFgpeXpu8PXdqCQsVtLJy8BlgL-zZ1Rt4Y8luzWYtq-reDgsXp9IFAfFiRyTGcfUapzPXbdhPrWntAqSoWJbqi6I8LaqVmfSig__',
                }}
              />
            </View>
            <Spacing size="xs" />
            <Text
              type={'helper-text'}
              amikoBold={true}
              textAlign={'center'}
              numberOfLines={2}>
              Sarah
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  const _renderItem = ({item, index}) => (
    <Pressable onPress={() => onItemPress(item, index)}>
      <ListItem>
        <ListItem.Content>
          <ListItem.Icon>
            <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={styles.avatar}
            />
          </ListItem.Icon>
          <ListItem.Body>
            <ListItem.Title>Kennedy</ListItem.Title>
            <Spacing size={0} />
            <ListItem.Note>Hello there how are you today.</ListItem.Note>
          </ListItem.Body>
          {index % 2 ? null : (
            <ListItem.Right
              style={{
                flex: 0.4,
              }}>
              <ListItem.Badge label={4}>4</ListItem.Badge>
              <Spacing size={3} />
              <ListItem.FiatAmount>13.50</ListItem.FiatAmount>
            </ListItem.Right>
          )}
        </ListItem.Content>
        <Spacing size={5} />
      </ListItem>
    </Pressable>
  );

  const _renderTexIconButton = (icon, label, onPress, themeColor) => {
    return (
      <Pressable style={styles.iconButtonWrapper} onPress={onPress}>
        <Image source={icon} resizeMode="contain" style={styles.btnIcon} />
        <Spacing direction="x" />
        <Text
          interRegular={true}
          color={themeColor ?? colors?.actionSheet?.textColor}>
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <FlatList
          data={dataList}
          ListHeaderComponent={
            <View>
              <Spacing size="lg" />
              {renderStoryView()}
              <Spacing size="lg" />
              <SearchBar
                style={{marginHorizontal: theme.sizes.spacing.ph}}
                {...searchProp}
              />
              <Spacing size="lg" />
            </View>
          }
          keyExtractor={(item, index) => index}
          renderItem={(item, index) => _renderItem(item, index)}
          ListFooterComponent={<Spacing size={theme.sizes.spacing.tabHeight} />}
        />
      </View>
      <BottomModal
        modalVisible={actionSheetProp?.showActionSheet}
        onRequestClose={actionSheetProp?.onRequestClose}
        noPadding={true}
        swipeDirection={'down'}
        displayConfirmButton={false}>
        <View>
          <View
            style={{
              paddingHorizontal: theme.sizes.spacing.xs10,
              paddingBottom: 0,
            }}>
            <Spacing size={theme.normalize(8)} />
            {_renderTexIconButton(
              images.ic_share,
              actionSheetProp?.shareBtnProp?.label,
              actionSheetProp?.shareBtnProp?.onPress,
            )}
            <Spacing size={3} />
            {_renderTexIconButton(
              images.ic_markAll,
              actionSheetProp?.markAllReadBtnProp?.label,
              actionSheetProp?.markAllReadBtnProp?.onPress,
            )}
            <Spacing size={3} />
            {_renderTexIconButton(
              images.ic_close,
              actionSheetProp?.clearHistoryBtnProp?.label,
              actionSheetProp?.clearHistoryBtnProp?.onPress,
            )}
            <Spacing size={3} />
            {_renderTexIconButton(
              images.ic_delete,
              actionSheetProp?.deleteChatBtnProp?.label,
              actionSheetProp?.deleteChatBtnProp?.onPress,
              colors.red,
            )}
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: colors?.actionSheet?.borderColor,
              marginVertical: theme.normalize(12),
            }}>
            <Button
              themedColor={colors?.actionSheet?.buttonColor}
              {...actionSheetProp?.cancelBtnProp}
            />
          </View>
        </View>
      </BottomModal>
    </>
  );
};

export default ChatTab_Component;
