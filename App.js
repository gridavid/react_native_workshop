import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Components/Stack/Stack'

export default function App() {
  return (
    <NavigationContainer>
    <Stack />
  </NavigationContainer>
  );
}


