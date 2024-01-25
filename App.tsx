import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppBottomNavigator from './src/navigators/tab-navigator';
// import AppNavigator from './src/navigators/app-navigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppBottomNavigator />
    </NavigationContainer>
  );
};

export default App;
