// import React, { useState, useEffect } from "react";
// import { Box, FlatList, Center, NativeBaseProvider, Image} from "native-base";

// export default function Reciepts() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     const resp = await fetch("https://api.sampleapis.com/recipes/recipes");
//     const data = await resp.json();
//     setData(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const renderItem = ({ item }) => {
//     return (
//       <Box px={5} py={2} rounded="md" bg="primary.300" my={1}>
//         {item.title}  {item.cookTime + " minutes"} {item.tags}
//         <Image style={{ width : 200, height : 200}} alt="food_img" source={{uri:item.photoUrl}}/>
//       </Box>
//     );
//   };

//   return (
//     <NativeBaseProvider>
//       <Center flex={1}>
//       <Box> Recieps</Box>
//         {loading && <Box>Loading..</Box>}
//         {data && (
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         )}
//       </Center>
//     </NativeBaseProvider>
//   );
// }
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView, Dimensions } from 'react-native';

export default function Reciepts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://api.sampleapis.com/recipes/recipes");
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

   
if(loading) {
  return <Text>Loading</Text>
}
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', flexDirection: 'row',flexWrap: "wrap", backgroundColor: 'black' }}>
                {
                    data.map((item, index) => {
                        return (<View key={index} style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} alt="food_img" source={{ uri: item.photoUrl }} />
                        </View>)
                    })
                }
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width / 2-30,
        height: Dimensions.get('window').width / 2-30,
        marginVertical: 12,
        alignSelf: 'center',
        borderColor: '#f7eb45',
        borderWidth: 5,
    },
    card: {
        borderRadius: 20,

        width: Dimensions.get('window').width / 2 - 30,
        height: 300,
        marginHorizontal:15,

    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',

        color: "white"
    }
})
