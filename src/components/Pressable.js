import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

const Pressable = ({children, ...props}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Pressable;
