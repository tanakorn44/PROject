import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Button, Image, Pressable, Alert, ActivityIndicator, } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreatePostScreen = ({ route }) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [province, setProvince] = useState("");
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const getDate = new Date();

    const userName = "DEMO";

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.ButtonPost}
                    onPress={() => navigation.navigate("Home")}
                >
                    <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="#fff"
                        style={{ marginLeft: 20 }}
                    />
                </TouchableOpacity>
            ),
            title: "Create Post",
        });
    });

    const postID =
        getDate.getDay() +
        "" +
        getDate.getHours() +
        "" +
        getDate.getFullYear() +
        "" +
        getDate.getSeconds() +
        "" +
        userName;

    const pickImage = () => {
        // Mock image picker
        const response = { uri: "https://via.placeholder.com/150" };
        setImage(response.uri);
    };

    const onSubmitPost = () => {
        if (!image || !title || !detail || !province) {
            Alert.alert("Error", "Please fill all fields and upload an image.");
            return;
        }

        const newPost = {
            title: title,
            detail: detail,
            province: province,
            image: image,
            uid: userName,
            postID: postID,
            userName: userName,
            createdAt: new Date().toISOString(),
        };

        setPosts([...posts, newPost]);
        setTitle("");
        setDetail("");
        setProvince("");
        setImage(null);
        navigation.goBack();
    };

    return (
        <ScrollView style={{ flex: 1 }} behavior="padding">
            {uploading ? (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0782f9" />
                </View>
            ) : (
                <View style={styles.container}>
                    <Pressable style={styles.uploadView} onPress={pickImage}>
                        {image ? (
                            <Image
                                source={{ uri: image }}
                                style={{ width: "100%", height: "100%", borderRadius: 20 }}
                            />
                        ) : (
                            <Text style={styles.textColor}>Upload image here</Text>
                        )}
                    </Pressable>
                    <KeyboardAvoidingView
                        behavior="height"
                        style={{ flex: 1 }}
                        keyboardVerticalOffset={-500}
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{ flex: 1, alignItems: "center" }}
                                    behavior="height"
                                >
                                    <View style={styles.inputBox}>
                                        <Text style={[styles.textColor, styles.lebelText]}>
                                            Title
                                        </Text>
                                        <TextInput
                                            style={[styles.input, styles.textColor]}
                                            placeholder="Enter Title"
                                            placeholderTextColor="#fff"
                                            onChangeText={(text) => setTitle(text)}
                                            value={title}
                                        />
                                    </View>
                                    <View style={styles.inputBox}>
                                        <Text style={[styles.textColor, styles.lebelText]}>
                                            County / Province
                                        </Text>
                                        <TextInput
                                            style={[styles.input, styles.textColor]}
                                            placeholder="Enter County / Province"
                                            placeholderTextColor="#fff"
                                            onChangeText={(text) => setProvince(text)}
                                            value={province}
                                        />
                                    </View>
                                    <View style={styles.inputBox}>
                                        <Text style={[styles.textColor, styles.lebelText]}>
                                            Detail
                                        </Text>
                                        <TextInput
                                            style={[
                                                styles.input,
                                                styles.inputDetail,
                                                styles.textColor,
                                            ]}
                                            placeholder="Enter detail"
                                            placeholderTextColor="#fff"
                                            onChangeText={(text) => setDetail(text)}
                                            multiline={true}
                                            value={detail}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <TouchableOpacity
                                style={[styles.button, styles.buttonOutline]}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={[styles.textColor, styles.buttonText]}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.buttonSubmit, styles.button]}
                                onPress={onSubmitPost}
                            >
                                <Text style={[styles.textColor, styles.buttonText]}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            )}
        </ScrollView>
    );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF", // เปลี่ยนเป็นสีขาว
        padding: 10,
    },
    uploadView: {
        width: "100%",
        height: 250,
        backgroundColor: "#F5F5F5", // เปลี่ยนเป็นสีเทาอ่อน
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    textColor: {
        color: "#000000", // เปลี่ยนเป็นสีดำ
    },
    lebelText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    inputBox: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        borderBottomColor: "#4CAF50", // เปลี่ยนเป็นสีเขียว
        borderBottomWidth: 2,
        color: "#000000", // เปลี่ยนเป็นสีดำ
        fontSize: 16,
        paddingBottom: 5,
    },
    inputDetail: {
        borderBottomWidth: 0,
        height: 100,
        textAlignVertical: "top",
        borderColor: "#4CAF50", // เปลี่ยนเป็นสีเขียว
        borderWidth: 2,
        borderRadius: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: "#F5F5F5", // เปลี่ยนเป็นสีเทาอ่อน
        borderColor: "#4CAF50", // เปลี่ยนเป็นสีเขียว
        borderWidth: 2,
    },
    buttonSubmit: {
        backgroundColor: "#4CAF50", // เปลี่ยนเป็นสีเขียว
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF", // เปลี่ยนเป็นสีขาว
    },
    ButtonPost: {
        justifyContent: "center",
    },
});