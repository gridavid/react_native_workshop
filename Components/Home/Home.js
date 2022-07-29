import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import React from "react"
import restaurant1 from '../../assets/restaurant1.jpg'
import restaurant2 from '../../assets/restaurant2.jpg'
import restaurant3 from '../../assets/restaurant3.jpg'


export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text
          style={{
            color: "goldenrod",
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 14,
          }}
        >
          THE KEY TO FINE DINING
        </Text>
        <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </Text>
      </View>
      <View>
        <Text
          style={{
            width: 400,
            color: "goldenrod",
            fontSize: 30,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginLeft: "60%",
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          About Us
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginBottom: 20,
          }}
        >
          Since our modest beginnings in 2005 with a little space in Yerevan,
          ‘Organization Name’ ‘s development has been enlivened with the energy
          to cook and serve solid, Indian-roused takeout food..
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "goldenrod",
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Gallery
        </Text>
      </View>
      <View>
        <Carousel
          width={400}
          height={400}
          autoPlay={true}
          data={[restaurant1, restaurant2, restaurant3]}
          renderItem={({ item }) => <Image style={{ width: Dimensions.get('window').width, height: 400}} source={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black",
  },
  button: {
    height: 0.1 * Dimensions.get("window").height,
    width: 0.75 * Dimensions.get("window").width,
    backgroundColor: "#f4511e",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  btntxt: {
    color: "#ffffff",
    fontSize: 20,
  },
  slider: {
    maxHeight: 600,
    maxWidth: 600
  },
});

