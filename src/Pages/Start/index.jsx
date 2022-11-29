import React from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import { useNavigation } from "@react-navigation/native";

import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {

    const handleNavAppExplanation = () => {
        console.log("Testing click...")
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../../Assets/icons/logo3.png")} 
                    style={styles.logo}
                    />
                    <LifeStatus></LifeStatus>
                    <Text style={styles.description}>
                        Let's transform your life {"\n"} into a game, seeking always {"\n"} the best level.
                    </Text>

                    <DefaultButton 
                    buttonText={"Continue"} 
                    handlePress={handleNavAppExplanation} 
                    width={250} 
                    height={50}>
                    </DefaultButton>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    logo:{
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    },
});