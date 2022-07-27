import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Dimensions } from 'react-native';

export default function Wines() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/wines/reds");
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <ScrollView>
            <View style={{ alignItems: 'center', flexDirection: 'row', flexWrap: "wrap", backgroundColor: 'black' }}>
                {
                    data.map((item, index) => {
                        return (<View key={index} style={styles.card}>
                            <Text style={styles.title}>{item.wine}</Text>
                            <Image style={styles.image} alt="food_img" source={{ uri: item.image }} />
                        </View>)
                    })
                }
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width / 2 - 30,
        height: Dimensions.get('window').width / 2 - 30,
        marginVertical: 12,
        alignSelf: 'center',
        borderColor: '#f7eb45',
        borderWidth: 5,
    },
    card: {
        borderRadius: 20,

        width: Dimensions.get('window').width / 2 - 30,
        height: 300,
        marginHorizontal: 15,

    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',

        color: "white"
    }
})
