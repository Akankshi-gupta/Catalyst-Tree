import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../screens/styles";

export default function Counts(){
    return(
        <View style={{flexDirection: 'row', justifyContent: "space-evenly", paddingHorizontal: "8%", paddingVertical: '4%', width: "100%" }}>
            <View style={{borderRightColor: "#D6D6D6", width: '25%', borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>500+</Text>
                <Text style={styles.countsInfo}>Outlet Services</Text>
            </View>
            <View style={{borderRightColor: "#D6D6D6", width: '25%', borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>4.8/5</Text>
                <Text style={styles.countsInfo}>Customer Review</Text>
            </View>
            <View style={{borderRightColor: "#D6D6D6", width: '25%', borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>75.5k+</Text>
                <Text style={styles.countsInfo}>Total Customer</Text>
            </View>
            <View style={{width: '25%', justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>10%</Text>
                <Text style={styles.countsInfo}>Interest Rates</Text>
            </View>
        </View>
    )
}