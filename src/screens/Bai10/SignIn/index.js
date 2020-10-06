import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../../../redux/auth/action';

export default function SignInScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={() => dispatch(setLoggedIn(true))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
