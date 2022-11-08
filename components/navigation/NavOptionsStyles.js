import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFDE59",
    marginHorizontal: 10,
    paddingHorizontal: 6,
    borderRadius: 16,
  },
  image: {
    flex: 15,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    flex: 3,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  icon: {
    flex: 1,
    paddingHorizontal: 8,
    alignSelf: "center",
  },
});

export default styles;
