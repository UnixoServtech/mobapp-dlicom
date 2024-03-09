import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Pressable} from '../../components';
import { navigate } from '../../navigation/NavigationUtils';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Pressable onPress={() => {
          navigate('GroupsScreen')
        }}>
          <Text> index </Text>
        </Pressable>
      </View>
    );
  }
}
