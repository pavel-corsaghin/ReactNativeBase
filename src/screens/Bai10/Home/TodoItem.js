import React, {useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../redux/todo/action';

export default function TodoItem({item}) {
  const dispatch = useDispatch();
  const onPress = useCallback(() => {
    dispatch(deleteTodo(item.id));
  }, [dispatch, item.id]);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{item.text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Xóa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: 8,
    padding: 4,
  },
  textStyle: {
    flex: 1,
  },
});
