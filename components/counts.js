import React,  { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Animated, ScrollView, Dimensions } from "react-native";
import styles from "../screens/styles";

export default function Counts(){
    return(
        <View style={{flexDirection: 'row', justifyContent: "space-evenly", paddingHorizontal: "8%", paddingVertical: '4%', width: "100%" }}>
            <View style={{borderRightColor: "#D6D6D6", width: '25%', borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>200+</Text>
                <Text style={styles.countsInfo}>Investor database</Text>
            </View>
            <View style={{borderRightColor: "#D6D6D6", width: '25%', borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>16+</Text>
                <Text style={styles.countsInfo}>Industry Served</Text>
            </View>
            <View style={{borderRightColor: "#D6D6D6", width: '25%', borderWidth: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>NN</Text>
                <Text style={styles.countsInfo}>Acceleration Partners</Text>
            </View>
            <View style={{width: '25%', justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.counts}>N</Text>
                <Text style={styles.countsInfo}>Startup Numbers</Text>
            </View>
        </View>
    )

    // const counters = [
    //     { targetValue: 200, label: 'Investor database' },
    //     { targetValue: 16, label: 'Industry Served' },
    //     { targetValue: 10, label: 'Acceleration Partners' }, // Replace NN with real number
    //     { targetValue: 30, label: 'Startup Numbers' }, // Replace N with real number
    //   ];
    
    //   const animatedValues = counters.map(() => useRef(new Animated.Value(0)).current);
    
    //   useEffect(() => {
    //     if (isVisible) {
    //       counters.forEach((_, index) => {
    //         Animated.timing(animatedValues[index], {
    //           toValue: counters[index].targetValue,
    //           duration: 2000,
    //           useNativeDriver: false,
    //         }).start();
    //       });
    //     }
    //   }, [isVisible]);
    
    //   return (
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: '8%', paddingVertical: '4%', width: '100%' }}>
    //       {counters.map((counter, index) => (
    //         <View
    //           key={index}
    //           style={{
    //             borderRightColor: '#D6D6D6',
    //             width: '25%',
    //             borderWidth: 1,
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //           }}
    //         >
    //           <Animated.Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
    //             {animatedValues[index].interpolate({
    //               inputRange: [0, counter.targetValue],
    //               outputRange: ['0', counter.targetValue.toString()],
    //               extrapolate: 'clamp',
    //             })}
    //           </Animated.Text>
    //           <Text style={{ color: 'gray', fontSize: 14 }}>{counter.label}</Text>
    //         </View>
    //       ))}
    //     </View>
    //   );
}