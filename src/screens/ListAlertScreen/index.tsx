import React from 'react';
import {Alert, View, Button} from 'react-native';

const ListDialogScreen = () => {
  const showAlertWithOptions = () => {
    Alert.alert(
      'Select an Option',
      'Please choose one of the following options:',
      [
        {text: 'Option 1', onPress: () => console.log('Option 1 pressed')},
        {text: 'Option 2', onPress: () => console.log('Option 2 pressed')},
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  return (
    <View>
      <Button title="Show Options" onPress={showAlertWithOptions} />
    </View>
  );
};

export default ListDialogScreen;
