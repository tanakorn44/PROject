import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// screen
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import AccountScreen from './AccountScreen';
import MaketScreen from './MaketSceen';
import DetailsScreen from './DetailsScreen';



const Stack = createStackNavigator();
    const Mystack = () =>{
        return(
            <Stack.Navigator >
              
                <Stack.Screen name="HomeScreen" component={MyTab} options={{ headerShown: false }}/>
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                   
                />
            </Stack.Navigator>
        );
    };
const Tab = createBottomTabNavigator();


const MyTab = ({navigation}) => {
    return (
        

            <Tab.Navigator >
                <Tab.Screen
                    name="home"
                    component={HomeScreen} // ให้ใช้ 'Screen' component แทนที่ 'Icon' component  
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <Icon
                                name={focused ? 'home' : 'home-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="market"
                    component={MaketScreen}
                        
                    options={{
                        headerShown: false,

                        tabBarIcon: ({ color, size, focused }) => (
                            <Icon
                                name={focused ? 'market' : 'ios-golf'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <Icon
                                name={focused ? 'Cart' : 'ios-cart'}
                                size={size}
                                color={color}
                            />

                        ),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => (
                            <Icon
                                name={focused ? 'Account' : 'ios-person'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />

          

            </Tab.Navigator>
      
    );
}

const Navigator = () => {

    return (
        <NavigationContainer>
            <Mystack />
        </NavigationContainer>
    );
};
export default Navigator;
