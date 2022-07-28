import { NavigationContainer, StackActions } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Coffee from './Components/Coffee/Coffee';
import Receipts from './Components/Receipts/Receipts';
import Home from "./Components/Home/Home";
import Wines from './Components/Wines/Wines';
import MealPlanComp from './Components/MealPlan/MealPlanComp';
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator  >
        <Tab.Screen name="Home" component={Home} options={
          {
            title: 'Home',
            tabBarIcon: () => {
              return (
                <Entypo name="home" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
        <Tab.Screen name="Receipt" component={Receipts} options={
          {
            title: 'Receipt',
            tabBarIcon: () => {
              return (
                <FontAwesome5 name="receipt" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
        <Tab.Screen name="Wine" component={Wines} options={
          {
            title: 'Wine',
            tabBarIcon: () => {
              return (
                <FontAwesome5 name="wine-glass-alt" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
        <Tab.Screen name="Meal Plan" component={MealPlanComp} options={
          {
            title: 'Meal Plan',
            tabBarIcon: () => {
              return (
                <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
        <Tab.Screen name="Coffee" component={Coffee} options={
          {
            title: 'Coffee',
            tabBarIcon: () => {
              return (
                <FontAwesome5 name="coffee" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: 'gray',
          }
        } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

