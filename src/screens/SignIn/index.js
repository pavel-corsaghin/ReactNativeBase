import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Alert} from 'react-native';
import InputForm from './InputForm';
import Button from '../../components/Button';
import {isPhoneValid, formatVietnamesePhone} from '../../utils/utils';

export default function SignInScreen() {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(isPhoneValid(phone));
  }, [phone]);

  const onPress = () => {
    const message = isPhoneValid(phone)
      ? 'Số điện thoại đúng định dạng'
      : 'Số điện thoại không đúng định dạng. Vui lòng nhập lại';
    Alert.alert('', message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Đăng nhập</Text>
        <View style={styles.divider} />
        <InputForm
          phone={phone}
          onChangeText={(text) => setPhone(formatVietnamesePhone(text))}
        />
        {!isValid ? (
          <Text style={styles.inlineMessage}>Số điện thoại không đúng</Text>
        ) : null}
        <View style={styles.fakeView} />
        <Button
          onPress={onPress}
          title="Tiếp tục"
          titleColor="white"
          backgroundColor="blue"
        />
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
  inlineMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
    marginHorizontal: 16,
  },
  fakeView: {
    flex: 1,
  },
});
