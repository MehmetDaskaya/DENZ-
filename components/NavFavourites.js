import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const NavFavourites = () => {

const data=[
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "123, Beşiktaş, İstanbul,Türkiye",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "456, Ortaköy, İstanbul,Türkiye",
    },
    {
      id: "124",
      icon: "home",
      location: "Home",
      destination: "124, Beşiktaş, İstanbul,Türkiye",
  },
]

  return (
    <FlatList data={data} keyExtractor={(item)=> item.id}
    ItemSeparatorComponent={()=>
        <View style={styles.separator}/>
    }
    renderItem={({item}) => (
        <TouchableOpacity style={styles.button} >
            <Ionicons style={styles.icon} name={item.icon} size={18} color="white"/>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.location}</Text>
              <Text>{item.destination}</Text>
            </View>
        </TouchableOpacity>
    )} />
  )
}

export default NavFavourites;

const styles = StyleSheet.create({
  button:{
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  icon:{
    backgroundColor: "grey",
    padding:12,
    borderRadius: 50,
    alignSelf: "center",
  },
  text:{
    color:"black",
    fontWeight: "bold",
    fontSize: 14,
  },
  textContainer:{
    marginLeft: 10,
  },
  separator:{
    backgroundColor: "grey",
    height: 0.5,
    marginVertical: 4,
  }
})