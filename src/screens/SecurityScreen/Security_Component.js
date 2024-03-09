import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../../components';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import createStyles from './Security.style';

const Security_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1}}>
        <View style={styles.headerStyle}>
          <Text poppinsSemiBold={true} size={theme.typography.fontSizes.xl}>
            {Strings.securityScreen}
          </Text>
        </View>
      </View>
      <View style={{padding: theme.sizes.spacing.pv}}>
        <Button
          label={Strings.forgotPwd}
          variant="ghost"
          themedColor={colors.gray1}
          isCompact={true}
        />
      </View>
    </View>
  );
};

export default Security_Component;
