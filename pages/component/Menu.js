import { React } from "react";
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const TestMenu = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
})

export default TestMenu