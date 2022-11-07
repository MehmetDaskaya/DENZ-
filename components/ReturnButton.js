import { StyleSheet, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ReturnButton = ({ name }) => {
  return (
    <View>
      <AntDesign name={name} size={20} color="white" style={styles.icon} />
    </View>
  );
};

export default ReturnButton;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 16,
    borderRadius: 50,
    alignSelf: "center",
  },
});
