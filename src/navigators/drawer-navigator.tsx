import React from 'react';
import {SCREENS} from '../shared/constants/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import WebViewScreen from '../screens/WebViewScreen';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={SCREENS.HOME}
        component={HelloWorldScreen}
        options={{title: 'Welcome'}}
      />
      <Drawer.Screen name={SCREENS.WEBVIEW} component={WebViewScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
