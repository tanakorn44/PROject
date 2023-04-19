import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import HomeScreen1 from './HomeScreen1';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen1} />
                <Tab.Screen name="Maket" component={HomeScreen1} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
