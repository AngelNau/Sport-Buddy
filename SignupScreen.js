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

const SignupScreen = () => {
  return (
    <ImageBackground
      source={require("./backgroundImage.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          placeholderTextColor="#ffa520"
        />
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.text}>Create an account</Text>
          <View style={styles.line} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ffa520"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffa520"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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

export default SignupScreen;
