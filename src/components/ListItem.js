import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Text from './Text';
import {useTheme} from '@react-navigation/native';
import theme from '../theme';

const createStyles = colors =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.sizes.spacing.ph,
      paddingVertical: 10,
    },
    date: {
      fontSize: 12,
      marginBottom: 10,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    actions: {
      flexDirection: 'row',
      paddingTop: 10,
      paddingLeft: 40,
    },
    icon: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    body: {
      flex: 1,
    },
    rightWrapper: {
      flex: 0.6,
      alignItems: 'flex-end',
      paddingRight: 2,
    },
    title: {},
    note: {},
    amount: {
      color: colors.listItem.amount,
    },
    fiatAmount: {
      color: colors.listItem.link,
      fontSize: theme.typography.fontSizes.xss,
      textTransform: 'uppercase',
    },
    avatar: {
      height: theme.sizes.image.xl4,
      width: theme.sizes.image.xl4,
      borderRadius: theme.sizes.image.xl4 / 2,
    },
    borderStyle: {borderBottomWidth: 1, borderColor: colors.listItem.border},
    badgeWrapper: {
      height: 18,
      width: 18,
      borderRadius: 10,
      backgroundColor: colors?.primaryMainColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const ListItem = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <View style={[styles.wrapper, style]} {...props} />;
};

const ListItemContent = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View
      style={[
        styles.content,
        props?.noCenter && {alignItems: 'stretch'},

        style,
      ]}
      {...props}
    />
  );
};

const ListItemDate = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <Text style={[styles.date, style]} {...props} />;
};

const ListItemIcon = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <View style={[styles.icon, style]} {...props} />;
};

const ListItemAvatar = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <Image style={[styles.avatar, style]} {...props} />;
};

const ListItemBody = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <View style={[styles.body, style]} {...props} />;
};
const ListItemTitle = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <Text
      interLight={true}
      color={colors.listItem.tittleText}
      style={[styles.title, style]}
      {...props}
    />
  );
};

const ListItemNote = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <Text
      type={'helper-text'}
      color={colors.listItem.bodyText}
      numberOfLines={1}
      ellipsizeMode={'middle'}
      style={[styles.note, style]}
      {...props}
    />
  );
};

const ListItemRight = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return <View style={[styles.rightWrapper, style]} {...props} />;
};

const ListItemAmount = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <Text
      type={'helper-text-medium'}
      style={[styles.amount, style]}
      {...props}
    />
  );
};
const ListItemFiatAmount = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <Text
      type={'helper-text-medium'}
      style={[styles.fiatAmount, style]}
      {...props}
    />
  );
};

const ListItemBorder = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return <View style={[styles.borderStyle, style]} {...props} />;
};

const ListItemBadge = ({style, ...props}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.badgeWrapper}>
      <Text size={12} {...props} />
    </View>
  );
};

ListItem.Date = ListItemDate;
ListItem.Content = ListItemContent;
ListItem.Icon = ListItemIcon;
ListItem.Avatar = ListItemAvatar;
ListItem.Body = ListItemBody;
ListItem.Title = ListItemTitle;
ListItem.Note = ListItemNote;
ListItem.Right = ListItemRight;
ListItem.Amount = ListItemAmount;
ListItem.FiatAmount = ListItemFiatAmount;
ListItem.Border = ListItemBorder;
ListItem.Badge = ListItemBadge;

export default ListItem;

// <ListItem>
//   <ListItem.Content noCenter>
//     <ListItem.Icon>
//       <Image
//         source={{uri: 'https://picsum.photos/200/300'}}
//         style={styles.avatar}
//       />
//     </ListItem.Icon>
//     <ListItem.Body>
//       <ListItem.Title>#Crypto</ListItem.Title>
//       <ListItem.Note>For sure!</ListItem.Note>
//     </ListItem.Body>
//     <ListItem.Right>
//       <ListItem.Date color={colors.listItem.date}>28 feb</ListItem.Date>
//     </ListItem.Right>
//   </ListItem.Content>
// </ListItem>;

// <ListItem>
// <ListItem.Content>
//   <ListItem.Icon>
//     <Image
//       source={{uri: 'https://picsum.photos/200/300'}}
//       style={styles.avatar}
//     />
//   </ListItem.Icon>
//   <ListItem.Body>
//     <ListItem.Title>#Crypto</ListItem.Title>
//     <ListItem.Note>For sure!..</ListItem.Note>
//   </ListItem.Body>
//   <ListItem.Right>
//     <ListItem.Amount>130.4115</ListItem.Amount>
//     <ListItem.FiatAmount>$130.32</ListItem.FiatAmount>
//   </ListItem.Right>
// </ListItem.Content>
// </ListItem>
