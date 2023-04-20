import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';

// screen
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import AccountScreen from './AccountScreen';
import MaketScreen from './MaketSceen';
import DetailsScreen from './DetailsScreen';
import PartnerScreen from './PartnerScreen';
import CreactPostScreen from './AddProductScreen';
import OrdersScreen from './OrdersScreen'


const Stack = createStackNavigator();
    const Mystack = () =>{
        return(
            <Stack.Navigator >
              
                <Stack.Screen name="HomeScreen" component={MyTab} options={{ headerShown: false }}/>
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                   
                />
                
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}

                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}

                />
                <Stack.Screen
                    name="Partner"
                    component={PartnerScreen}

                />
                <Stack.Screen
                    name="Creact"
                    component={CreactPostScreen}

                />
                <Stack.Screen
                    name="Orders"
                    component={OrdersScreen}

                />

            
            </Stack.Navigator>
        );
    };
const Tab = createBottomTabNavigator();


const MyTab = ({navigation}) => {
    return (
        

            <Tab.Navigator >
               
                <Tab.Screen
                    name="market"
                    component={MaketScreen}
                        
                    options={{
                        headerShown: false,

                        tabBarIcon: ({ color, size, focused }) => (
                            <Icon
                                name={focused ? 'market' : 'md-basket'}
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
                <Tab.Screen  name="Account"component={AccountScreen} options={{  headerShown: false,
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
