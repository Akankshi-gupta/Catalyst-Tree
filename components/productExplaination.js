import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
import styles from "../screens/styles";

export default function ProductExplanation( {why, img1, img2, img3, reason1, reason2, reason3}){
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={[styles.headingText]}>{why}</Text>
            </View>
            <View style={{backgroundColor: '#72CE630D', borderColor: '#72CE63', borderWidth: 1, borderRadius: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', padding: '2%', marginLeft: '2%'}}>
                <Image source={img1} style={{marginBottom: '12%'}}></Image>
                <Text style={[styles.buttonText2, {textAlign: 'left'}]}>{reason1}</Text>
            </View>
            <View style={{backgroundColor: '#72CE630D', borderColor: '#72CE63', borderWidth: 1, borderRadius: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', padding: '2%', marginLeft: '2%'}}>
                <Image source={img2}  style={{marginBottom: '12%'}}></Image>
                <Text style={[styles.buttonText2, {textAlign: 'left'}]}>{reason2}</Text>
            </View>
            <View style={{backgroundColor: '#72CE630D', borderColor: '#72CE63', borderWidth: 1, borderRadius: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', padding: '2%', marginLeft: '2%'}}>
                <Image source={img3}  style={{marginBottom: '12%'}}></Image>
                <Text style={[styles.buttonText2, {textAlign: 'left'}]}>{reason3}</Text>
            </View>
        </View>
    )
}