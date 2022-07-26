import React, { useState } from "react";
import FoodDetails from "./FoodDetails";
import {  ScrollView , Button } from 'react-native';

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
          <ScrollView>
              <ScrollView>
                  <Button onPress={getMealData} title="meal plan">
                  </Button>
              </ScrollView>
              {mealData && <FoodDetails mealData={mealData} />}
          </ScrollView>
      )

}
