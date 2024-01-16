import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

type Props = {
  onCameraClick: any;
  onGalleryClick: any;
  visibility: any;
  onCancelClick: any;
  onBackdropPressV: any;
  onSwipeCompleteV: any;
};

const BottomSheetDialog: React.FC<Props> = (props: Props) => {
  return (
    <ReactNativeModal
      isVisible={props.visibility}
      onBackdropPress={props.onBackdropPressV}
      onSwipeComplete={props.onSwipeCompleteV}
      swipeDirection={['down']}
      style={styles.bottomModal}>
      <View style={styles.modalContent}>
        <Text style={styles.text1}>Upload Photo</Text>
        <Text style={styles.text2}>Choose Your Profile Picture</Text>
        <Button
          title="Take Photo"
          onPress={() => {
            props.onCameraClick();
          }}
        />
        {/* Add margin between buttons */}
        <View style={styles.buttonMargin} />
        <Button
          title="Choose From Library"
          onPress={() => {
            props.onGalleryClick();
          }}
        />
        {/* Add margin between buttons */}
        <View style={styles.buttonMargin} />
        <Button
          title="Cancel"
          onPress={() => {
            props.onCancelClick();
          }}
        />
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  text1: {
    textAlign: 'center',
    fontSize: 24,
    padding: 8,
    fontFamily: 'Lato-Bold',
  },
  text2: {
    textAlign: 'center',
    fontSize: 12,
    paddingBottom: 32,
    fontFamily: 'Lato-Black',
  },
  buttonMargin: {
    marginBottom: 8,
  },
});

export default BottomSheetDialog;
