//Style sheet to maintain consistent styles across different components

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black", // Adjust the color as needed
    textAlign: "left", // Adjust the alignment as needed
    marginBottom: 16, // Add spacing if necessary
  },
  regBackground: {
    flex: 1,
  },
  skyeLogo: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "auto",
    letterSpacing: 12,
  },
  button: {
    backgroundColor: "#d58212", // Set the background color
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  link: {
    color: "blue"
    }
});

export default styles;