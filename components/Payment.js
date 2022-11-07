import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  selectTravelTimeInformation,
  selectInitialTravelInformation,
  selectInitialTravelDuration,
  selectEarthDistance,
} from "../store/slices/navSlice";
import { useSelector } from "react-redux";
import NavbarContainer from "./NavbarContainer";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./PaymentStyles";

const Payment = () => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const travelInformation = useSelector(selectInitialTravelInformation);
  const travelDuration = useSelector(selectInitialTravelDuration);
  const earthDistance = useSelector(selectEarthDistance);

  const navigation = useNavigation();
  const newInformation = parseInt(travelInformation.toString().slice(0, 6));
  const newTime = parseInt(travelDuration.toString().slice(0, 2));

  return (
    <SafeAreaView style={styles.container}>
      <NavbarContainer title={"   DENZ Yolculuk Ekranınız"} />
      <View style={styles.body}>
        <View style={styles.upperBody}>
          <View style={styles.bodyLeft}>
            <FontAwesome name="car" size={24} color="white" />
            <Text> {travelTimeInformation?.distance.text} Araç Yolculuğu</Text>
            <Text> {newTime} dakika Kara Yolculuğu</Text>
          </View>

          <View style={styles.bodyRight}>
            <FontAwesome name="ship" size={24} color="white" />
            <Text> {earthDistance} km Deniz Yolculuğu</Text>
            <Text> X dakika Deniz Yolculuğu</Text>
          </View>
        </View>
        <View style={styles.bottomBody}>
          <Text>
            Toplam Uzaklık:{" "}
            {parseFloat(earthDistance) +
              parseFloat(travelTimeInformation?.distance.text)}{" "}
            km
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.icon}>Tamamlandı</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Payment;
