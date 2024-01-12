import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {SCREENS} from '../shared/constants/screens';
import ListDialogScreen from '../screens/ListDialogScreen';
import AlertDialogScreen from '../screens/AlertDialogScreen';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';


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
      <Stack.Screen name={SCREENS.USERLIST} component={UserListScreen} />
      <Stack.Screen name={SCREENS.USERDETAIL} component={UserDetailScreen}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;