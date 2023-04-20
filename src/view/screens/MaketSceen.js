import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TextInput, Image, Dimensions, TouchableOpacity, ScrollView, Button, } from 'react-native';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';
import AppNavigator from './Routes.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width / 2 - 30;
const MaketScreen = ({navigation}) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <Icon name="search-outline" size={20} color="#333" />
                    <Text style={styles.searchText}>Search in Shop</Text>
                </View>
                <TouchableOpacity style={styles.cartButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Cart')}>
                    <Icon name="cart-outline" size={24} color="#fff" />
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.content}>
                <View>
                <View style={styles.headerlogo}>
                    
                        <Image source={require('../../assets/logo.png')} style={{ width: 100, height: 100 }} />

                    </View>

                    <Text style={styles.shopTitle}>SHOP</Text>  
                </View>
                {/* <View style={styles.shopInfo}>
                    <Image style={styles.shopAvatar} source={require('../../assets/logo.png')} />
                    <View style={styles.shopName}>
                        <Text style={styles.shopTitle}>My Shop</Text>
                        <View style={styles.shopRating}>
                            <Icon name="star-outline" size={16} color="#FFD700" />
                            <Icon name="star-outline" size={16} color="#FFD700" />
                            <Icon name="star-outline" size={16} color="#FFD700" />
                            <Icon name="star-outline" size={16} color="#FFD700" />
                            <Icon name="star-outline" size={16} color="#FFD700" />
                            <Text style={styles.shopRatingText}>(4.0)</Text>
                        </View>
                    </View>
                </View> */}
                <View style={styles.products}>
               
                    <View style={styles.product}>
                        <Image style={styles.productImage} source={require('../../assets/logo.png')} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productTitle}>กล้วย Shpe</Text>
                            <TouchableOpacity style={styles.cartButton}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('Home')}>
                                
                            </TouchableOpacity>
                            <Text style={styles.productPrice}>กล้วยๆ</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <Image style={styles.productImage} source={require('../../assets/logo.png')} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productTitle}>กล้วย Shpe</Text>
                            <Text style={styles.productPrice}>กล้วยๆ</Text>
                        </View>
                    </View>
                    <View style={styles.product}>
                        <Image style={styles.productImage} source={require('../../assets/logo.png')} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productTitle}>กล้วย Shpe</Text>
                            <Text style={styles.productPrice}>กล้วยๆ</Text>

                        </View>

                    </View>
                </View>
            </ScrollView>

        </View>

    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerlogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 3,


    },
    header: {
        height: 60,
        backgroundColor: '#00994C',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    backButton: {
        padding: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginLeft: 10,
    },
    searchText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    cartButton: {
        padding: 10,
    },
    content: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 10,
    },
    shopInfo: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
    },
    shopAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    shopName: {
        flex: 1,
    },
    shopTitle: {
        
        fontSize: 18,
        fontWeight: 'bold',
    },
    shopRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    shopRatingText: {
        fontSize: 14,
        marginLeft: 5,
        color: '#999',
    },
    products: {
        backgroundColor: '#fff',
        padding: 10,
    },
    product: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productTitle: {
        
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#ee4d2d',
    },
    navigator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
});



export default MaketScreen;



