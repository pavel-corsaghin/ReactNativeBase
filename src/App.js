import 'react-native-gesture-handler';
import React from 'react';
import SignInScreen from './screens/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationScreen from './screens/Notification';
import BackgroundChangeScreen from './screens/BackgroundChange';
import CounterScreen from './screens/Counter';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Đăng nhập" component={SignInScreen} />
        <Stack.Screen name="Đổi màu nền" component={BackgroundChangeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
