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
  seedPhraseReady,
  primaryButtonPress,
}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  const renderInfo = () => {
    return (
      <View style={styles.infoWrapper}>
        <Text type={'device-header'}>{Strings.confirm_seed_phrase}</Text>
        <Spacing />
        <Text
          type={'helper-text'}
          textAlign={'center'}
          lineHeight={theme.typography.lineHeights.md}
          color={colors.caption}>
          {Strings.confirm_seed_phrase_note}
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
                disabled={seedPhraseReady && !item?.selected}
                onPress={() => onSeedPhraseSelect(item, index)}
                style={[
                  styles.itemStyle,
                  item?.selected && {backgroundColor: colors?.primaryMainColor},
                ]}>
                <Text
                  type={'helper-text'}
                  archivoRegular={true}
                  lineHeight={24}>
                  {item?.word}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          showIconRight={true}
          label={Strings.next}
          isDisabled={!seedPhraseReady}
          onPress={primaryButtonPress}
        />
      </View>
    </View>
  );
};

export default ConfirmSeedPhrase_Component;
