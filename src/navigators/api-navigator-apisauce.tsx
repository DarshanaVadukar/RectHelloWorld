import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FetchListScreen from '../screens/FetchListScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const ApiSauceNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name="FetchListScreen"
          component={FetchListScreen}
          options={{title: 'Home'}}
        />
        {/* <Stack.Screen name={SCREENS.WEBVIEW} component={WebViewScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApiSauceNavigator;
