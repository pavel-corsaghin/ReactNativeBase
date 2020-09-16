import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import InputForm from './InputForm';
import Button from '../../components/Button';

export default function SignInScreen() {
  const onPress = () => {
    console.log('onPress => Giao dien dau ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Đăng nhập</Text>
        <View style={styles.divider} />
        <InputForm />
        <Button onPress={onPress} title="Tiếp tục" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: 'white',
    margin: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  inputPhoneSuggestion: {
    fontSize: 24,
    marginTop: 50,
  },
  text2: {
    fontSize: 20,
    marginTop: 20,
  },
  textInput: {
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 18,
  },
});
