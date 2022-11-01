import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "center",
      marginHorizontal: 10,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: "center",
    },
    inputContainer:{
      justifyContent:"center",
      alignItems:"center",
    },
    textInput:{
      fontSize:16,
      width:"90%",
      borderWidth:1,
      borderColor:'black',
      borderRadius: 16,
      padding:10,
      marginVertical:10,
    },
    forgotPassword:{
      alignSelf:"flex-start",
      marginHorizontal:30,
    },
    buttonContainer:{
      alignItems: "center",
      marginVertical: 20,
    },
    button:{
      backgroundColor:'black',
      width:"60%",
      marginVertical:10,
      padding:16,
      alignItems:'center',
      borderRadius:50,
    },
    buttonSecondary:{
      backgroundColor:'#494a49',
      borderColor:'black',
      borderWidth:1,
      padding:6,
    },
    text:{
      color:'white',
    },
    textSecondary:{
      color:'#d6d6d6',
      fontSize:10,
    }
  })

    export default styles;