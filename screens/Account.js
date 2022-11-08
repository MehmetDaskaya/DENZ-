import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React from "react";
import { setSignedIn } from "../store/slices/navSlice.js";

import { auth } from "../api/firebase.js";
import { useDispatch } from "react-redux";

const data = [
  {
    id: "123",
    name: "Profil",
  },
  {
    id: "1212",
    name: "Yolculukla İlgili Sorunlar",
  },
  {
    id: "12223",
    name: "İadeler",
  },
  {
    id: "45336",
    name: "Hesap ve Ödeme",
  },
  {
    id: "18224",
    name: "Erişilebilirlik",
  },
  {
    id: "155528",
    name: "DENZ Rehberi",
  },
  {
    id: "12424",
    name: "DENZ Hakkında",
  },
];

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignedIn(null));
        navigation.navigate("SignInScreen");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mailText}>
        Kullanıcı E-Postası: {auth.currentUser?.email}
      </Text>
      <Text style={styles.title}>Tüm Ayarlar</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.list}>
              <Text style={styles.listText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  mailText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginVertical: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#FFDE59",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 20,
  },
  list: {
    flex: 1,

    padding: 10,
  },
  listText: {
    fontSize: 20,
    margin: 6,
  },
  title: {
    fontSize: 18,
    margin: 10,
    color: "grey",
  },
});
