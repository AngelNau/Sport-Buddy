import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import NavigationBar from "./component/NavigationBar";

const AddPlayerScreen = () => {
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");

  const addPlayerToTeam1 = () => {
    setTeam1Players([...team1Players, playerName1]);
    setPlayerName1("");
  };

  const addPlayerToTeam2 = () => {
    setTeam2Players([...team2Players, playerName2]);
    setPlayerName2("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./backgroundImage.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={styles.teamContainer}>
            <Text style={[styles.title, { color: "green" }]}>Team 1</Text>
            {team1Players.map((player, index) => (
              <Text
                key={index}
                style={[styles.player, { backgroundColor: "green" }]}
              >
                {player}
              </Text>
            ))}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={playerName1}
                onChangeText={setPlayerName1}
                placeholder="Player name"
                placeholderTextColor="#d10000"
              />
              <TouchableOpacity
                style={[styles.addButton, { backgroundColor: "green" }]}
                onPress={addPlayerToTeam1}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.teamContainer}>
            <Text style={[styles.title, { color: "green" }]}>Team 2</Text>
            {team2Players.map((player, index) => (
              <Text
                key={index}
                style={[styles.player, { backgroundColor: "green" }]}
              >
                {player}
              </Text>
            ))}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={playerName2}
                onChangeText={setPlayerName2}
                placeholder="Player name"
                placeholderTextColor="#d10000"
              />
              <TouchableOpacity
                style={[styles.addButton, { backgroundColor: "green" }]}
                onPress={addPlayerToTeam2}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.startButton} onPress={() => alert("Coming Soon")}> 
          {/* TODO: Add screen with court and players inputted */}
            <Text style={styles.startButtonText}>Start a game</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  teamContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  player: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center",
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    backgroundColor: "#fff",
    backgroundColor: "#ffe795"
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AddPlayerScreen;
