// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AppTopTabNavigator from './src/navigators/top-tab-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthNavigator from './src/navigators/authflow-navigator';
import AuthTokenFlow from './src/navigators/authflowstoretoken-navigation';
import DBSqliteNavigationAssignment4 from './src/navigators/db-sqlite-navigation';
import ApiSauceNavigator from './src/navigators/api-navigator-apisauce';
// import AppBottomNavigator from './src/navigators/tab-navigator';
// import AppDrawerNavigator from './src/navigators/drawer-navigator';
// import AppNavigator from './src/navigators/app-navigator';

const App: React.FC = () => {
  return (
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     {/* <AppBottomNavigator /> */}
    //     {/* <AppNavigator/> */}
    //     {/* <AppDrawerNavigator /> */}
    //     {/* <AppTopTabNavigator /> */}
    //     <AuthNavigator />
    //   </NavigationContainer>
    // </SafeAreaProvider>
    // <AuthTokenFlow />
    // <DBSqliteNavigationAssignment4 />
    <ApiSauceNavigator />
  );
};

export default App;
