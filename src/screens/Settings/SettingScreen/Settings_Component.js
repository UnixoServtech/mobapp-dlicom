/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import images from '../../../assets/images';
import {
  Header,
  ListItem,
  SearchBar,
  Spacing,
  TableRow,
} from '../../../components';
import Strings from '../../../localization/Strings';
import theme from '../../../theme';
import createStyles from './Settings.style';

const Settings_Component = ({
  source,
  username,
  status,
  row1Prop,
  row2Prop,
  row3Prop,
  row4Prop,
  row5Prop,
  row6Prop,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderHeader = () => {
    return (
      <>
        <ListItem>
          <ListItem.Content noCenter={true}>
            <ListItem.Icon style={{alignItems: 'flex-start'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{
                    uri: source,
                  }}
                  defaultSource={images.ic_place_holder}
                  style={styles.avatar}
                />
                <View style={styles.statusStyle(false)} />
              </View>
            </ListItem.Icon>
            <ListItem.Body>
              <ListItem.Title
                lineHeight={theme.typography.lineHeights.xl}
                size={theme.typography.fontSizes.lg}
                amikoBold={true}
                color={colors.primaryMainColor}>
                {username}
              </ListItem.Title>
              <Spacing size={4} />
              <ListItem.Note
                color={colors.text}
                lineHeight={theme.typography.lineHeights.md}
                size={theme.typography.fontSizes.xs}
                style={{maxWidth: '70%'}}>
                {status}
              </ListItem.Note>
            </ListItem.Body>
          </ListItem.Content>
        </ListItem>
        <Spacing size={10} />
        <ListItem.Border style={{borderColor: colors?.headerBorder}} />
      </>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header isLeftIconHidden hideBorder centerElement={Strings.settings} />
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          padding: theme.sizes.spacing.ph,
          paddingBottom: theme.sizes.spacing.tabHeight,
        }}>
        <SearchBar placeHolderText={'Search'} />
        <Spacing />
        <TableRow {...row1Prop} />
        <Spacing size={5} />
        <TableRow {...row2Prop} />
        <Spacing size={5} />
        <TableRow {...row3Prop} />
        <Spacing size={5} />
        <TableRow {...row4Prop} />
        <Spacing size={5} />
        <TableRow {...row5Prop} />
        <Spacing size={5} />
        <TableRow {...row6Prop} />
      </ScrollView>
    </View>
  );
};

export default Settings_Component;
