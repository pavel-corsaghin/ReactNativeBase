/* eslint-disable prettier/prettier */
import React, {useContext} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {AuthContext} from '../../../contexts';

export default function SignInScreen() {
    const {setIsLoggedIn} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={() => setIsLoggedIn(true)} />
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

