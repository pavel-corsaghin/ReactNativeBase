import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Bai10/Home';
import ProfileScreen from '../screens/Bai10/Profile';

// Create MainTab
const MainTab = createBottomTabNavigator();
const mainTab = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);

export default mainTab;
