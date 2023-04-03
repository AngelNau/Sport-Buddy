import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import NavigationBar from "./component/NavigationBar";
import { useNavigation } from "@react-navigation/native"

const StartGame = () => {
  return (
    <ImageBackground
      source={require("./backgroundImage.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>ENTER DETAILS</Text>
        <TextInput
          style={styles.input}
          placeholder="Region"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Time"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Place"
          placeholderTextColor="#ffa520"
        />
        <TouchableOpacity style={styles.button} onPress={() => {alert("TODO")}}>
          <Text style={styles.buttonText}>Schedule Game</Text>
        </TouchableOpacity>
        <NavigationBar />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // add opacity to the background image
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    marginHorizontal: 10,
    color: "#8dd6a1",
    marginHorizontal: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#8dd6a1",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffa520",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ffa520",
    borderRadius: 5,
    color: "#333",
    backgroundColor: "#ffe795"
  },
  button: {
    backgroundColor: "#ffa520",
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default StartGame;
