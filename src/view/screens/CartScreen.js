import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const CartScreen = () => {
    const [cartItems, setCartItems] = useState([
        { id: '1', name: 'Product 1', price: 99.99, quantity: 2, image: 'https://www.foodnetworksolution.com/uploaded/_142.jpg' },
        { id: '2', name: 'Product 2', price: 49.99, quantity: 1, image: 'https://img.salehere.co.th/p/1200x0/2021/06/02/zh7ubl50uhti.jpg' },
        { id: '3', name: 'Product 3', price: 19.99, quantity: 3, image: 'https://www.thaihealth.or.th/data/content/26736/cms/e_adfjlnopqrz1.jpg' },
    ]);
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>฿{item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.itemQuantity}> {item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                    <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.itemsContainer}
                ListEmptyComponent={<Text style={styles.emptyCart}>Your cart is empty</Text>}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total:฿ {totalPrice.toFixed(2)}</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    itemDetails: {
        flex: 1,
        marginRight: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    quantityButton: {
        backgroundColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: '#777',
        marginBottom: 5,
    },
    itemQuantity: {
        fontSize: 16,
    },
    emptyCart: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#eee',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginLeft: 10,
    },
    checkoutButtonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default CartScreen;