import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export default function DateHead({date}){
    const {top} = useSafeAreaInsets()
    console.log(top)
    return (
        <>
            <View style={[styles.statusBarPlaceholder, {height: top}]} />
            <StatusBar barStyle='dark-content'/>
            <View style={styles.wrapper}>
                <Text style={styles.dateText}>{date.getFullYear()}.{date.getMonth()+1}.{date.getDate()}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    statusBarPlaceholder: {
        backgroundColor: '#c5a600'
    },
    wrapper: {
        padding: 20,
        backgroundColor: '#ffff6b',
    },
    dateText: {
        fontSize: 24,
    },
})