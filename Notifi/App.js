import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './components/Homepage';

export default function App() {
  const APP_NAME = "Notifi";

  return (
    <View style={styles.container}>
      <Homepage name = {APP_NAME}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
