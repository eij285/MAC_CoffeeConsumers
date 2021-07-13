import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Homepage(props) {

    // Backend data being sent to homepage
    const [data, setData] = useState([]);

    // Change to local ip
    useEffect(() => {
        fetch('http://192.168.0.10:3000/get', {
            method:'GET'
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setData(data)
        })

    }, []);

    return (
        <View>
            <Text>Hello Coffee Consumers!</Text>
            <Text>This is the app {props.name}</Text>
            <Text>Backend says '{data.text1} {data.text2}'</Text>
        </View>
    )
}


export default Homepage;
