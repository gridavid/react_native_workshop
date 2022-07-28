import { createStackNavigator } from '@react-navigation/stack';
import Coffee from '../Coffee/Coffee';
import Receipts from '../Receipts/Receipts';
import Home from "../Home/Home";
import Wines from '../Wines/Wines';
import MealPlanComp from '../MealPlan/MealPlanComp';
import Header from '../Header/Header';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerTitle: (props) => <Header {...props} />, headerLeft: null }} name="Home" component={Home} />
            <Stack.Screen options={{ headerTitle: (props) => <Header {...props} />, headerLeft: null }} name="Receipts" component={Receipts} />
            <Stack.Screen options={{ headerTitle: (props) => <Header {...props} />, headerLeft: null }} name="Coffee" component={Coffee} />
            <Stack.Screen options={{ headerTitle: (props) => <Header {...props} />, headerLeft: null }} name="Meal Plan" component={MealPlanComp} />
            <Stack.Screen options={{ headerTitle: (props) => <Header {...props} />, headerLeft: null }} name="Wines" component={Wines} />
        </Stack.Navigator>
    )
}
