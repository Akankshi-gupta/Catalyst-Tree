import React from "react";
import { Text, View, ImageBackground, Image, useWindowDimensions } from "react-native";
import styles from "../screens/styles";

export default function FounderMessage({message, companyName, designation}){
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    return(
        <View>
            <ImageBackground source={require("../assets/images/background3.png")} style={{width: '100%', borderRadius: 20, height:minWidth?400:600}} resizeMode="contain">
                <Image source={require("../assets/images/Avatar3x.png")} style={{position: "absolute", top:minWidth?"41%":'37.4%', left: minWidth?"26.5%":'36.9%', height:minWidth? 78:170, width:minWidth?78: 170}}></Image>
                <View style={{position: "absolute", top: minWidth?"41.5%" :'37.4%', left: '49%', width:minWidth? "50%":'24%', alignItems: 'flex-start'}}>
                    <Text style={[styles.headingText, {fontSize: minWidth?14:23,fontWeight:minWidth?"400":"bold", marginBottom: '5%'}]}>{message}</Text>
                    <Text style={[styles.smallText, { marginBottom: '1%'}]}>{companyName}</Text>
                    <Text style={[styles.smallText, {fontSize:minWidth?12: 14, fontWeight: 300}]}>{designation}</Text>
                </View>
            </ImageBackground>
        </View>
        
    )
}