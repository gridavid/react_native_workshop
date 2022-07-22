import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native"

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Food'); }}>
                <Text style={styles.btntxt}> Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Drink'); }}>
                <Text style={styles.btntxt}> Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Receipts'); }}>
                <Text style={styles.btntxt}> Receipts</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
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
        backgroundColor: '#f4511e',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        
    },
    btntxt: {
        color: '#ffffff',
        fontSize:20,
    }
})