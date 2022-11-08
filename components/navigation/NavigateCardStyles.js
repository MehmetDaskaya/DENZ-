import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  navigationContainer: {
    flex: 1,
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
    flex: 3,
    justifyContent: "center",
  },

  body: {
    flex: 2,
    marginHorizontal: 20,
  },
  selectionContainer: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  selectionBox: {
    flex: 1,
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
