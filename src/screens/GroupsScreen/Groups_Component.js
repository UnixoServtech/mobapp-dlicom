import { useTheme } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import images from '../../assets/images';
import {
  Button,
  Header,
  ListItem,
  Pressable,
  Spacing
} from '../../components';
import theme from '../../theme';
import createStyles from './Groups.style';

const Groups_Component = ({
  onPressLeftContent,
  btnLabel,
  btnPress,
  groupList,
  isDisabled,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        centerElement={'Groups'}
        onPressLeftContent={onPressLeftContent}
      />
      <FlatList
        data={groupList}
        contentContainerStyle={{
          paddingHorizontal: theme.sizes.spacing.ph,
          paddingTop: theme.sizes.spacing.ph,
        }}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <Pressable onPress={() => {}}>
            <ListItem
              style={{
                backgroundColor: '#191A1D',
                borderRadius: theme.normalize(14),
                paddingVertical: theme.normalize(15),
                paddingHorizontal: theme.normalize(25),
              }}>
              <ListItem.Content>
                <ListItem.Body>
                  <ListItem.Title type={'helper-text'} amikoBold={true}>
                    Crypto
                  </ListItem.Title>
                  <ListItem.Note
                    amikoRegular={true}
                    size={theme.typography.fontSizes.xs}>
                    about crypto news
                  </ListItem.Note>
                </ListItem.Body>
                <ListItem.Right>
                  <Image
                    source={images.ic_add}
                    resizeMode="contain"
                    style={{
                      height: theme.sizes.icons.xl2,
                      width: theme.sizes.icons.xl2,
                    }}
                  />
                </ListItem.Right>
              </ListItem.Content>
            </ListItem>
            <Spacing />
          </Pressable>
        )}
      />
      {/* <View style={{flex: 1}}>
        <Spacing size="xl" />
        <ListItem
          style={{
            backgroundColor: '#191A1D',
            borderRadius: theme.normalize(14),
            paddingVertical: theme.normalize(15),
            paddingHorizontal: theme.normalize(25),
          }}>
          <ListItem.Content>
            <ListItem.Body>
              <ListItem.Title type={'helper-text'} amikoBold={true}>
                Crypto
              </ListItem.Title>
              <ListItem.Note
                amikoRegular={true}
                size={theme.typography.fontSizes.xs}>
                about crypto news
              </ListItem.Note>
            </ListItem.Body>
            <ListItem.Right>
              <Image
                source={images.ic_add}
                resizeMode="contain"
                style={{
                  height: theme.sizes.icons.xl2,
                  width: theme.sizes.icons.xl2,
                }}
              />
            </ListItem.Right>
          </ListItem.Content>
        </ListItem>
        <Spacing size="md" />
        <ListItem
          style={{
            backgroundColor: '#191A1D',
            borderRadius: theme.normalize(14),
            paddingVertical: theme.normalize(15),
            paddingHorizontal: theme.normalize(25),
          }}>
          <ListItem.Content>
            <ListItem.Body>
              <ListItem.Title type={'helper-text'} amikoBold={true}>
                Crypto
              </ListItem.Title>
              <ListItem.Note
                amikoRegular={true}
                size={theme.typography.fontSizes.xs}>
                about crypto news
              </ListItem.Note>
            </ListItem.Body>
            <ListItem.Right>
              <Image
                source={images.ic_selected}
                resizeMode="contain"
                style={{
                  height: theme.sizes.icons.xl2,
                  width: theme.sizes.icons.xl2,
                }}
              />
            </ListItem.Right>
          </ListItem.Content>
        </ListItem>
      </View> */}
      <View style={{margin: theme.sizes.spacing.ph, marginTop: 0}}>
        <Button
          isDisabled={isDisabled}
          label={btnLabel}
          onPress={btnPress}
          showIconRight={true}
        />
      </View>
    </View>
  );
};

export default Groups_Component;
