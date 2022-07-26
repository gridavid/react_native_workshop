import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Image} from "native-base";

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

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={1}>
        {item.title}  {item.cookTime + " minutes"} {item.tags}
        <Image style={{ width : 200, height : 200}} alt="food_img" source={{uri:item.photoUrl}}/>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Box> Recieps</Box>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </Center>
    </NativeBaseProvider>
  );
}
