import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import usersData from "./databaza.json";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const sortedUsers = usersData.users.sort((a, b) => b.rate - a.rate);
    setLeaderboardData(sortedUsers);
  }, []);

  return (
    <View>
      {leaderboardData.map((user, index) => (
        <View key={user.id}>
          <Text>
            {index + 1}. {user.name} {user.surname}
          </Text>
          <Text>Rating: {user.rate}</Text>
        </View>
      ))}
    </View>
  );
};

export default Leaderboard;
