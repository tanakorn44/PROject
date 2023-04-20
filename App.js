import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Navigator from './src/view/screens/Routes';
import { View } from 'react-native';
import LoginScreen from './src/view/Login/LoginScreen';
import AccountScreen from './src/view/screens/AccountScreen'



const App = () => {
  return (
    

    <Navigator >
      <AccountScreen />
    </Navigator> 
      
  
   

  );
}


export default  App;
