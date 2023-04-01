import { React } from "react";
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    textStyle: {
        textTransform: "uppercase",
        marginBottom: 50
    }
})

export default Menu