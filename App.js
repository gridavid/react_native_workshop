import { NavigationContainer, StackActions } from '@react-navigation/native';
import MyStack from './Components/MyStack/MyStack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Coffee from './Components/Coffee/Coffee';
import Receipts from './Components/Receipts/Receipts';
import Home from "./Components/Home/Home";
import Wines from './Components/Wines/Wines';
import MealPlanComp from './Components/MealPlan/MealPlanComp';
import Header from './Components/Header/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Coffee" component={Coffee} />
        <Tab.Screen name="Wines" component={Wines} />
        <Tab.Screen name="Receipts" component={Receipts} />
        <Tab.Screen name="Meal plan" component={MealPlanComp} />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

