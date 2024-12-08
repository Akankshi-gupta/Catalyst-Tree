import React from "react";
import { Text, View } from "react-native";
// import styles from "..screens/styles";

export default function FrequentlyAsked({Question, Answer}){
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF0D', padding: '2%', borderRadius: 20}}>
            <View>
                <Text>{Question}</Text>
                <Text style={{display: 'none'}}>{Answer}</Text>
            </View>
            <Text>+</Text>
        </View>
    )
}