import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";
import EditHabit from "../../Components/Home/EditHabit";

export default function Home() {
    const navigation = useNavigation();


    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();
    
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
                    <StatusBar></StatusBar>

                    {
                    mindHabit ? (
                        <EditHabit 
                        habit={mindHabit?.habitName} 
                        frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`} 
                        habitArea={mindHabit?.habitArea} 
                        checkColor="#90B7F3">
                        </EditHabit>
                    ) : (
                        <CreateHabit 
                        habit="Mind" 
                        borderColor="#90B7F3">
                        </CreateHabit>
                    )
                    }

                    {
                    moneyHabit ? (
                        <EditHabit 
                        habit={moneyHabit?.habitName} 
                        frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`} 
                        habitArea={moneyHabit?.habitArea} 
                        checkColor="#85BB65">
                        </EditHabit>
                    ) : (
                        <CreateHabit 
                        habitArea="Money" 
                        borderColor="#85BB65">
                        </CreateHabit>
                    )
                    }
                    
                    {
                    bodyHabit ? (
                        <EditHabit 
                        habit={bodyHabit?.habitName} 
                        frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`} 
                        habitArea={bodyHabit?.habitArea} 
                        checkColor="#FF0044">
                        </EditHabit>
                    ) : (
                        <CreateHabit 
                        habitArea="Body" 
                        borderColor="#FF0044">
                        </CreateHabit>
                    )
                    }
                  
                    {
                    funHabit ? (
                        <EditHabit 
                        habit={funHabit?.habitName} 
                        frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`} 
                        habitArea={funHabit?.habitArea} 
                        checkColor="#FE7F23">
                        </EditHabit>
                    ) : (
                        <CreateHabit 
                        habitArea="Humour" 
                        borderColor="#FE7F23">
                        </CreateHabit>
                    )
                    }

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