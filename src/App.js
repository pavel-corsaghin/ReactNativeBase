import 'react-native-gesture-handler';
import React, {useState} from 'react';
import RootRouter from './routers';
import {AuthContext} from './contexts';
import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <RootRouter />
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
