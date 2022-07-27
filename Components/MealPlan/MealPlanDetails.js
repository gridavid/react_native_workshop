import React from "react";
import Food from "./MealPlan";
import {  View , Text } from 'react-native';

export default function MealPlanDetails({mealData}) {
    const nutrients = mealData.nutrients;

    return (
        <View>
            <View>
                <Text>Macros</Text>
                <Text>Calories: {nutrients.calories.toFixed(0)}</Text>
                <Text>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</Text>
                <Text>Fat: {nutrients.fat.toFixed(0)}</Text>
                <Text>Protein: {nutrients.protein.toFixed(0)}</Text>
            </View>

            <View>
                {mealData.meals.map((meal)=> {
                    return <Food key={meal.id} meal={meal}/>
                })}
            </View>
        </View>
    )
}