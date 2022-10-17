import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../store/slices/navSlice';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text} >Good Morning, Mehmet</Text>
      <View style={styles.bottomArea}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where from?'
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
              navigation.navigate('RideOptionsCard')
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white",
  },
  text:{
    alignSelf: "center",
    fontSize: 20,
    marginVertical: 5,
  },
})

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    paddingTop: 20,
    flex:0,
  },
  textInput:{
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer:{
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})