import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return false;
};

const HomeScreen = () => {
  return <View />;
};

const ProfileScreen = () => {
  return <View />;
};

const SettingsScreen = () => {
  return <View />;
};

const SignInScreen = () => {
  return <View />;
};

const SignUpScreen = () => {
  return <View />;
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      {getIsSignedIn() ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
