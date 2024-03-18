/* eslint-disable no-unused-vars */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import SettingsTemplate_Component from '../SettingsTemplate/SettingsTemplate_Component';
import {StyleSheet} from 'react-native';
import theme from '../../../theme';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.sizes.spacing.ph,
      paddingVertical: 10,
    },
  });
const PrivacyView_Component = ({
  headerTittle,
  onPressLeftContent,
  renderSettingsList,
  settingTemplateProp,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <>
      <SettingsTemplate_Component {...settingTemplateProp} />
    </>
  );
};

export default PrivacyView_Component;
