import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import styles from "../screens/styles";

export default function FounderMessage({message, companyName, designation}){
    return(
        <View>
            <ImageBackground source={require("../assets/images/background3.png")} style={{width: '100%', borderRadius: 20, height: 600}} resizeMode="contain">
                <Image source={require("../assets/images/Avatar3x.png")} style={{position: "absolute", top: '37.4%', left: '36.9%', height: 170, width: 170}}></Image>
                <View style={{position: "absolute", top: '37.4%', left: '49%', width: '24%', alignItems: 'flex-start'}}>
                    <Text style={[styles.headingText, {fontSize: 23, marginBottom: '5%'}]}>{message}</Text>
                    <Text style={[styles.smallText, { marginBottom: '1%'}]}>{companyName}</Text>
                    <Text style={[styles.smallText, {fontSize: 14, fontWeight: 300}]}>{designation}</Text>
                </View>
            </ImageBackground>
        </View>
        
    )
}