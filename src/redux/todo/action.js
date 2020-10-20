import {
  postTodo,
  getAllTodos,
  deleteTodo as _deleteTodo,
} from '../../api/todos';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const todo = await postTodo(text);
      console.log(todo);
      dispatch({
        type: ADD_TODO,
        todo: todo,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const todos = await getAllTodos();
      dispatch({
        type: GET_TODOS,
        todos: todos,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await _deleteTodo(id);
      dispatch({
        type: DELETE_TODO,
        id: id,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
