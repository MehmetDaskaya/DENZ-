import { StyleSheet, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import SeaTripSelection from "../components/SeaTripSelection";
import Payment from "../components/Payment";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Map />
      </View>

      <View style={styles.map}>
        {/* <>
          {
            switch (true) {
              case true: 
            }
          }
        </> */}
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SeaTripSelection"
            component={SeaTripSelection}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Ödeme"
            component={Payment}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "50%",
  },
});
