/* eslint-disable prettier/prettier */
import React, {useContext} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function ForgotPasswordScreen() {
    return (
        <View style={styles.container}>
            <Text>ForgotPasswordScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

