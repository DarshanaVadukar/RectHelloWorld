import React from 'react';
import {View, Text} from 'react-native';

const UserDetailScreen = ({route}) => {
  const {id, name} = route.params;
  return (
    <View>
      <Text>itemId: {id.toString()}</Text>
      <Text>otherParam: {name}</Text>
    </View>
  );
};

export default UserDetailScreen;
