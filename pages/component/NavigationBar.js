import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native"

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <View style={styles.row}>
        {/* <View style={styles.tab} /> */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="emoji-events" size={40} style={{ color: "#ffa520", }} />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="map" size={40} style={{ color: "#ffa520", }} />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="book" size={40} style={{ color: "#ffa520", }} />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="sports-basketball" size={40} color="#ffa520" />
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={40} style={{ color: "#ffa520", }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // backgroundColor: 'gray',
  },
  separator: {
    width: StyleSheet.hairlineWidth,
    height: 30,
    backgroundColor: 'white',
  },
});

export default NavigationBar;
