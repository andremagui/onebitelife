import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import { useNavigation } from "@react-navigation/native";

import ExplanationCard from "../../Components/Explanation/Card";

export default function AppExplanation() {

    const navigation = useNavigation();

    function handleSetShowHome() {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>
                        First, let me explain...
                    </Text>
                    <ExplanationCard>
                    </ExplanationCard>
                    <Text style={styles.descriptionCtx}>
                        Ready to scale up your level in life?
                    </Text>
                    <Text style={styles.description}>
                        On the next screen you will be able to choose {"\n"} your 4 habits individually.
                    </Text>
                    <DefaultButton 
                    buttonText={"Continue"}
                    handlePress={handleSetShowHome}
                    width={250}
                    height={50}></DefaultButton>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 40,
    },
    descriptionCtx:{
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
        marginBottom: 10,
    },
    description:{
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    },
});