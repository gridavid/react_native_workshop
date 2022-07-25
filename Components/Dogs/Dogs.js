import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Api from "../Api/Api"
import { useState, useEffect } from 'react';


export default function Food() {
    const [posts, setPosts] = useState([])
    async function getPosts() {
        const { data } = await Api('https://dog.ceo/api/breed/hound/images')
        setPosts(data.message)
    }
    useEffect(() => {
        getPosts()
    }, [])
    console.log(posts[0]);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {
            posts.map((post, index) => {
                return (
                    <View key={index}>
                        <Image alt="image" style={{width: 200, height: 200}} source={{uri: post}}></Image>
                    </View>
                );
            })
            }
            {/* <Image alt="image" style={{width: 200, height: 200}} source={{uri: posts[0]}}></Image> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
