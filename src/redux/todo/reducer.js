import {GET_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './action';
import {REHYDRATE} from 'redux-persist';

const initialState = {
  todos: [],
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
        todos: [...state.todos, action.todo],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
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
