import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";

export default function Home() {
    const navigation = useNavigation();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation")
    };

    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View styles={{alignItems: "center"}}>
                    <Text style={styles.dailyCheck}>
                        ♡ 20 days - ✓ 80 checks
                    </Text>
                    <LifeStatus></LifeStatus>
                    <StatusBar></StatusBar>
                    <CreateHabit 
                    habitArea="Mind" 
                    borderColor="#90B7F3">

                    </CreateHabit>
                </View>
                <Text 
                style={styles.explanationText}
                onPress={() => {
                    handleNavExplanation();
                }}>
                See again explanation
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,21,0.98)"
    },
    dailyCheck:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 40,
        fontSize: 18
    },
    explanationText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        padding: 15,
        paddingBottom: 25,
    }
})