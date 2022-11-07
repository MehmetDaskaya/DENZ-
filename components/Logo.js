import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/Nerimb/DENZ-/main/utils/images/DENZ_BannerLogo-.png",
        }}
        style={styles.logo}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
