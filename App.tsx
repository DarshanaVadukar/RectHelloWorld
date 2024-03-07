// import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppTopTabNavigator from './src/navigators/top-tab-navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigator from './src/navigators/authflow-navigator';
import AuthTokenFlow from './src/navigators/authflowstoretoken-navigation';
import DBSqliteNavigationAssignment4 from './src/navigators/db-sqlite-navigation';
import ApiSauceNavigator from './src/navigators/api-navigator-apisauce';
// import AppBottomNavigator from './src/navigators/tab-navigator';
// import AppDrawerNavigator from './src/navigators/drawer-navigator';
// import AppNavigator from './src/navigators/app-navigator';
import { Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { addPermissionOfNotiForAndroid33, getToken, notificationListener, requestUserPermission } from './src/utils/commonUtils';

const App: React.FC = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
      return unsubscribe;
    }
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestUserPermission();
      addPermissionOfNotiForAndroid33();
      notificationListener();
      getToken();
    }
  }, []);

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



