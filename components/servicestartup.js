import React from "react";
import { View, Text, StyleSheet,Image, useWindowDimensions } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { FaCheckCircle} from 'react-icons/fa';
// import styles from "../screens/styles";

const StartupServices = ({services,title}) => {
    const {height,width} = useWindowDimensions();
    return (
        <View style={styles.container}>
            <View>
                {chunkArray(services,width<600?1:1).map((row, rowIndex) => (
                    <View key={rowIndex} style={[{paddingTop:width<600?15:25,paddingHorizontal:width<600?5:25,}]}>
                        {row.map((service, index) => (
                            <Box key={index} no={service.no} text={service.text} />
                        ))}
                    </View>
                ))}
            </View>
        </View> 
    );
    
};
// Box component for individual boxes
const Box = ({ no, text }) => {
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    return(
    <View style={[{flexDirection:minWidth?"column":"row", borderBottomWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.1)', paddingBottom: '2%' }]}>
        {/* <FaCheckCircle name={"check-circle"} size={width<600?20:30} style={{color:"#72CE63",paddingRight:minWidth?10:0, width: '10%'}}></FaCheckCircle> */}
        <Image source={require('../assets/images/tick-logo.png')} style={{color:"#72CE63",paddingRight:minWidth?10:0, width: 30, height: 30, marginRight: '4%'}}></Image>
        <Text style={[styles.boxText,{fontSize:width<600?17:18 ,textAlign:width<600?"left":"auto", width: '90%'}]}>{text}</Text>
    </View>
);}

// Utility function to split array into chunks
const chunkArray = (array, size) => {
    return array.reduce((chunks, item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = [];
        }
        chunks[chunkIndex].push(item);
        return chunks;
    }, []);
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        // margin: 15,
        // padding: 25,
    },
    title: {
        fontSize: 60,
        fontWeight: "700",
        color:"white",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 25,
        paddingTop: 25,
    },
    box: {
        height: 220,
        width: 230,
        borderRadius: 20,
        borderColor: "#72CE63",
        borderWidth: 1,
        justifyContent: "space-between",
        padding: 15,
        marginHorizontal: 8,
        elevation:15,
    },
    boxNumber: {
        color:"white",
        fontSize: 38,
        fontWeight: "700",
    },
    boxText: {
        color:"white",
        fontSize: 18,
        fontWeight: "400",
        textAlign: "left",
    },
});

export default StartupServices;
