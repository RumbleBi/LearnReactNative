import React from 'react'
import {View, Text} from 'react-native';

Greeting.defaultProps = {
    name: '값이없어용',
}

export default function Greeting(props) {
    return (
        <View>
            <Text>안녕하세요 {props.name}</Text>
        </View>
    )
}