import React, {useCallback} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../../redux/todo/action';
import Button from '../../../components/Button';
import TodoItem from './TodoItem';

export default function HomeScreen() {
  const dispatch = useDispatch();
//   const todos = useSelector((store) => store.todos.todos);
//   const a = useSelector((store) => store.todos.otherState);
  const {todos, otherState} = useSelector((store) => ({
    todos: store.todos.todos,
    otherState: store.todos.otherState,
  }));

  console.log(otherState);
  const _addTodo = useCallback(() => {
    dispatch(addTodo('aaaaa-bbb'));
  }, [dispatch]);
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
        onPress={_addTodo}
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
