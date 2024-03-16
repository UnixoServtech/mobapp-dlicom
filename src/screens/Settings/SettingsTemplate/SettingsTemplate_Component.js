/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, Spacing, TableRow, Text} from '../../../components';
import theme from '../../../theme';
import createStyles from './SettingsTemplate.style';

const SettingsTemplate_Component = ({
  headerTittle,
  onPressLeftContent,
  renderSettingsList,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <Header
        onPressLeftContent={onPressLeftContent}
        centerElement={headerTittle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          paddingTop: theme.sizes.spacing.ph,
          paddingBottom: theme.sizes.spacing.tabHeight,
        }}>
        {renderSettingsList?.map((item, index) => {
          return item?.section ? (
            <View
              key={index}
              style={{
                height: 1,
                backgroundColor: colors?.borderColor,
                marginBottom: 5,
              }}
            />
          ) : (
            <View
              key={index}
              style={{
                paddingHorizontal: theme.sizes.spacing.ph,
              }}>
              {item?.extraPadding ? <Spacing size={5} /> : null}
              <TableRow {...item} />
              <Spacing size={5} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SettingsTemplate_Component;
