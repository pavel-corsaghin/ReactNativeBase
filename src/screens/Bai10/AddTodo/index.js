import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../../redux/todo/action';
import Button from '../../../components/Button';

export default function AddTodoScreen({navigation}) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onSavePress = useCallback(() => {
    dispatch(addTodo(text));
    navigation.pop();
  }, [dispatch, navigation, text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        placeholder="Nhập nội dung Todo"
      />
      <Button
        title="Save"
        titleColor="white"
        backgroundColor="blue"
        onPress={onSavePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    height: 40,
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 20,
    padding: 4,
  },
});
