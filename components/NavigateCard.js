import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../store/slices/navSlice';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import NavFavourites from './NavFavourites';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text} >Good Morning, Mehmet</Text>
      <View>

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

      <View style={styles.selectionContainer}>
        <TouchableOpacity
          style={styles.selectionBox}
          onPress={() => navigation.navigate('RideOptionsCard')}
          >
            <FontAwesome name="car" size={16} color="white" />
            <Text style={styles.icon}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.selectionBox}>
            <Ionicons name="fast-food-outline" size={16} color="white" />
            <Text style={styles.icon}>Eats</Text>
        </TouchableOpacity>
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
    fontSize: 18,
    marginTop: 8,
  },
  selectionContainer:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  selectionBox:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
    width: 80,
    borderRadius: 50,
    padding: 5,
  },
  icon:{
    alignSelf: "center",
    color: "white",
  },


})

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    paddingTop: 12,
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