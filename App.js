import { NavigationContainer, StackActions } from '@react-navigation/native';
import MyStack from './Components/MyStack/MyStack';
import 'react-native-gesture-handler';



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

