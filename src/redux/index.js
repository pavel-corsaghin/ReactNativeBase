import {combineReducers} from 'redux';
import todos from './todo/reducer';
import {createStore} from 'redux';

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export default store;
