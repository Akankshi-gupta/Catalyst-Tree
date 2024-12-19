import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../screens/styles";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";

export default function StartFunding({navigation}){
    return(
        <View style={{backgroundColor: '#2CA560', paddingHorizontal: '7%', paddingVertical: '9%'}}>
            <Text style={{color: '#FFFFFF', fontWeight: 500, fontSize: 50}}>Global thinking. {'\n'}Global growth. </Text>
            <Svg height={70} style={{marginTop: '2%'}}>
                <Defs>
                    <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0%" stopColor="#9FE870" />
                        <Stop offset="60%" stopColor="#FFFFFF" />
                        <Stop offset="100%" stopColor="#00000000" />
                    </SvgLinearGradient>
                </Defs>
                <SvgText x="0%" y="50%" fontSize="50" fontWeight="500" fill="url(#gradientText)" style={{fontFamily: 'inter_18pt'}}>
                    Let's go.
                </SvgText>
            </Svg>
            <TouchableOpacity style={[styles.buttonPrimary, {paddingHorizontal: '2%', paddingVertical: '1%', width: '14%', marginBottom: '8%'}]} onPress={() => navigation.navigate("Startup")}>
                <Text style={styles.buttonText1}>Start Funding</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '60%'}}>
                <View>
                    <Text style={[styles.headingText, {textAlign: 'center'}]}>180+</Text>
                    <Text style={styles.smallText}>countries available</Text>
                </View>
                <View>
                    <Text style={[styles.headingText, {textAlign: 'center'}]}>99%</Text>
                    <Text style={styles.smallText}>payroll accuracy</Text>
                </View>
                <View>
                    <Text style={[styles.headingText, {textAlign: 'center'}]}>500+</Text>
                    <Text style={styles.smallText}>global partners</Text>
                </View>
                <View>
                    <Text style={[styles.headingText, {textAlign: 'center'}]}>96%</Text>
                    <Text style={styles.smallText}>customer satisfaction</Text>
                </View>
            </View>
            <Image source={require('../assets/images/Div [h-full].png')} style={{position:'absolute', bottom: '0%', right: '16%'}}></Image>
        </View>
    )
}