import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../Components/Common/LifeStatus";

export default function Home() {
    const navigation = useNavigation();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation")
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View styles={{alignItems: "center"}}>
                    <Text style={styles.dailyCheck}>
                        ♡ 20 days - ✓ 80 checks
                    </Text>
                    <LifeStatus></LifeStatus>
                </View>
                <Text 
                style={styles.explanatioNText}
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
    explanatioNText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        padding: 15,
        paddingBottom: 25,
    }
})