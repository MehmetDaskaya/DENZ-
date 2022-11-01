import {KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect }  from 'react';
import { auth } from '../../store/firebase.js';
import { useDispatch } from 'react-redux';

import styles from './AuthenticationStyles.js';
import { setSignedIn } from '../../store/slices/navSlice.js';
import Logo from '../../components/Logo.js';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.navigate('Stack');
      }
    })

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      dispatch(setSignedIn(true));
    })
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
        <Text style={styles.title}>Giriş Yap</Text>
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
          <Text>Şifrenizi mi Unuttunuz?</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.button}
        onPress={handleSignIn}
        >
          <Text style={styles.text}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button,styles.buttonSecondary]}
        onPress={() => navigation.navigate('SignUpScreen')}
        
        >
          <Text style={styles.text}>Hesabınız Yok mu?</Text>
          <Text style={styles.textSecondary}>Oluşturun</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default SignInScreen;

