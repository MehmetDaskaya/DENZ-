import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import NavFavouritesDestination from "./NavFavouritesDestination";
import NavbarContainer from "./NavbarContainer";
import styles from "./NavigateCardStyles";

const NavigateCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <NavbarContainer title={"İskele Kalkış Noktasını Seçin"} />

      <View style={styles.body}>
        <NavFavouritesDestination />
      </View>

      <View style={styles.selectionContainer}>
        <TouchableOpacity
          style={styles.selectionBox}
          onPress={() => {
            navigation.navigate("SeaTripSelection");
          }}
        >
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.icon}>Varış Limanını Seçin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
