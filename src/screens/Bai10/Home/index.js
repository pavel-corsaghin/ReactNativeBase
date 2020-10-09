import React, {useCallback, useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../../../redux/todo/action';
import Button from '../../../components/Button';
import TodoItem from './TodoItem';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const onAddButtonPress = useCallback(() => {
    navigation.navigate('AddTodo');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({item}) => <TodoItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Add"
        titleColor="white"
        backgroundColor="blue"
        onPress={onAddButtonPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
});
