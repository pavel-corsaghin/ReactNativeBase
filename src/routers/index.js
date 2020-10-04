import React, {useContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from '../screens/Bai10/SignIn';
import SignUpScreen from '../screens/Bai10/SignUp';
import ForgotPasswordScreen from '../screens/Bai10/ForgotPassword';
import HomeScreen from '../screens/Bai10/Home';
import ProfileScreen from '../screens/Bai10/Profile';
import EditProfileScreen from '../screens/Bai10/EditProfile';
import FoodDetailScreen from '../screens/Bai10/FoodDetail';
import SplashScreen from '../screens/Bai10/Splash';
import {AuthContext} from '../contexts';

// Create AuthStack
const AuthStack = createStackNavigator();
const authStack = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

// Create MainTab
const MainTab = createBottomTabNavigator();
const mainTab = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

// Create MainStack
const MainStack = createStackNavigator();
const mainStack = () => (
  <MainStack.Navigator initialRouteName="MainTab">
    <MainStack.Screen name="MainTab" component={mainTab} />
    <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
    <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
  </MainStack.Navigator>
);

const LOGIN_KEY = 'USER_LOGIN_KEY';

export default function RootRouter() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const [restoring, setIsRestoring] = useState(true);

  const restoreLoggedInStatus = useCallback(async () => {
    try {
      const loggedInState = await AsyncStorage.getItem(LOGIN_KEY);
      setIsLoggedIn(loggedInState ? JSON.parse(loggedInState) : false);
      setTimeout(() => {
        setIsRestoring(false);
      }, 1000);
    } catch (e) {
      setIsRestoring(false);
      return false;
    }
  }, [setIsLoggedIn]);

  const cacheLoggedInStatus = useCallback(async (loggedInState) => {
    try {
      await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(loggedInState));
    } catch (e) {
      return false;
    }
  }, []);

  useEffect(() => {
    restoreLoggedInStatus();
  }, [restoreLoggedInStatus]);

  useEffect(() => {
    cacheLoggedInStatus(isLoggedIn);
  }, [cacheLoggedInStatus, isLoggedIn]);

  return (
    <NavigationContainer>
      {restoring ? <SplashScreen /> : !isLoggedIn ? authStack() : mainStack()}
    </NavigationContainer>
  );
}
