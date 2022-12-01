import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CreateHabit({ habitArea, borderColor }) {
    function handleCreate() {
        console.log(`CLick button: ${habitArea}`)
    }

    return (
        <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, {borderColor: borderColor}]}
        onPress={handleCreate}>
            <Text style={styles.habitTitle}>
                Add goal {habitArea}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        width: 315,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderStyle: "dotted",
        borderColor: "white",
        borderRadius: 5,
        alignSelf: "center"
    },
    habitTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});