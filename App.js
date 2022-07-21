import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import Food from './Components/Food/Food';
import Home from './Components/Home/Home';
import Drink from './Components/Drink/Drink';
import Reciepts from './Components/Reciepts/Reciepts';

export default function App() {
  return (
    <View >
        <Home />
        <Food />
        <Drink />
        <Reciepts />

      <StatusBar style="auto" />
    </View>
  );
}

