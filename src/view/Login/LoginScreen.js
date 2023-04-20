import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Logo from '../../assets/logo.png';


function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login here
  };

  return (
    <View style={styles.container}>
          <Image source={require('../../assets/logo.png')}style={styles.Logo} /> 
      <Text style={styles.title}>Login</Text>
      
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
      <TouchableOpacity style={styles.button} onPress={(handleLogin) => navigation.navigate('Home')}>
                  <Text style={styles.buttonText}>Login</Text>
              
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupLink}>Don't have an account? Signup here</Text>
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
  signupLink: {
    marginTop: 16,
    color: '#0066cc',
  },
  Logo:{
    width: 100, 
    height: 100,
    marginBottom:100
    

  }
});

export default LoginScreen;
