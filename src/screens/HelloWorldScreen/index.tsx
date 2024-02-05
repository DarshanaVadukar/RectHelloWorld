import React from 'react';
import { View, Text, StyleSheet, StatusBar, Button} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props: any) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}


type Props = {
  navigation: any; // Type for navigation prop
};

const HelloWorldScreen: React.FC<Props> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#F7C6E3',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#F7C6E3" />
      <Text style={styles.textLatoBold}>Hello, World!</Text>
      <Text style={styles.textLatoBlack}>Hello, World!</Text>
      <Text style={styles.textLatoLightItalic}>Hello, World!</Text>
      <Button
        title="Go To Webview"
        onPress={() => {
          navigation.navigate(SCREENS.WEBVIEW);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLatoBold: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
  },
  textLatoBlack: {
    fontSize: 24,
    fontFamily: 'Lato-Black',
  },
  textLatoLightItalic: {
    fontSize: 24,
    fontFamily: 'Lato-LightItalic',
  },
});

export default HelloWorldScreen;
