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
        <View style={styles.row}>
          <Image
            source={require('./profileImageJordan.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.text1}>Name: </Text>
            <Text style={styles.text1}>Surename: </Text>
            <Text style={styles.text1}>Country: </Text>
          </View>
        </View>
        <View>
        </View>
        <View >
          <Text style={styles.text3}><Icon name="rocket" size={30} color="#2FDD37"/>  Rate</Text>
          <Text style={styles.text3}><Icon name='futbol-o' size={30} color="#2FDD37"/>   Sports</Text>
          <Text style={styles.text3}><Icon name='clock-o' size={30} color="#2FDD37"/>   Time spent playing</Text>
        </View>
      </View>
    );
    
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop : 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginRight: 10,
    marginLeft: -90,
    marginTop: 40
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:10
  },
  

  text3: {
    fontFamily:'Roboto',
    fontWeight:'bold',
    marginTop: 50,
    fontSize: 20,
    marginLeft: -80,
  },
  
});



export default HomeScreen;
