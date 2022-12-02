import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HabitPage( { route }) {

    const navigation = useNavigation();

    const {create, habit} = route.params;

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
                        <Text 
                            style={styles.title}>
                                Habit Configurations
                        </Text>
                        <Text 
                            style={styles.inpuText}>
                                Area
                        </Text>
                        <View 
                            style={styles.inputCointainer}>
                            
                            <Text 
                                style={styles.area}>
                                    {habit?.habitArea}
                            </Text>
                        </View>
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
    title:{
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 30,
    },
    inputText:{
        color: "white",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },
    inputContainer:{
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    area:{
        color: "#BBBBBB",
        fontSize: 15,
    },
});