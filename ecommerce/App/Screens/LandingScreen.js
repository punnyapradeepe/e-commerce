import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Colors from './../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

const LandingScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {


    if (!name || !userName || !email || !password || !isChecked) {
      Alert.alert('Error', 'Please fill all fields and agree to the terms.');
      return;
    }
    const payload = {
      name,    
      userName,
      email,
      password,
    };

    try {
      const response = await fetch('https://mern-e-commerce-website-gf4v.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('signin');
      } else {
        Alert.alert('Error', data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={{width:"100%" ,height:"40%",alignSelf:'center',paddingBottom:10}} source={
        require('./../../assets/Images/Left.png')
      }/>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.signInRow}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Text style={styles.linkText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxText}>
          I agree with <Text style={{ fontWeight: '700' }}>Privacy Policy</Text> and <Text style={{ fontWeight: '700' }}>Terms of Use</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
 
    paddingBottom:40
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signInRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginRight: 5,
  },
  linkText: {
    fontSize: 16,
    color: 'green',
    textDecorationLine: 'underline',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    padding: 0,
    margin: 0,
  },
  checkboxText: {
    fontSize: 12,
    marginLeft: 10,
  },
  button: {
    backgroundColor: Colors.black,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
