import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

import { auth } from '../store/firebase.js';

const AccountScreen = ({navigation}) => {

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
      navigation.navigate('SignInScreen');
    })
    .catch(error => {Alert.alert(error.message)});
  }

  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
        <Text>Email: {auth.currentUser?.email}</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.text}>Çıkış</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderRadius: 10,
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});