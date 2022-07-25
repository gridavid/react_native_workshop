import { createStackNavigator } from '@react-navigation/stack';
import Drink from '../Drink/Drink';
import Receipts from '../Receipts/Receipts';
import Home from "../Home/Home";


const Stack = createStackNavigator();

export default function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home} />
            <Stack.Screen name = "Receipts" component = {Receipts} />
            <Stack.Screen name = "Drink" component = {Drink} />
            
        </Stack.Navigator>
    )
}
