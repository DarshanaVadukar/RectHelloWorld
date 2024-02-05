import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import WebViewScreen from '../screens/WebViewScreen';
import {Icon} from 'react-native-elements';
import {SCREENS} from '../shared/constants/screens';

const Tab = createMaterialTopTabNavigator();

// Define the screen options outside of the component
const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color}) => {
    const iconName = getIconNameForTabBar(route, focused);
    return <Icon name={iconName} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});

const getIconNameForTabBar = (route: any, focused: boolean) => {
  let iconName;
  if (route.name === SCREENS.HOME) {
    iconName = focused ? 'star' : 'rocket';
  } else if (route.name === SCREENS.WEBVIEW) {
    iconName = focused ? 'cloud' : 'rocket';
  }
  return iconName;
};

const AppTopTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HelloWorldScreen}
        options={{title: 'Welcome'}}
      />
      <Tab.Screen name={SCREENS.WEBVIEW} component={WebViewScreen} />
    </Tab.Navigator>
  );
};

export default AppTopTabNavigator;
