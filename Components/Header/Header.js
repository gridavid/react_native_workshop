import { View, Image, StyleSheet, Text, Linking, Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Touchable } from "react-native";

export default function Header() {
    //navigation.navigate.push([[{FunctionLocation:"useNavigationCache.tsx:126"}]]);
    return (
        <View style={styles.header}>
            <View style={styles.main}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }} >
                <View style={styles.logo}>
                    <Image style={{ width: 50, height: 50 }} source={require("../../assets/logo.png")} />
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        // position: "fixed",
        top: 0,
    },
    main: {
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        color: "#000",
        flexDirection: "row",
    },
    logo: {
        padding: 5,
        width: 55, position: "sticky",
        height: 55,
    },
    burger_menu: {
        width: 70,
        height: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",

    },
    menu_main: {
        position: "fixed",
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "black",
        /* display: flex; */
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 5,
    },
    li: {
        fontSize: 40,
        textAlign: "center",
    }
});
