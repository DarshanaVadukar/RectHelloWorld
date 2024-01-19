import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';

const UserDetailScreen = ({route}) => {
  const navigation = useNavigation();

  const {itemData} = route.params;
  // const staticImagePath = require('../../../assets/images/user.png');

  // console.log('>>>name' + itemData.name);
  // console.log('>>>id' + itemData.id.toString());

  //const [userName, setUserName] = useState(!itemData.name ? '' : itemData.name);
  // const staticImagePath = require('../../../assets/images/user.png');

  useEffect(() => {
    if (route.params?.itemData) {
      console.log('>#', JSON.stringify(route.params.itemData));
      // itemData = route.params?.updatedData
      // setUserName(route.params.updatedData.name);
    }
  }, [route.params?.itemData]);

  const handleImageClick = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: SCREENS.EDIT_USER_DETAIL,
        params: {userDataModel: itemData},
      }),
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleImageClick}>
          <Image
            source={require('../../../assets/images/edit.png')}
            style={styles.imageEdit}
          />
        </TouchableOpacity>
        <View style={styles.containerUserTop}>
          <View>
            {!itemData.profilePhoto ? (
              <Image
                source={require('../../../assets/images/user.png')}
                style={styles.image}
              />
            ) : (
              <Image
                source={{uri: itemData.profilePhoto}}
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.userNameContainer}>
            <Text>UserId: {itemData.id.toString()}</Text>
            <Text>User Name: {itemData.name}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  containerUserTop: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  imageEdit: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  userNameContainer: {
    paddingStart: 10,
  },
});

export default UserDetailScreen;
