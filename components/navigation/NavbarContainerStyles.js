import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 0.9,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 20,
  },

  textContainer: {
    flex: 4,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
  },
});

export default styles;
