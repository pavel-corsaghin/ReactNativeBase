import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  AppState,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import InputForm from './InputForm';
import Button from '../../components/Button';
import {
  isPhoneValid,
  formatVietnamesePhone,
  removeSpaces,
} from '../../utils/utils';

export default function SignInScreen({navigation}) {
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const [appStateVisible, setAppStateVisible] = useState(AppState.currentState);
  console.log('AppState', appStateVisible);

  useEffect(() => {
    AppState.addEventListener('change', setAppStateVisible);

    return () => {
      AppState.removeEventListener('change', setAppStateVisible);
    };
  }, [phone]);

  // useEffect(() => {
  //   Alert.alert(
  //     'Welcome',
  //     'Chào mừng đến với khoá học lập trình React Native tại CodeFresher.vn',
  //   );
  // }, []);

  useEffect(() => {
    setIsValid(isPhoneValid(phone));
  }, [phone]);

  const onPress = useCallback(() => {
    if (!isPhoneValid(phone)) {
      Alert.alert('', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại');
      return;
    }

    if (removeSpaces(phone) !== '0981328194') {
      Alert.alert('', 'Số điện thoại không tồn tại trên hệ thống');
      return;
    }

    navigation.navigate('Đổi màu nền');
  }, [navigation, phone]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <InputForm
          phone={phone}
          onChangeText={(text) => setPhone(formatVietnamesePhone(text))}
        />
        {!isValid ? (
          <Text style={styles.inlineMessage}>Số điện thoại không đúng</Text>
        ) : null}
        <View style={styles.fakeView} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.buttonContainer}>
          <Button
            onPress={onPress}
            title="Tiếp tục"
            titleColor="white"
            backgroundColor="blue"
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  buttonContainer: {
    flex: 1,
  },
});
