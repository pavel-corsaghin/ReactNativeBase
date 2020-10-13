import {postTodo, getAllTodos} from '../../api/todos';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      await postTodo(text);
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: ADD_TODO,
      text: text,
    });
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
