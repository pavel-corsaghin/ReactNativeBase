import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../../../redux/auth/action';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={() => dispatch(setLoggedIn(false))} />
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
