import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../shared/constants/screens';
import HelloWorldScreen from '../screens/HelloWorldScreen';
import WebViewScreen from '../screens/WebViewScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

// Define the screen options outside of the component
const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    const iconName = getIconNameForTabBar(route, focused);
    return <Icon name={iconName} size={size} color={color} />;
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

const AppBottomNavigator: React.FC = () => {
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

export default AppBottomNavigator;
