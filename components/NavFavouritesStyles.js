import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
    },
    textPrimary:{
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      marginHorizontal: 10,
    },
    button:{
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 6,
    },
    icon:{
      backgroundColor: "grey",
      padding:8,
      borderRadius: 50,
      alignSelf: "center",
    },
    text:{
      color:"black",
      fontWeight: "bold",
      fontSize: 14,
    },
    textContainer:{
      marginLeft: 6,
    },
    separator:{
      backgroundColor: "grey",
      height: 0.5,
      marginVertical: 4,
    }
  })

    export default styles;