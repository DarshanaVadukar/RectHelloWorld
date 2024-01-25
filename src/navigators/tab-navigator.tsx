import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../shared/constants/screens';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {Icon} from 'react-native-vector-icons/Icon';

const Tab = createBottomTabNavigator();

const AppBottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === SCREENS.HOME) {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === SCREENS.WEBVIEW) {
            iconName = focused ? 'ios-list' : 'rocket';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HelloWorldScreen}
        options={{title: 'Welcome'}}
      />
      <Tab.Screen name={SCREENS.WEBVIEW} component={WebViewScreen} />
    </Tab.Navigator>
  );
};

export default AppBottomNavigator;
