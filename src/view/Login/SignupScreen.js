import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

function SignupScreen({ navigation }) {
    const [user, setuser] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleSignup = () => {
        // Handle signup here
    };
    <PhoneInput

        defaultValue={phone}
        defaultCode="DM"
        layout="first"
        onChangeText={(text) => {
            setValue(text);
        }}
        onChangeFormattedText={(text) => {
            setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
    />
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <TextInput
                style={styles.input}
                placeholder="USER"
                value={user}
                onChangeText={(text) => setuser(text)}
                autoCapitalize="none"
                keyboardType="USER"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry

            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Signup</Text>
                
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Already have an account? Login here</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 12,
        width: '80%',
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 4,
        padding: 12,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loginLink: {
        marginTop: 16,
        color: '#0066cc',
    },
});

export default SignupScreen;
