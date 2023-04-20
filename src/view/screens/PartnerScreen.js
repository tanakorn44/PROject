import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PartnerScreen = ({ navigation }) => { // ลบ navigation ออกจาก function parameter
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Partner Dashboard</Text>

  
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Creact'); // ใช้ navigateTo เพื่อไปยังหน้า 'addproduct'
                }}>
                <MaterialIcons name="add-shopping-cart" size={28} color="#FFFFFF" />
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    // โค้ดสำหรับการดูจำนวนเงินที่ขายได้
                }}>
                <MaterialIcons name="attach-money" size={28} color="#FFFFFF" />
                <Text style={styles.buttonText}>Revenue</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    // โค้ดสำหรับการดูคำสั่งซื้อ
                }}>
                <MaterialIcons name="assignment" size={28} color="#FFFFFF" />
                <Text style={styles.buttonText}>Orders</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        position: 'absolute', // ให้ปุ่ม backButton อยู่ในตำแหน่ง absolute
        top: 40, // กำหนดระยะห่างจากบน
        left: 20, // กำหนดระยะห่างจากซ้าย
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginLeft: 20,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        padding: 12,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default PartnerScreen;
