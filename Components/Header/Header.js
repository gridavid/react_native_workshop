import { View, Image, StyleSheet, Text , Linking, Dimensions} from "react-native";
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = () => {
    const [togleMenu, setTogleMenu] = useState(false);
    return (
        <View style={styles.header}>
            <View style={styles.main}>
                <View style={styles.logo}>
                    <Image style={{width:50, height: 50}} source={require("../../assets/logo.png")} />
                </View>
                <View style={styles.burger_menu}>
                    <Feather  onPress={() =>{
                                setTogleMenu(true)
                            }} name="menu" size={24} color="black" />
                </View>
                {togleMenu &&
                    (<View style={styles.menu_main}>
                        <View  style={styles.burger_menu}>
                        <Ionicons style={{color:"gold", zIndex:"50"}} onPress={() => {setTogleMenu(false)}} name="restaurant" size={24} color="black" backgroundColor="black" />
                        </View>
                        <View>
                            <View style={styles.ul}>
                                <View style={styles.li}>
                                    <Text style={{ color: 'blue' }}
                                        onPress={() => Linking.openURL('http://google.com')}>
                                        Home
                </Text>
                                </View>
                                <View style={styles.li}>
                                    <Text style={{ color: 'blue' }}
                                        onPress={() => Linking.openURL('http://google.com')}>
                                        Food
                </Text>
                                </View>
                                <View style={styles.li}>
                                    <Text style={{ color: 'blue' }}
                                        onPress={() => Linking.openURL('http://google.com')}>
                                        Drink
                </Text>
                                </View>
                                <View style={styles.li}>
                                    <Text style={{ color: 'blue' }}
                                        onPress={() => Linking.openURL('http://google.com')}>
                                        Recepts
                </Text>
                                </View>
                                <View style={styles.li}>
                                    <Text style={{ color: 'blue' }}
                                        onPress={() => Linking.openURL('http://google.com')}>
                                        Sign In / Register
                </Text>
                                </View>
                            </View>
                        </View>
                    </View>)}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        position: "fixed",
        top: 0,
    },
    main: {
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        color: "#000",
        flexDirection:"row",
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
        color:"black",
        
    },
    menu_main: {
        position: "fixed",
        top: 0,
        left: 0,
        width: Dimensions.get('window').width ,
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
export default Header;