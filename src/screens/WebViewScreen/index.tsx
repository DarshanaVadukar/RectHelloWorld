import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
import {SCREENS} from '../../shared/constants/screens';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';

function FocusAwareStatusBar(props: any) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

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

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#681DA8',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#681DA8" />
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
    flex: 1,
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
