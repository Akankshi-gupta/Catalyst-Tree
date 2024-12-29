import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
import styles from "../screens/styles";

export default function ProductExplanation( {img, reason, heading}){
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;
    return(
        // <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between'}}>
        //     <View style={{flex: 1, justifyContent: 'center'}}>
        //         <Text style={[styles.headingText,{textAlign:minWidth?"center":"left"}]}>{why}</Text>
        //     </View>
            <View style={{backgroundColor: '#72CE630D', borderColor: '#72CE63', borderWidth: 1, borderRadius: 20, flex: 1, alignItems: 'flex-start', padding:minWidth?"4%": '2%', marginLeft: '2%',flexDirection:minWidth?"row":"column",marginVertical:minWidth?"4%":"0"}}>
                <Image source={img} style={{marginBottom: '12%', height: 40, width: 40}}></Image>
                <Text style={[styles.buttonText2, {textAlign: 'left', marginBottom: '3%'}]}>{heading}</Text>
                <Text style={[styles.buttonText2, {textAlign: 'left', fontWeight: 400, fontSize: 14, color: 'rgba(255, 255, 255, 0.6)' }]}>{reason}</Text>
            </View>
        //     <View style={{backgroundColor: '#72CE630D', borderColor: '#72CE63', borderWidth: 1, borderRadius: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', padding:minWidth?"4%": '2%', marginLeft: '2%',flexDirection:minWidth?"row":"column",marginVertical:minWidth?"4%":"0"}}>
        //         <Image source={img2}  style={{marginBottom: '12%'}}></Image>
        //         <Text style={[styles.buttonText2, {textAlign: 'left'}]}>{reason2}</Text>
        //     </View>
        //     <View style={{backgroundColor: '#72CE630D', borderColor: '#72CE63', borderWidth: 1, borderRadius: 20, flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', padding:minWidth?"4%": '2%', marginLeft: '2%',flexDirection:minWidth?"row":"column",marginVertical:minWidth?"4%":"0"}}>
        //         <Image source={img3}  style={{marginBottom: '12%'}}></Image>
        //         <Text style={[styles.buttonText2, {textAlign: 'left'}]}>{reason3}</Text>
        //     </View>
        // </View>
    )
}