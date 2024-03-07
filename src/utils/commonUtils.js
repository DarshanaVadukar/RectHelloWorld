import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

export const addPermissionOfNotiForAndroid33 = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
}

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    // save the token to the db
    console.log("Token :", token)
}


export const notificationListener=()=>{
    //onNotificationOpenedApp: When the application is running, but in the background.
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log("Notification caused to open app from background state :", remoteMessage.notification);
      });

      //getInitialNotification: When the application is opened from a quit state.
    messaging().getInitialNotification().then(remoteMessage => {
        if(remoteMessage){
            console.log("Notification caused to open app from quite state :", remoteMessage.notification);
        }
    })
}