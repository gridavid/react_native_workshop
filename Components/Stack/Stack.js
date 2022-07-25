import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home/Home"
import Food from "../Food/Food"
import Dogs from "../Dogs/Dogs"

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Dogs" component={Dogs} />
    </Stack.Navigator>
  );
}