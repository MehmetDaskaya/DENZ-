import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  body: {
    flex: 2,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  selectionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  selectionBox: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    margin: 20,
    borderRadius: 50,
    padding: 5,
  },
  icon: {
    fontSize: 16,
    alignSelf: "center",
    color: "white",
    marginHorizontal: 16,
  },
});
export default styles;
