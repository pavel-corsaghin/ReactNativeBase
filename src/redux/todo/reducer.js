import {ADD_TODO, TOGGLE_TODO} from './action';
const initialState = {
  todos: [],
  otherState: 1,
};

const getItemId = (todos) => {
  if (todos.length === 0) {
    return 1;
  }
  return todos[todos.length - 1].id + 1;
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
        ),
      };
    default:
      return state;
  }
};

export default todos;
