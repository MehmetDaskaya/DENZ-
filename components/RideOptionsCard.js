import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

const RideOptionsCard = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>RideOptionsCard</Text>
    </SafeAreaView>
  )
}

export default RideOptionsCard;

const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    alignSelf: "center",
  },
})