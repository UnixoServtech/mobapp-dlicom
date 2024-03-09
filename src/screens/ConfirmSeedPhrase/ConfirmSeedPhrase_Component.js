import {useTheme} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import {Button, Header, Spacing, Text, Pressable} from '../../components';
import Strings from '../../localization/Strings';
import theme from '../../theme';
import createStyles from './ConfirmSeedPhrase.style';

const ConfirmSeedPhrase_Component = ({
  onPressLeftContent,
  seedPhraseList,
  onSeedPhraseSelect,
  words,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderInfo = () => {
    return (
      <View style={styles.infoWrapper}>
        <Text type={'device-header'}>Confirm Seed Phrase</Text>
        <Spacing />
        <Text
          type={'helper-text'}
          textAlign={'center'}
          lineHeight={theme.typography.lineHeights.md}
          color={colors.caption}>
          Verify yor saved your secret recovery phrase by select 3 correct word
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header leftText={Strings.back} onPressLeftContent={onPressLeftContent} />
      <View style={styles.wrapper}>
        {renderInfo()}
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.seedPhraseWrapper}
          columnWrapperStyle={styles.columStyle}
          contentContainerStyle={styles.listWrapperStyle}
          data={words}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <Pressable
                onPress={() => onSeedPhraseSelect(item, index)}
                style={[
                  styles.itemStyle,
                  item?.selected && {backgroundColor: colors?.primaryMainColor},
                ]}>
                <Text
                  type={'helper-text'}
                  archivoRegular={true}
                  lineHeight={24}>
                  {item}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      <View
        style={{
          margin: theme.sizes.spacing.ph,
          // justifyContent: 'center',
          position: 'absolute',
          // top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Button showIconRight={true} label={Strings.next} isDisabled={true} />
      </View>
    </View>
  );
};

export default ConfirmSeedPhrase_Component;
