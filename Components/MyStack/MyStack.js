import { createStackNavigator } from '@react-navigation/stack';
import Coffee from '../Coffee/Coffee';
import Receipts from '../Receipts/Receipts';
import Home from "../Home/Home";
import Food from "../Food/Food";
import Wines from '../Wines/Wines';
import MealPlanComp from '../MealPlan/MealPlanComp';
import Header from '../Header/Header';

const Stack = createStackNavigator();

export default function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{headerTitle: (props) => <Header {...props} />}}  name = "Home" component = {Home} />
            <Stack.Screen options={{headerTitle: (props) => <Header {...props} />}}  name = "Receipts" component = {Receipts} />
            <Stack.Screen options={{headerTitle: (props) => <Header {...props} />}}  name = "Coffee" component = {Coffee} />
            <Stack.Screen options={{headerTitle: (props) => <Header {...props} />}}  name = "Food" component = {Food} />
            <Stack.Screen options={{headerTitle: (props) => <Header {...props} />}}  name = "Meal Plan" component = {MealPlanComp} />
            <Stack.Screen options={{headerTitle: (props) => <Header {...props} />}}  name = "Wines" component = {Wines} />
        </Stack.Navigator>
    )
}
