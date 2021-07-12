import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Homepage(props) {

    // Backend data being sent to homepage
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.10:3000/get', {
            method:'GET'
        })
        .then(resp => resp.json())
        .then(article => {
            setBackendData(article)
        })

    }, []);

    const renderData = (item) => {;
        return (
            <View>
                <Text>{item.text1}</Text>
                <Text>{item.text2}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Hello Coffee Consumers!</Text>
            <Text>This is the app {props.name}</Text>
            <Text>Backend says '{backendData.text1} {backendData.text2}'</Text>
        </View>
    )
}


export default Homepage;
