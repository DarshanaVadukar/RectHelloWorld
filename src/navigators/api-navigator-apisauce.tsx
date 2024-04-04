import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { NavigatorParamList } from './apisauce-navigation-routes';
import { BottomTab } from './bottom-tab/bottom-tab-navigator';
import { LoginScreen } from '../screens/login-screen/login-screen.screen';

const Stack = createNativeStackNavigator<NavigatorParamList>();

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>

export const navigationRef = createNavigationContainerRef();

const ApiSauceNavigator: React.FC = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LOGIN_SCREEN" component={LoginScreen} />
      <Stack.Screen name="BOTTOM_TABS" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default ApiSauceNavigator;
