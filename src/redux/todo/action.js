import requestApi from '../../api';
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
      await _addTodo(text);
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
      const todos = await _getTodos();
      dispatch({
        type: GET_TODOS,
        todos: todos,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const _addTodo = async (text) => {
  const response = await requestApi('POST', '/todos', {
    text: text,
    completed: false,
  });
  const responseOK = response && response.status === 201;
  if (responseOK) {
    return true;
  } else {
    throw Error('Some error occured when add todo');
  }
};

const _getTodos = async () => {
  const response = await requestApi('GET', '/todos');
  const responseOK = response && response.status === 200;
  if (responseOK) {
    return response.data;
  } else {
    throw Error('Some error occured when add todo');
  }
};
