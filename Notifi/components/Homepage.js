import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';

function Homepage(props) {
    const [text, setText] = useState('');

    return (
        <View>
            <Text style={styles.textStyle}>Hello there,</Text>
            <Text style={styles.textStyle}>what's your name?</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Tap to start typing"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
        </View>
    )
}

export default Homepage;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'NimbusSanL-Regu',
        fontStyle: 'normal',
        fontSize: 36,
        fontWeight: '700'
    },
  });
