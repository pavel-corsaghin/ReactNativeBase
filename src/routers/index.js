import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/Bai10/Splash';
import {useDispatch, useSelector} from 'react-redux';
import {restoreAuthState} from '../redux/auth/action';
import authStack from './AuthStack';
import mainStack from './MainStack';

export default function RootRouter() {
  const dispatch = useDispatch();
  const {restoring, isLoggedIn} = useSelector((store) => ({
    restoring: store.auth.restoring,
    isLoggedIn: store.auth.isLoggedIn,
  }));

  useEffect(() => {
    dispatch(restoreAuthState());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {restoring ? <SplashScreen /> : !isLoggedIn ? authStack() : mainStack()}
    </NavigationContainer>
  );
}
