import 'react-native-gesture-handler';
import React from 'react';
import RootRouter from './routers';
import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
};

export default App;
