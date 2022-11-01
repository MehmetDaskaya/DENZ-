import {KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState }  from 'react';
import { auth } from '../../store/firebase.js';

import styles from './AuthenticationStyles.js';
import Logo from '../../components/Logo.js';

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User created successfully', user);
    })
    .catch(error => Alert.alert(error.message));

  };

  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{alignSelf:"center"}}>
        <Logo/>
      </View>


      <View>
        <Text style={styles.title}>Üyelik Oluştur</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder="E-posta Adresinizi Giriniz"
        keyboardType='email-address'
        value={email}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        style={styles.textInput}
        placeholder="Şifrenizi Giriniz"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text>Şifrenizi mi unuttunuz?</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.button}
        onPress={handleSignUp}
        >
          <Text style={styles.text}>Üye Ol</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,styles.buttonSecondary]}
        onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text style={styles.text}>Hesabınız var mı?</Text>
          <Text style={styles.textSecondary}>Giriş Yapın.</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default SignUpScreen;
