//sampleapis.com
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Image,
  Dimensions
} from "react-native";



export default function Food() {

  return (
    <>
      <View style={styles.headerbar} >
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.card}>
            {/* <Image source={require('../../assets/food.jpg')} style={{ width: 200, height: 200 }}/> */}
          </View>
          <View style={styles.card}></View>
        </View>


      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerbar: {
    flex: 0.15,
    backgroundColor: 'red'
  },
  container: {
    flex: 0.85,
    paddingTop: 10,
    backgroundColor: 'black',
    padding: 8,
    alignItems: 'center',
  },
  row: {
    padding: 10,
    height: 250,
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: "row",
  },
  card: {
    padding: 10,
    height: 230,
    width: 150,
    backgroundColor: 'red',
    margin:10,
    marginTop:0,
  },
  prodName: {

  },
  prodWeight: {

  },
  prodPrice: {

  },
  buyBtn: {

  }
})



