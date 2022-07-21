import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Home from '../Home/Home';
import Food from '../Food/Food';

import Drink from '../Drink/Drink';
import Receipts from '../Receipts/Receipts';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={header}
                name="Home"
                component={Home} />
            <Stack.Screen options={header} name="Receipts" component={Receipts} />
            <Stack.Screen options={header} name="Food" component={Food} />
            <Stack.Screen options={header} name="Drink" component={Drink} />

        </Stack.Navigator>
    )
}

const header = {
    headerStyle: {
        backgroundColor: '#f4511e',
        
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}
