import React , { useState , useEffect} from "react";
import {  View , Text , Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { create } from "xmlbuilder";


const renderersProps = {
  img: {
    enableExperimentalPercentWidth: true
  }
};


export default function Food({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const { width } = useWindowDimensions();
  console.log(imageUrl)
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
      <Image style={{ width : 200, height : 200}} source={imageUrl}/>
      <Text>Preparation time: {meal.readyInMinutes} minutes</Text>
      <Text>Number of servings: {meal.servings}</Text>
      <Text>Recipe {meal.sourceUrl}</Text>
    </View>
  )
}

