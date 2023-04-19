import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import OrdersScreen from './OrdersScreen';
import MyDetailsScreen from './MyDetailsScreen';
import DeliveryAddressScreen from './DeliveryAddressScreen';
import AboutScreen from './AboutScreen';
import Logo from '../../assets/logo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function AccountScreen() {
    const [page, setPage] = useState('Account');

    const navigateTo = (pageName) => {
        setPage(pageName);
    };

    const renderPage = () => {
        switch (page) {
            case 'Orders':
                return <OrdersScreen navigateTo={navigateTo} />;
            case 'MyDetails':
                return <MyDetailsScreen navigateTo={navigateTo} />;
            case 'DeliveryAddress':
                return <DeliveryAddressScreen navigateTo={navigateTo} />;
            case 'About':
                return <AboutScreen navigateTo={navigateTo} />;
            default:
                return (
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <MaterialIcons name="menu" size={28} color="white" />
                            <Text style={styles.headerText}>My Account</Text>
                        </View>
                        <View style={styles.userInfo}>
                            <Image source={Logo} style={styles.logo} />
                            <View style={styles.textContainer}>
                                <Text style={styles.username}>Account Name</Text>
                                <Text style={styles.email}>example@gmail.com</Text>
                            </View>
                        </View>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('Orders')}>
                                <MaterialIcons name="assignment" size={28} color="#4CAF50" />
                                <Text style={styles.optionButtonText}>Orders</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MyDetails')}>
                                <MaterialIcons name="person" size={28} color="#4CAF50" />
                                <Text style={styles.optionButtonText}>My Details</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('DeliveryAddress')}>
                                <MaterialIcons name="location-on" size={28} color="#4CAF50" />
                                <Text style={styles.optionButtonText}>Delivery Address</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('About')}>
                                <MaterialIcons name="info" size={28} color="#4CAF50" />
                                <Text style={styles.optionButtonText}>About</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.logoutButton}>
                            <Text style={styles.logoutButtonText}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                );
        }
    };

    return renderPage();
}

export default function App() {
    return (
        <AccountScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#4CAF50',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#333',
    },
    email: {
        fontSize: 18,
        color: '#666',
        marginLeft: 20,
    },
    options: {
        paddingHorizontal: 20,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    optionButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 20,
    },
    logoutButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        paddingHorizontal: 40,
        margin: 40,
        borderRadius: 50,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
