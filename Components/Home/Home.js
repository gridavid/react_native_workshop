import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native"

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Food'); }}>
                <Text> Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Drink'); }}>
                <Text> Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Receipts'); }}>
                <Text> Receipts</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ffffff',
        padding: 8,
        alignItems: 'center',
    },
    button: {
        height: 0.1 * Dimensions.get('window').height,
        width: 0.75 * Dimensions.get('window').width,
        backgroundColor: '#70C19A',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
})