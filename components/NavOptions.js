import {Image, Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../store/slices/navSlice';

const data =  [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
]

const NavOptions = () => {

  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();
  

  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity
        //  disabled={!origin}   
         style={styles.box}
         onPress={() => {origin ? navigation.navigate(item.screen): Alert.alert(
            "Location must be selected",
            "Please select a location before proceeding.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        
        }}
         >
                <View>
                    <Image style={styles.image} source={{uri: item.image,}}/>
                </View>
            <Text style={styles.text}>{item.title}</Text>
            <AntDesign name="arrowright" size={20} color="white" style={styles.icon} /> 
            
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions;

const styles = StyleSheet.create({
    box:{
        backgroundColor: "grey",
        paddingHorizontal: 10,
        height:"70%",
    },
    image:{
        width:120,
        height:120,
        resizeMode:"contain",
        
    },
    text:{
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
    },
    icon:{
        backgroundColor: "black",
        padding: 10,
        marginTop:16,
        borderRadius: 50,
        alignSelf: "center",
    },
})
