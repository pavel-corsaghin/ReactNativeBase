import todos from './todo/reducer';
import auth from './auth/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  todos,
  auth,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export default {store, persistor};
