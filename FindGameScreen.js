import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

import MapView, { Marker, Callout } from "react-native-maps";
// import * as Font from 'expo-font';
import Icon from "react-native-vector-icons/FontAwesome";

// naloži pisavo Roboto iz sistema na začetku aplikacije
// async function loadFonts() {
//   await Font.loadAsync({
//     'Roboto': require('./fonts/Roboto-Bold.ttf'),
//     'Roboto_thin': require('./fonts/Roboto-Thin.ttf'),
//   });
// }

// loadFonts();

const FindGameScreen = () => {
  const [buttonColor, setButtonColor] = useState("#2FDD37");

  const handlePress = () => {
    setButtonColor("#FFA500");
  };
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 46.0569465,
        longitude: 14.5057515,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: 46.051173, longitude: 14.487277 }}
        title="Univerzitetna Športna Dvorana Rožna Dolina"
        description="Event bo potekal ob 14:00"
      >
        <Callout tooltip>
          <View>
            <Text style={{ fontWeight: "bold" }}>
              Univerzitetna Športna Dvorana Rožna Dolina
            </Text>
            <Text>Date: 4.5.2023 Time: 14:00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: 46.0589135, longitude: 14.4948999 }}
        title="Goran Dragic Basketball Court"
        description="Date: 3.4.2023 Time: 15:00"
      >
        <Callout tooltip>
          <View>
            <Text style={{ fontWeight: "bold" }}>
              Goran Dragic Basketball Court
            </Text>
            <Text>Date: 3.4.2023 Time: 15:00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: 46.0601024, longitude: 14.4944168 }}
        title="Hala Tivoli"
        description="Date: 3.4.2023 Time: 17:00"
      >
        <Callout tooltip>
          <View>
            <Text style={{ fontWeight: "bold" }}>Hala Tivoli</Text>
            <Text>Date: 3.4.2023 Time: 17:00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: 46.0684209, longitude: 14.5059426 }}
        title="Sports center Triglav"
        description="Date: 5.4.2023 Time: 17:00"
      >
        <Callout tooltip>
          <View>
            <Text style={{ fontWeight: "bold" }}>Sports center Triglav</Text>
            <Text>Date: 10.4.2023 Time: 17:00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: 46.0684209, longitude: 14.5059426 }}
        title="Sports center Triglav"
        description="Date: 5.4.2023 Time: 17:00"
      >
        <Callout tooltip>
          <View>
            <Text style={{ fontWeight: "bold" }}>Sports center Triglav</Text>
            <Text>Date: 10.4.2023 Time: 17:00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: 46.0510558, longitude: 14.5531833 }}
        title="Kosarkarsko igrisce Fuzine"
        description="Date: 11.4.2023 Time: 16:00"
      >
        <Callout tooltip>
          <View>
            <Text style={{ fontWeight: "bold" }}>
              Kosarkarsko igrisce Fuzine
            </Text>
            <Text>Date: 11.4.2023 Time: 16:00</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2FDD37",
    width: "50%",
    height: 30,
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default FindGameScreen;
