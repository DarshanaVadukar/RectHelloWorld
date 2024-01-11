import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SCREENS} from '../../shared/constants/screens';

type Props = {
  navigation: any; // Type for navigation prop
};


const HelloWorldScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
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