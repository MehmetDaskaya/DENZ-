import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './NavbarContainerStyles';
import ReturnButton from './ReturnButton';

const NavbarContainer = ({title}) => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
              <View style = {styles.navigationContainer}>
          <View style = {styles.buttonContainer}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}>
            
              <ReturnButton name={"arrowleft"}/>

            </TouchableOpacity>
          </View>

          <View style = {styles.textContainer}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
    </View>
  )
}

export default NavbarContainer;
