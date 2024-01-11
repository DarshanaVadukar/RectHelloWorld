import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {SCREENS} from '../shared/constants/screens';
import ListDialogScreen from '../screens/ListDialogScreen';
import AlertDialogScreen from '../screens/AlertDialogScreen';


const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HelloWorldScreen}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name={SCREENS.WEBVIEW} component={WebViewScreen} />
      <Stack.Screen name={SCREENS.ALERTDIALOG} component={AlertDialogScreen} />
      <Stack.Screen name={SCREENS.LISTDIALOG} component={ListDialogScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
