import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../screens/styles";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";

export default function StartFunding(){
    return(
        <View style={{backgroundColor: '#2CA560'}}>
            <Text style={{color: '#FFFFFF', fontWeight: 500, fontSize: 50}}>Global thinking. {'\n'}Global growth. </Text>
            <Svg height={70}>
                <Defs>
                    <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                        <Stop offset="0%" stopColor="#9FE870" />
                        <Stop offset="60%" stopColor="#FFFFFF" />
                        <Stop offset="100%" stopColor="#00000000" />
                    </SvgLinearGradient>
                </Defs>
                <SvgText x="5%" y="50%" fontSize="50" fontWeight="500" fill="url(#gradientText)">
                    Let's go.
                </SvgText>
            </Svg>
            <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonText1}>Start Funding</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Text style={styles.headingText}>180+</Text>
                    <Text style={styles.smallText}>countries available</Text>
                </View>
                <View>
                    <Text style={styles.headingText}>99%</Text>
                    <Text style={styles.smallText}>payroll accuracy</Text>
                </View>
                <View>
                    <Text style={styles.headingText}>500+</Text>
                    <Text style={styles.smallText}>global partners</Text>
                </View>
                <View>
                    <Text style={styles.headingText}>96%</Text>
                    <Text style={styles.smallText}>customer satisfaction</Text>
                </View>
            </View>
        </View>
    )
}