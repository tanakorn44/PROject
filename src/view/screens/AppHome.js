import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/view/screens/HomeScreen';
import DetailsScreen from './src/view/screens/DetailsScreen';
import { StatusBar } from 'react-native';
import COLORS from './src/consts/colors';

const Stack = createStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                
            </Stack.Navigator >
        </NavigationContainer>
    );
};

export default AppHome;