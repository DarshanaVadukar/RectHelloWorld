import React, {useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {SCREENS} from '../../shared/constants/screens';

type Props = {
  navigation: any;
  route: any; // Type for navigation prop
};

const WebViewScreen: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
    setProgress(100);
  };

  const handleNavigationStateChange = (navState: any) => {
    const {loading, progress} = navState;
    setLoading(loading);
    setProgress(progress * 100);
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://www.example.com'}}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onNavigationStateChange={handleNavigationStateChange}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color="#0000ff" />
        </View>
      )}
      {progress < 100 && !loading && (
        <View style={[styles.progressBar, StyleSheet.absoluteFill]}>
          <View
            style={{
              width: '${progress}%',
              backgroundColor: '#0000ff',
              height: 4,
            }}
          />
        </View>
      )}
      <Button
        title="Go To ListDialog"
        onPress={() => {
          navigation.navigate(SCREENS.ALERTDIALOG);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex :1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,255,0.7)',
  },
  progressBar: {
    height: 4,
    width: '100%',
    backgroundColor: '#e0e0e0',
  },
});

export default WebViewScreen;
