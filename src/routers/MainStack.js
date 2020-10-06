import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfileScreen from '../screens/Bai10/EditProfile';
import FoodDetailScreen from '../screens/Bai10/FoodDetail';
import AddTodoScreen from '../screens/Bai10/AddTodo';

import mainTab from './MainTab';

// Create MainStack
const MainStack = createStackNavigator();
const mainStack = () => (
  <MainStack.Navigator initialRouteName="MainTab">
    <MainStack.Screen name="MainTab" component={mainTab} />
    <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
    <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
    <MainStack.Screen
      name="AddTodo"
      component={AddTodoScreen}
      options={{
        title: 'Thêm Todo',
      }}
    />
  </MainStack.Navigator>
);

export default mainStack;
