import { createStackNavigator } from '@react-navigation/stack';
import Coffee from '../Coffee/Coffee';
import Receipts from '../Receipts/Receipts';
import Home from "../Home/Home";
import Food from "../Food/Food";
import FoodComp from "../Food_alt/FoodComp";

const Stack = createStackNavigator();

export default function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home} />
            <Stack.Screen name = "Receipts" component = {Receipts} />
            <Stack.Screen name = "Coffee" component = {Coffee} />
            <Stack.Screen name = "Food" component = {Food} />
            <Stack.Screen name = "Meal Plan" component = {FoodComp} />
        </Stack.Navigator>
    )
}
