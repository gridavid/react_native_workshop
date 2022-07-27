import React , { useState , useEffect} from "react";
import {  View , Text , Image } from 'react-native';



export default function MealPlan({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  
  return (
    <View>
      <Text>{meal.title}</Text>
      <Image style={{ width : 200, height : 200}} source={{uri: imageUrl}}/>
      <Text>Preparation time: {meal.readyInMinutes} minutes</Text>
      <Text>Number of servings: {meal.servings}</Text>
    </View>
  )
}


