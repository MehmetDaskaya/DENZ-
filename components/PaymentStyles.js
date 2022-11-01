import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    travelTitle:{
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: 20,
    },
    container: {
      flex:1,
      backgroundColor: "white",
  },
  
  body:{
      flex: 2,
      justifyContent: "center",
      marginHorizontal: 20,
      
  },
  upperBody:{
      flex:0.6,
      flexDirection: "row",
      backgroundColor: "#FFDE59",
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
  
  },
  bodyLeft:{
      flex:1,
      backgroundColor: "#8497C5",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 0,
      borderRightColor: "black",
      borderRightWidth: 1,
  
  },
  bodyRight:{
      flex:1,
      backgroundColor: "#8497C5",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 16,
  },
  bottomBody:{
      flex:0.3,
      backgroundColor: "yellow",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopColor: "black",
      borderTopWidth: 1,
  
  },
  selectionContainer:{
  
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
  
    },
    selectionBox:{
      flex: 0.4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      margin: 20,
      borderRadius: 50,
      padding: 5,
    },
    icon:{
      fontSize: 16,
      alignSelf: "center",
      color: "white",
      marginHorizontal: 16,
    },
  })
    export default styles;