import 'react-native-gesture-handler';
import React from 'react';
import RootRouter from './routers';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import redux from './redux';
import ToastExample from './ToastExample';

const App = () => {
  console.log(ToastExample);
  ToastExample.show('Awesome', ToastExample.SHORT);
  return (
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
