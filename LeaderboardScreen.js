import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";
import usersData from "./databaza.json";
import NavigationBar from "./component/NavigationBar";

const Leaderboard = () => {
  // sortiranje uporabnikov po ratingu v določeni državi
  const sortedData = usersData.users.sort((a, b) => b.rate - a.rate);
  i = 1;
  return (
    <View>
      {sortedData.map((user) => (
        <View key={user.id} style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText}>{i++}.</Text>
          </TouchableOpacity>
          {/* <Text> {i++}. </Text> */}
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{user.name} </Text>
          </TouchableOpacity> */}
          {/* <Text>{user.name} </Text> */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{user.surname}</Text>
          </TouchableOpacity>
          {/* <Text>{user.surname} </Text>  */}
          <View style={styles.stars}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={user.rate}
              starSize={20}
              fullStarColor={"#FFD700"}
              emptyStarColor={"#D3D3D3"}
              halfStarColor={"#FFD700"}
              starStyle={{ marginRight: 8 }}
              alignSelf="end"
              // justifyContent: 'space-between'
            />
          </View>
          <Text style={styles.rate}>({user.rate})</Text>
        </View>
      ))}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    marginTop: 15,
  },
  stars: {
    marginTop: 17,
  },
  button1: {
    backgroundColor: "#4fa848",
    width: "12%",
    // padding: 10,
    paddingTop: 5,
    height: 34,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#79e371",
    width: "40%",
    height: 34,
    paddingTop: 7,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Leaderboard;
