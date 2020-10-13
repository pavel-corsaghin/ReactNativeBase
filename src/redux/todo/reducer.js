import {GET_TODOS, ADD_TODO, TOGGLE_TODO} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
  todos: [],
};

const getItemId = (todos) => {
  if (todos.length === 0) {
    return 1;
  }
  return todos[todos.length - 1].id + 1;
};

const todos = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case REHYDRATE: {
      if (!action.payload || !action.payload.todos) {
        return state;
      }
      return action.payload.todos;
    }
    case GET_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: getItemId(state.todos),
            text: action.text,
            completed: false,
          },
        ],
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
