import React from 'react';
import {Alert, View, Button} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';
import { useNavigation } from '@react-navigation/native';


const AlertDialogScreen = () => {

  const navigation = useNavigation(); // <-- new code

  const showAlertWithOptions = () => {
    Alert.alert(
      'Select an Option',
      'Please choose one of the following options:',
      [
        {text: 'Option 1', onPress: () => console.log('Option 1 pressed')},
        {
          text: 'Move To List Dialog Screen',
          onPress: () => {
            navigation.navigate(SCREENS.LISTDIALOG);
        }
      },
        {text: '', style: 'cancel'},
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

export default AlertDialogScreen;
