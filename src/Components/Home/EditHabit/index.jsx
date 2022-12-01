import React from "react";
import { View, Text, StyleSheet, TouchableOpacity , Alert } from "react-native";

export default function EditHabit({ habit, habitArea, frequency, checkColor }) {
    function handleEdit() {
        console.log(`CLick button: ${habitArea}`)
    }

    function handleCheck() {
        console.log(`CLick button: ${habitArea}`)
    }

    return (
        <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={handleEdit}>

            <View styles={styles.habitText}>
                <Text style={styles.habitTitle}>
                    {habit}
                </Text>
                <Text style={styles.habitFrequency}>
                    {frequency}
                </Text>
            </View>

            <TouchableOpacity
            style={[styles.check, { borderColor: checkColor}]} 
            onPress={handleCheck}>
            </TouchableOpacity>

        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#151515",
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    habitTitle: {
        color: "white",
        fontWeight: "bold",
    },
    habitFrequency: {
        color: "white",
    },
    check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
    }
});
