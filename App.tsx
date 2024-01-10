import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLatoBold}>Hello, World!</Text>
      <Text style={styles.textLatoBlack}>Hello, World!</Text>
      <Text style={styles.textLatoLightItalic}>Hello, World!</Text>
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

export default App;
