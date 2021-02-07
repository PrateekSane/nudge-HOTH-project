import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
  logo: {
    fontSize: 64,
    color: "#8E97FD"
  },
  textfield: {
    height: 40,
    padding: 30,
    marginTop: 20,
    backgroundColor: "white",
    color: "black",
    borderRadius: 15,
  }
});

export default styles;
