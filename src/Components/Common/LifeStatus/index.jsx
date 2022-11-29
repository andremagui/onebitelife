import React from "react";
import {View, StyleSheet} from "react-native";

import Lottie from "lottie-react-native";

/* 
    100 - max
    50 - medium
    25 - short
    00 - died/failed (game over)
    First is happiness then health
*/ 
export default function LifeStatus() {
    return (
    <View style={styles.container}>
        <Lottie source={require("../../../Assets/education/education-100.json")} autoPlay loop style={styles.educationAnimation}></Lottie>
        <Lottie source={require("../../../Assets/money/money-100.json")} autoPlay loop style={styles.financeAnimation}></Lottie>
        <Lottie source={require("../../../Assets/robot/robot-100-100.json")} autoPlay loop style={styles.robotAnimation}></Lottie>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 300,
        height: 300,
    },
    educationAnimation:{
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",
    },
    financeAnimation:{
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute",
    },
    robotAnimation:{
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    },
})