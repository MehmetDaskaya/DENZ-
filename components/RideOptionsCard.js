import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ReturnButton from './ReturnButton';
import { useSelector } from 'react-redux';
import { selectEarthDistance } from '../store/slices/navSlice';

import NavbarContainer from './NavbarContainer';
import styles from './RideOptionsStyles';


const data = [
  {
    id: "SuCoot",
    title: "SuCooter",
    multiplier: 1.2,
    image: "https://raw.githubusercontent.com/Nerimb/DENZ-/main/utils/images/Vehicle1.1.png",
    speed: 15,
  },
  {
    id: "Saic-456",
    title: "Yelkenli",
    multiplier: 1.2,
    image: "https://raw.githubusercontent.com/Nerimb/DENZ-/main/utils/images/Vehicle2.1.png",
    speed: 10,
  },
  {
    id: "FerIBB",
    title: "Vapur",
    multiplier: 0.25,
    image: "https://raw.githubusercontent.com/Nerimb/DENZ-/main/utils/images/Vehicle3.1.png",
    speed: 12,
  },
];



const RideOptionsCard = () => {

  const earthDistance = useSelector(selectEarthDistance);
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(null);


  return (
    <SafeAreaView style={styles.container}>

      {/* <NavbarContainer title={"Bir Taşıt Seçin " + setTravelTimeInformation?.distance.text}/> */}

      <View style={styles.upperNav}>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={styles.button}>
        
          <ReturnButton name={"arrowleft"}/>
        </TouchableOpacity>

          <Text style={styles.text}>Bir Taşıt Seçin</Text>

      </View>

      
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      style={{marginVertical: 20}}
      renderItem={({item:{id, title, multiplier,image}, item}) => (
        <TouchableOpacity 
            style={[styles.box,  id===selected?.id && styles.selectedBox]}
            onPress={() =>
               {setSelected(item);}}
            >
            <Image
            style={styles.image}
            source={{uri: image}}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{title}</Text>
              <Text style={{}}>{((earthDistance/item.speed)*60).toFixed(1)} dakika</Text>
            </View>
            <Text style={styles.price}>{((earthDistance/item.speed)*60*item.multiplier).toFixed(1)} TL</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={[styles.chosenButton, !selected && styles.choiceButton]}
          onPress={() => {navigation.navigate('Ödeme')}}
          >
          <Text style={styles.choiceText}>
            { !selected ? "Taşıt Seçiniz" :  selected?.title + " Seçildi"}
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default RideOptionsCard;
