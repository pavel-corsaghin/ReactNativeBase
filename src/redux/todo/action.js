export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text, a,b,c) => ({
  type: ADD_TODO,
  payload: {text: text, a: a, b: b, c: c},
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
