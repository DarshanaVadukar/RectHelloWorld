import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';
import UserDataModel from './UserDataModel';

const UserDetailScreen = ({route}) => {
  const navigation = useNavigation();

  const handleImageClick = () => {
    navigation.dispatch(CommonActions.navigate({name: SCREENS.EDITUSERDETAIL, params :{userDataModel}}));
  };

  const {id, name} = route.params;

  // Store data in the data model
  const userDataModel = UserDataModel.setData({
    userId: id,
    userName: name,
  });
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleImageClick}>
          <Image
            source={require('../../../assets/images/user.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.userNameContainer}>
        <Text>itemId: {id.toString()}</Text>
        <Text>otherParam: {name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  userNameContainer: {
    paddingStart: 10,
  },
});

export default UserDetailScreen;
