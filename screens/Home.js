import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../store/slices/navSlice';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../components/Logo';


const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.topNav}>
        <Logo/>
        <Ionicons name="ios-menu" size={32} color="black" style={styles.menuIcon} onPress={() => navigation.navigate('Account')}/>
      </View>  

      <View style={styles.upperContainer}>
        <View>
          <Image style={[styles.image, styles.shadowProp]} source={{uri: "https://raw.githubusercontent.com/Nerimb/DENZ-/main/utils/images/BOATIMG.png",}}/>
        </View>
        
      </View>

      <View style={styles.bottomContainer}>

        <Text style={styles.text}>
          Kalkış Konumunuzu Girin
        </Text>

        <GooglePlacesAutocomplete
          styles={{
            container:{
              flex:0,
              paddingHorizontal: 10,
            },
            textInput:{
              fontSize:18,
              borderRadius: 16,
            },
          }}
          placeholder="Nereden?"
          nearbyPlacesAPI='GooglePlacesSearch'
          
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          query={{key:GOOGLE_MAPS_APIKEY,
          language:'en'}}
        />

        <NavOptions/>
      </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  topNav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  upperContainer:{
    flex:0.9,
    marginBottom: -40,
  },
  bottomContainer:{
    flex:0.5,
    marginBottom: 80,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  image:{
  height:220,
  resizeMode:"contain",
  borderRadius: 16,
  },
  shadowProp: {
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'white' 
  },
})