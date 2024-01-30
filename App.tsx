import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AppBottomNavigator from './src/navigators/tab-navigator';
import AppDrawerNavigator from './src/navigators/drawer-navigator';
// import AppNavigator from './src/navigators/app-navigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <AppBottomNavigator /> */}
      {/* <AppNavigator/> */}
      <AppDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
