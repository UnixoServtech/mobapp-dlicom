import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

const Pressable = ({children, disabled, onPress, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...props}
      disabled={disabled}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Pressable;
