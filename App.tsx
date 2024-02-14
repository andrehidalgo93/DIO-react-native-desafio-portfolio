import { StyleSheet, View } from 'react-native';
import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <Routes />

      <StatusBar style="light" />
    </View>
  );
}