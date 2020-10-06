import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/Bai10/SignIn';
import SignUpScreen from '../screens/Bai10/SignUp';
import ForgotPasswordScreen from '../screens/Bai10/ForgotPassword';

// Create AuthStack
const AuthStack = createStackNavigator();
const authStack = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
  </AuthStack.Navigator>
);

export default authStack;
