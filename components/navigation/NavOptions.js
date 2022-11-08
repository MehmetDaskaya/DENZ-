import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../store/slices/navSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ReturnButton from "../ReturnButton";
import styles from "./NavOptionsStyles";

const data = [
  {
    id: "123",
    title: "Hemen En Kısa Yolu Bul",
    screen: "MapScreen",
  },
];

const NavOptions = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              origin
                ? navigation.navigate(item.screen)
                : Alert.alert(
                    "Gidilecek Konum Boş Bırakılmamalıdır.",
                    "Lütfen devam etmeden önce bir konum seçiniz.",
                    [
                      {
                        text: "İptal",
                        style: "cancel",
                      },
                      { text: "Tamam" },
                    ]
                  );
            }}
          >
            <MaterialCommunityIcons
              name="ship-wheel"
              size={80}
              color="black"
              style={styles.image}
            />

            <Text style={styles.text}>{item.title}</Text>

            <View style={styles.icon}>
              <ReturnButton name={"arrowright"} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default NavOptions;
