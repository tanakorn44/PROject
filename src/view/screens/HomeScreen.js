import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const width = Dimensions.get('window').width / 2 - 30;
const HomeScreen = ({ navigation }) => {


    const [catergoryIndex, setCategoryIndex] = React.useState(0);
 
    const Tab = createBottomTabNavigator();


  

    const Card = ({ plant }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', plant)}>
                <View style={style.card}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>

                        </View>
                    </View>

                    <View
                        style={{
                            height: 100,
                            alignItems: 'center',
                        }}>
                        <Image
                            source={plant.img}
                            style={{ flex: 1, resizeMode: 'contain' }}
                        />
                    </View>

                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
                        {plant.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                            ${plant.price}
                        </Text>
                        <View
                            style={{
                                height: 25,
                                width: 25,
                                backgroundColor: COLORS.green,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };



    return (
        <SafeAreaView
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
            <View style={style.header}>
                <View >
                    <Image source={require('../../assets/logo.png')} style={{ width: 100, height: 100 }} />

                </View>
      

            </View>
            
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={plants}
                renderItem={({ item }) => {
                    return <Card plant={item} />;
                }}
            />
        
        </SafeAreaView>
    );
};



const style = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green,
    },
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 3,


    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: COLORS.dark,
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {

    },
});
export default HomeScreen;