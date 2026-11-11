import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Portal Kampus UNLA- Daniel Setiawan - Fabric WebView</Text>
      </View>

      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: 'https://www.unla.ac.id/' }}
          style={styles.flexOne}
          javaScriptEnabled={true}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5FCFF' },
  header: {
    height: 55,
    backgroundColor: '#13f089',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  webViewContainer: { flex: 1 },
  flexOne: { flex: 1 },
});