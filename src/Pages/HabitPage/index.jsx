import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HabitPage() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={require("../../Assets/icons/arrowBack.png")}>
                        </Image>
                    </TouchableOpacity>
                    <View 
                        style={styles.mainContent}>
                    </View>
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
    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25,
    },
    arrowBack: {
        width: 40,
        height: 40,
    },
    mainContent:{
        width: 250,
        alignSelf: "center",
    },
});