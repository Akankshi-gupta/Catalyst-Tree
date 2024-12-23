import React from "react";
import { Text, View, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import styles from "../screens/styles";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export default function StartFunding(){
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    const navigation =useNavigation();
    return(
        <View style={{paddingHorizontal: minWidth?"3%":'7%',marginHorizontal:minWidth?"5%":0, paddingVertical: '5%',borderColor:"rgba(113, 206, 99, 0.7)",borderWidth:2,borderRadius:20}}>
            <Text style={{color: '#FFFFFF', fontWeight: 500, fontSize:minWidth?32: 50}}>Global thinking. {'\n'}Global growth. </Text>
            <Svg height={70} style={{marginTop: '2%'}}>
                <Defs>
                    <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                        <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                        <Stop offset="100%" stopColor="black" stopOpacity="1" />
                    </RadialGradient>
                </Defs>
                <Defs>
                    <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0%" stopColor="#9FE870" />
                        <Stop offset="60%" stopColor="#FFFFFF" />
                        <Stop offset="100%" stopColor="#00000000" />
                    </SvgLinearGradient>
                </Defs>
                <Ellipse cx={0} cy={'45%'} rx={'50%'} ry={"15%"} fill="url(#grad1)" />
                <SvgText x="0%" y="50%" fontSize="50" fontWeight="500" fill="url(#gradientText)" style={{fontFamily: 'inter_18pt'}}>
                    Let's go.
                </SvgText>
            </Svg>
            <TouchableOpacity style={[styles.buttonPrimary, {paddingHorizontal: '2%', paddingVertical: '1%', width: minWidth?"40%":'14%', marginBottom: '8%'}]} onPress={() => navigation.navigate("Startup")}>
                <Text style={styles.buttonText1}>Start Funding</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:minWidth?"100%": '60%'}}>
                <View style={{justifyContent:"center"}}>
                    <Text style={[styles.headingText, {textAlign: 'center',fontSize:minWidth?15:46}]}>180+</Text>
                    <Text style={[styles.smallText,{fontSize:minWidth?12:16}]}>countries{minWidth?"\n":""} available</Text>
                </View>
                <View style={{justifyContent:"center"}}>
                    <Text style={[styles.headingText, {textAlign: 'center',fontSize:minWidth?15:46}]}>99%</Text>
                    <Text style={[styles.smallText,{fontSize:minWidth?12:16}]}>payroll{minWidth?"\n":""} accuracy</Text>
                </View>
                <View style={{justifyContent:"center"}}>
                    <Text style={[styles.headingText, {textAlign: 'center',fontSize:minWidth?15:46}]}>500+</Text>
                    <Text style={[styles.smallText,{fontSize:minWidth?12:16}]}>global{minWidth?"\n":""} partners</Text>
                </View>
                <View style={{justifyContent:"center"}}>
                    <Text style={[styles.headingText, {textAlign: 'center',fontSize:minWidth?15:46}]}>96%</Text>
                    <Text style={[styles.smallText,{fontSize:minWidth?12:16}]}>customer{minWidth?"\n":""} satisfaction</Text>
                </View>
            </View>
            <Image source={require('../assets/images/Div [h-full].png')} style={{position:'absolute', bottom: '0%', right: '16%'}}></Image>
        </View>
    )
}