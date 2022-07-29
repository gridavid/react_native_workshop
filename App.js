import { NavigationContainer, StackActions } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Coffee from "./Components/Coffee/Coffee";
import Receipts from "./Components/Receipts/Receipts";
import Home from "./Components/Home/Home";
import Wines from "./Components/Wines/Wines";
import MealPlanComp from "./Components/MealPlan/MealPlanComp";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react"



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: () => {
              return <Ionicons name="home-outline" size={24} color="black" />
            },
            tabBarActiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Receipt"
          component={Receipts}
          options={{
            title: "Receipt",
            tabBarIcon: () => {
              return <Ionicons name="receipt-outline" size={24} color="black" />;
            },
            tabBarActiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Wine"
          component={Wines}
          options={{
            title: "Wine",
            tabBarIcon: () => {
              return (
                <Ionicons name="wine-outline" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Meal Plan"
          component={MealPlanComp}
          options={{
            title: "Meal Plan",
            tabBarIcon: () => {
              return (
                <Ionicons name="fast-food-outline" size={24} color="black" />
              );
            },
            tabBarActiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Coffee"
          component={Coffee}
          options={{
            title: "Coffee",
            tabBarIcon: () => {
              return <MaterialCommunityIcons name="coffee-outline" size={24} color="black" />
            },
            tabBarActiveTintColor: "gray",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

