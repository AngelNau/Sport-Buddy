import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
} from 'react-native-popup-menu';
import NavigationBar from './component/NavigationBar';
const { Popover } = renderers

const Home = () => {
  return(
    <NavigationBar />
  )
}

const styles = StyleSheet.create({
})

export default Home;