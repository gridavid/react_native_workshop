import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import Home from '../Home/Home';


import Drink from '../Drink/Drink';
import Receipts from '../Receipts/Receipts';
import FoodComp from '../Food_alt/FoodComp';

const Stack = createStackNavigator();

export default function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home} />
            <Stack.Screen name = "Receipts" component = {Receipts} />
            <Stack.Screen name = "Food" component = {FoodComp } />
            <Stack.Screen name = "Drink" component = {Drink} />
            
        </Stack.Navigator>
    )
}
