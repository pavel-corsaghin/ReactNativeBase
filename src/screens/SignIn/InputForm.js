import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function InputForm() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.inputPhoneSuggestion}>Nhập số điện thoại</Text>
      <Text style={styles.text2}>
        Dùng số điện thoải để đăng nhập hoặc đăng ký tài khoản OneHousing Pro
      </Text>
      <TextInput
        placeholder="Nhập số điện thoại của bạn"
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 15,
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
