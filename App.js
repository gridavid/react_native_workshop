import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange'
      }}><Text>sfsdfds</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbc8f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius:240,
  }
});
