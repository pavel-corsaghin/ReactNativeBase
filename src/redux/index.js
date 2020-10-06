import todos from './todo/reducer';
import auth from './auth/reducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  todos,
  auth,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
