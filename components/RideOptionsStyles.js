import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "white",
    },
    upperNav:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
    },
    button:{
      alignItems: "center",
    },
    text:{
      fontSize: 20,
      fontWeight: "bold",
      marginHorizontal: 90,
    },
  
    box:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    image:{
      width: 60,
      height: 60,
      resizeMode: "contain",
      marginHorizontal: 20,
    },
    info:{
      justifyContent: "center",
      marginHorizontal: 20,
    },
    title:{
      fontSize: 18,
      fontWeight: "bold",
    },
    price:{
      fontSize: 18,
      fontWeight: "bold",
      marginHorizontal: 20,
    },
    selectedBox:{
      backgroundColor: "lightgrey",
    },
    choiceButton:{
      backgroundColor: "silver",
    },
    chosenButton:{
      backgroundColor: "black",
      height: 40,
      marginHorizontal: 20,
      marginVertical: 4,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
  
    },
    choiceText:{
      fontSize: 14,
      fontWeight: "bold",
      color: "white",
    },
  })
    export default styles;