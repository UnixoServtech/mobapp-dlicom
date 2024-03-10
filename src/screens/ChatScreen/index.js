import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Pressable} from '../../components';
import {navigate} from '../../navigation/NavigationUtils';
import Routes from '../../navigation/Routes';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigate(Routes.GROUP_VIEW);
          }}>
          <Text> index </Text>
        </Pressable>
      </View>
    );
  }
}
