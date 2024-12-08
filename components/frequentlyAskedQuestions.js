import React from "react";
import { Text, View } from "react-native";
// import styles from "..screens/styles";

export default function FrequentlyAsked({Question, Answer}){
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgba(255, 255, 255, 0.14);', padding: '2%', borderRadius: 20, marginBottom: '2%'}}>
            <View>
                <Text style={{fontSize: 24, fontWeight: 400, color: "#FFFFFF",}}>{Question}</Text>
                <Text style={{display: 'none'}}>{Answer}</Text>
            </View>
            <Text style={{fontSize: 24, fontWeight: 400, color: "#FFFFFF",}}>+</Text>
        </View>
    )
}