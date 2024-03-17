/* eslint-disable react-native/no-inline-styles */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {
  Pressable,
  Spacing,
  Text,
  SwapItemLayout,
  Button,
} from '../../components';
import theme from '../../theme';
import createStyles from './Swap.style';
import CustomIcon from '../../components/CustomIcon';

const Swap_Component = ({button1Press, button2Press}) => {
  const {colors} = useTheme();
  let styles = createStyles(colors);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        {/* Swap from */}
        <SwapItemLayout
          header={'Swap From'}
          amount={'1.0'}
          currencyLogo={
            'https://s3-alpha-sig.figma.com/img/49d4/d42b/fad8a5f9ac69eb8d7a2f4bb3bad52986?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGvPBIV7eKqA5xGnnEunwog15Yir6itxBDxtVDgmj41h5SvLRDbKU-C3s3I4kJW7JU5lFtHBWzFXurBqwu7GlldlZkuiaVOmbH6r~rR4~lxKiR98HjbuZ--23J7RxRGevZSOUfQfCtU~Eu~m05VcZi4-3nPFueAWv~jkL7Aez6NK3QTXx4rt6NIr~ZbYgqQwZeeH9q4I54V1MQ13VxFpjUkrf4kms3Uv5H4KQHOe8WImfJS5nreP4leyWs069Uz5dyPMNehQWXMYZFkNZLJGhMVPevQ0BpGd99VOBVobR2G8kywoGbxgFA~3iTk0rdfqElcUcfpWV9aNjf10A-3U6g__'
          }
          selectedCurrency={'XTR'}
          isCloseIconVisible={true}
          balance={'7,508'}
        />
        <View>
          <View
            style={{
              height: 1,
              backgroundColor: colors?.swapModal?.borderColor,
            }}
          />
          <Pressable
            hitSlop={{
              bottom: theme.normalize(24),
            }}
            style={styles.swapWrapperBtn}>
            <CustomIcon
              name={'swap'}
              color={'white'}
              size={theme.sizes.icons.xl}
            />
          </Pressable>
        </View>
        {/* Swap to */}
        <SwapItemLayout
          header={'Swap to'}
          amount={'40.1737'}
          currencyLogo={
            'https://s3-alpha-sig.figma.com/img/a67e/034a/aaffdaf606ac4f204b3f876739f6e670?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ou4h4mRaHmOjOyfvhZzmgkLKPAuxvfY1jxoUfxekud1dP9A81puK5BRa8J3KvGr4llv8g3B5ZTWJD1oJfhv3BMsvOajevUfdi1RVKAC-1JSIl4j3Sx7uU~NwcYYBbF4vR3iuJW~DTQFRkfP6rqU9CS-l7rGWIc-CwLCbjwiWWwfFYulwix59W5EsRArQzUWyFjhjipTiNCjREWwYMcp6sTeJ~daAzYjATjgP0bMnKx6C5HYJr0OJhGklqgFOf6aPbJRLvGnHAGa~Y6hqPQgErdp3UJcnAsPSNLn7cRZuC~b0Aik-58A6jW5aALPVqEJWqxzdJeUelKq4~R2lFue0zw__'
          }
          selectedCurrency={'SQL'}
          isCloseIconVisible={false}
          balance={0}
          isSwapTo={true}
        />
        <Spacing size="xs2" />
        <Button
          label={'Swap'}
          style={{marginHorizontal: theme.normalize(15)}}
        />
        <Spacing size="md" />
        <Text
          textAlign={'center'}
          size={theme.typography.fontSizes.xs}
          color={colors?.swapModal?.secondaryText}>
          1 ETH = 40.17372858 XRP
        </Text>
        <Spacing />
      </View>
    </View>
  );
};

export default Swap_Component;
