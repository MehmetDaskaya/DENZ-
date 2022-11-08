import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import NavFavouritesOrigin from "../navigation/NavFavouritesOrigin";
import NavbarContainer from "../navigation/NavbarContainer";
import styles from "./SeaTripSelectionStyles";

const SeaTripSelection = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("RideOptionsCard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavbarContainer title={"İskele Varış Noktasını Seçin"} />
      <View style={styles.body}>
        <NavFavouritesOrigin />
      </View>

      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => handlePress()}
      >
        <FontAwesome name="ship" size={24} color="white" />
        <Text style={styles.icon}>Taşıt Seçeneklerini Görün</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SeaTripSelection;
