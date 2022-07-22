import React, { useState } from "react";
import FoodDetails from "./FoodDetails";
import {  View , Text , Image , TextInput , Button } from 'react-native';

export default function FoodComp()  {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function getMealData() {
        fetch(
          `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
        )
          .then((response) => response.json())
          .then((data) => {
            setMealData(data);
          })
          .catch(() => {
            console.log("error");
          });
      }
      function handleChange(e) {
        setCalories(e.target.value);
      }

      return (
          <View>
              <View>
                  <Button onPress={getMealData} title="meal plan">
                  </Button>
              </View>
              {mealData && <FoodDetails mealData={mealData} />}
          </View>
      )

}
