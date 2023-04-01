import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from "./component/Menu"

const Home = () => {
    return (
      <View>
        <Text>Home</Text>
        <View>
          <Menu />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
});

export default Home;