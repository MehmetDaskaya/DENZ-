import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { setDestination } from "../../store/slices/navSlice";
import { useNavigation } from "@react-navigation/native";

import styles from "./NavFavouritesStyles";

const NavFavouritesDestination = () => {
  const data = [
    {
      id: "123",
      icon: "location-outline",
      name: "Beşiktaş İskele",
      destination: "123, Beşiktaş, İstanbul,Türkiye",
      location: { lat: 41.04010043674731, lng: 29.005555114395364 },
      description: "Beşiktaş İskelesi, Beşiktaş/İstanbul, Turkey",
    },
    {
      id: "456",
      icon: "location-outline",
      name: "Kadıköy İskele",
      destination: "456, Kadıköy, İstanbul,Türkiye",
      location: { lat: 40.992851271909565, lng: 29.02297469421281 },
      description: "Kadıköy İskelesi, Kadıköy/İstanbul, Turkey",
    },
    {
      id: "124",
      icon: "location-outline",
      name: "Üsküdar İskele",
      destination: "124, Üsküdar, İstanbul,Türkiye",
      location: { lat: 41.0278489652204, lng: 29.01532207793889 },
      description: "Üsküdar İskelesi, Üsküdar/İstanbul, Turkey",
    },
  ];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(
                setDestination({
                  location: item.location,
                  description: item.description,
                })
              );

              navigation.navigate("MapScreen");
            }}
          >
            <Ionicons
              style={styles.icon}
              name={item.icon}
              size={14}
              color="white"
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text>{item.destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavFavouritesDestination;
