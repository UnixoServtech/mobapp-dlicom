import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../..';
import {useTheme} from '@react-navigation/native';
import Strings from '../../../localization/Strings';

const createStyles = colors =>
  StyleSheet.create({
    viewWrapper: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 24,
    },
    viewContainer: {
      width: '100%',
      backgroundColor: '#141414',
      borderRadius: 16,
    },
    actionHorizontalContainer: {
      flexDirection: 'row',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: 'red',
    },
    actionVerticalContainer: {
      flexDirection: 'column',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    childrenContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      margin: 8,
    },
    buttonHorizontal: {
      flex: 1,
    },
  });

export default function ActionContent({
  cancelTestID,
  confirmTestID,
  cancelText,
  children,
  confirmText,
  confirmDisabled,
  cancelButtonMode,
  cancelButtonDisabled,
  confirmButtonMode,
  displayCancelButton,
  displayConfirmButton,
  onCancelPress,
  onConfirmPress,
  viewWrapperStyle,
  viewContainerStyle,
  actionContainerStyle,
  childrenContainerStyle,
  verticalButtons,
}) {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={[styles.viewWrapper, viewWrapperStyle]}>
      <View style={[styles.viewContainer, viewContainerStyle]}>
        <View style={[styles.childrenContainer, childrenContainerStyle]}>
          {children}
        </View>
        <View
          style={[
            verticalButtons
              ? styles.actionVerticalContainer
              : styles.actionHorizontalContainer,
            actionContainerStyle,
          ]}>
          {displayCancelButton && (
            <Button
              isDisabled={cancelButtonDisabled}
              variant={cancelButtonMode}
              onPress={onCancelPress}
              style={[
                styles.button,
                !verticalButtons && styles.buttonHorizontal,
              ]}
              label={cancelText}
            />
          )}
          {displayConfirmButton && (
            <Button
              isDisabled={confirmDisabled}
              variant={confirmButtonMode}
              onPress={onConfirmPress}
              style={[
                styles.button,
                !verticalButtons && styles.buttonHorizontal,
              ]}
              label={confirmText}
            />
          )}
        </View>
      </View>
    </View>
  );
}
ActionContent.defaultProps = {
  cancelButtonMode: 'ghost',
  cancelButtonDisabled: false,
  confirmButtonMode: 'solid',
  cancelText: Strings.cancel,
  confirmText: Strings.confirm,
  confirmDisabled: false,
  displayCancelButton: true,
  displayConfirmButton: true,
  viewWrapperStyle: null,
  viewContainerStyle: null,
  childrenContainerStyle: null,
  verticalButtons: true,
};
