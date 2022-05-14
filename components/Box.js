import React from 'react'
import {View, StyleSheet} from 'react-native'
import styled, {css} from '@emotion/native'

export default function Box() {
    return (
        <>
            <View style={style.box} />
            <Test></Test>
        </>
    )
}
const Test = styled.View`
    background-color: red;
    width: 100%;
    height: 50px;
`
const style = StyleSheet.create({
    box: {
        width: 100,
        height: 64,
        backgroundColor: 'black',
    },
})