import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import NavigationBar from "./component/NavigationBar";
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

// naloži pisavo Roboto iz sistema na začetku aplikacije
async function loadFonts() {
  await Font.loadAsync({
    'Roboto': require('./fonts/Roboto-Bold.ttf'),
    'Roboto_thin': require('./fonts/Roboto-Thin.ttf'),
  });
}

loadFonts();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./backgroundImage.jpg")}
        style={styles.backgroundImage}>
      <View style={styles.row}>
        <Image
          source={require('./profileImageJordan.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.text1}>Name: Ready</Text>
          <Text style={styles.text1}>Surename: Player</Text>
          <Text style={styles.text1}>Country: One</Text>
        </View>
      </View>
      <View>
      </View>
      <View >
        <Text style={styles.text3}><Icon name="rocket" size={30} color="#2FDD37" />     Rating: 4.9/5</Text>
        <Text style={styles.text3}><Icon name='futbol-o' size={30} color="#2FDD37" />     Sports: Basketball</Text>
        <Text style={styles.text3}><Icon name='clock-o' size={30} color="#2FDD37" />     Time spent playing: 49h</Text>
      </View>
      {/* <NavigationBar style={navStyle.nav} /> */}
      {/* Some bug, navbar stays in the center, no time left */}
      </ImageBackground>
    </View>
  );
};

const navStyle = StyleSheet.create({
  nav: {
    position: 'absolute',
    // bottom: 0
  }
})

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: ,
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
    marginLeft: 30,
    marginTop: 40
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  
  
  text3: {
    marginLeft: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 20,
  },

});



export default HomeScreen;
