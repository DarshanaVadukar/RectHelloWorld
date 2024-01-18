import React, {useState} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheetDialog from './bottomsheetdialog';
import ImageCropPicker from 'react-native-image-crop-picker';
import {CommonActions, useNavigation, useRoute} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import {SCREENS} from '../../shared/constants/screens';

const EditUserDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isModelVisible, setModelVisible] = useState(false);
  const [filePath, setFilePath] = useState('');
  // Access the dataModel from the route parameters
  const {userDataModel} = route.params;

  console.log('>>>userDataModel' + JSON.stringify(userDataModel));
  const [text, onChangeText] = React.useState(userDataModel.name);

  const staticImagePath = require('../../../assets/images/user.png');

  const toggleModel = () => {
    setModelVisible(!isModelVisible);
  };

  const handleCameraClick = () => {
    toggleModel();
    requestCameraPermission();
  };

  const handleGalleryClick = () => {
    toggleModel();
    console.log('Gallery clicked!');
    requestStoragePermission();
  };

  const OpenCameraCropPicker = () => {
    ImageCropPicker.openCamera({}).then(image => {
      console.log(image);
      setFilePath(image.path);
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Require Camera Permission',
          message:
            'App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        OpenCameraCropPicker();
      } else {
        console.log('Camera permission denied');
        Alert.alert(
          'Camera permission denied',
          'Please enable camera permission in settings.',
        );
      }
    } catch (err) {
      console.warn(err);
      Alert.alert(
        'Camera permission',
        'Some thing went wrong! by taking camera permission.',
      );
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Require storage Permission',
          message:
            'App needs access to your storage ' +
            'so you can choose awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage');
        openGalleryCropPicker();
      } else {
        console.log('Storage permission denied');
        Alert.alert(
          'Storage permission denied',
          'Please enable Storage permission in settings.',
        );
      }
    } catch (err) {
      console.warn(err);
      Alert.alert(
        'Camera permission',
        'Some thing went wrong! by taking Storage permission.',
      );
    }
  };

  const openGalleryCropPicker = () => {
    ImageCropPicker.openPicker({}).then(image => {
      console.log(image);
      setFilePath(image.path);
    });
  };

  const checkValidation = (): boolean => {
    if (!text.trim()) {
      Alert.alert('Please enter user name must not be empty.');
      return false;
    } else if (!filePath.trim()) {
      Alert.alert('Please upload profile image.');
      return false;
    }
    return true;
  };

  const handleBackWithData = () => {
    if (checkValidation()) {
      userDataModel.name = text;
      userDataModel.
      navigation.dispatch(
        CommonActions.navigate({
          name: SCREENS.USERDETAIL,
          params: {
            itemData: userDataModel,
          },
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModel}>
        {!filePath ? (
          <Image source={staticImagePath} style={styles.image} />
        ) : (
          <Image source={{uri: filePath}} style={styles.image} />
        )}
      </TouchableOpacity>
      <Text style={styles.textInputTitle}>User Name: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={handleBackWithData}>
        <Text style={styles.btnSave}>Save</Text>
      </TouchableOpacity>
      <BottomSheetDialog
        onCameraClick={handleCameraClick}
        onGalleryClick={handleGalleryClick}
        onCancelClick={toggleModel}
        visibility={isModelVisible}
        onBackdropPressV={toggleModel}
        onSwipeCompleteV={toggleModel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
  },
  textInputTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    paddingStart: 8,
    marginTop: 12,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  btnSave: {
    height: 40,
    fontSize: 20,
    width: '96%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    backgroundColor: '#4690E8',
    color: '#fff',
    borderColor: '#ff5',
    borderRadius: 2,
  },
});

export default EditUserDetail;
