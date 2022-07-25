import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Api from "../Api/Api"
import React, { useState, useEffect } from 'react';


export default function Food() {
    const [posts, setPosts] = useState([])
    async function getPosts() {
        const { data } = await Api('https://jsonplaceholder.typicode.com/posts?_limit=10')
        setPosts(data)
    }
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {
                posts.map((post, index) => {
                    return (
                        <View key={post.id}>
                            <Text>{post.title}</Text>
                        </View>
                    );
                })
            }
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
