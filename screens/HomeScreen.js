import React from 'react'
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../store/slices/navSlice';

import NavFavourites from '../components/NavFavourites';
import Logo from '../components/Logo';



const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      <Logo/>
      
      <GooglePlacesAutocomplete
        styles={{
          container:{
            flex:0,
          },
          textInput:{
            fontSize:18,
          },
        }}
        placeholder="Where to?"
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
      <NavFavourites/>
      <Pressable onPress={() => navigation.navigate('Account')}>
        <Text>Press</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
})