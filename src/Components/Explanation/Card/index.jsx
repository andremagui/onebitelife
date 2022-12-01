import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function ExplanationCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                You can consolidate 4 fundamental habits:
            </Text>
        
            <View style={styles.explanationContainer}>
                <Image source={require("../../../Assets/icons/educationIcon.png")} style={styles.icon}>

                </Image>
                <Text style={styles.description}>
                    <Text style={styles.mind}>
                        Mind:
                    </Text>
                    Habits to enhance your intelligence.
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image source={require("../../../Assets/icons/moneyIcon.png")} style={styles.icon}>

                </Image>
                <Text style={styles.description}>
                    <Text style={styles.money}>
                        Money:
                    </Text>
                    Habits to help you control your finances.
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image source={require("../../../Assets/icons/bodyIcon.png")} style={styles.icon}>

                </Image>
                <Text style={styles.description}>
                    <Text style={styles.body}>
                        Body:
                    </Text>
                    Habits to help you stay healthy and strong.
                </Text>
            </View>

            <View style={styles.explanationContainer}>
                <Image source={require("../../../Assets/icons/funIcon.png")} style={styles.icon}>

                </Image>
                <Text style={styles.description}>
                    <Text style={styles.fun}>
                        Humour:
                    </Text>
                    Habits to help you stay free of stress and happier.
                </Text>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#151515",
        width: 300,
        borderRadius: 25,
        padding: 30
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    explanationContainer:{
        flexDirection: "row",
        marginTop: 30,
        paddingRight:25,
    },
    icon:{
        width: 40,
        height: 40,
        marginRight: 5,
    },
    mind:{
        color: "#90B7F3",
        fontWeight: "bold",
    },
    money:{
        color: "#85BB65",
        fontWeight: "bold",
    },
    body:{
        color: "#FF0044",
        fontWeight: "bold",
    },
    fun:{
        color: "#FE7F23",
        fontWeight: "bold",
    },
    description:{
        color: "white"
    }
});