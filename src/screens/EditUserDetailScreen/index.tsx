import React, {useState} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheetDialog from './bottomsheetdialog';
import ImageCropPicker from 'react-native-image-crop-picker';

const EditUserDetail = ({route}) => {
    const { dataModel } = route.params;
  const [isModelVisible, setModelVisible] = useState(false);
  const [filePath, setFilePath] = useState('');

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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModel}>
        {!filePath ? (
          <Image source={staticImagePath} style={styles.image} />
        ) : (
          <Image source={{uri: filePath}} style={styles.image} />
        )}
      </TouchableOpacity>
      <Text>dataModel.name</Text>

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
    alignItems: 'center',
    padding: 12,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default EditUserDetail;
