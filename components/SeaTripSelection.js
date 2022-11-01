import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { FontAwesome} from '@expo/vector-icons';


import NavFavouritesOrigin from './NavFavouritesOrigin';
import NavbarContainer from './NavbarContainer';
import styles from './SeaTripSelectionStyles';

const SeaTripSelection = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <NavbarContainer title={"İskele Varış Noktasını Seçin"}/>
      <View style={styles.body}>
        <NavFavouritesOrigin/>
      </View>

        <TouchableOpacity
          style={styles.selectionBox}
          onPress={() => navigation.navigate('RideOptionsCard')}
          >
            <FontAwesome name="ship" size={24} color="white" />
            <Text style={styles.icon}>Taşıt Seçeneklerini Görün</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SeaTripSelection;
