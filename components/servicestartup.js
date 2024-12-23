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
                {chunkArray(services,width<600?1:3).map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={[styles.rowContainer,{paddingTop:width<600?15:25,paddingHorizontal:width<600?5:25,}]}
                    >
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
    <View style={[styles.box,{
        // height:width<600?"auto":220,flexDirection:width<600?"row":"column"
        height:minWidth?"auto":250,width:minWidth?"100%":220,flexDirection:minWidth?"row":"column",justifyContent:minWidth?"flex-start":"space-between",alignContent:minWidth?"flex-start":"stretch"
        }]}>
        <FaCheckCircle name={"check-circle"} size={width<600?20:30} style={{color:"#72CE63",paddingRight:minWidth?10:0}}></FaCheckCircle>
        <Text style={[styles.boxText,{fontSize:width<600?17:18 ,textAlign:width<600?"left":"auto",flex:minWidth?6:0 }]}>{text}</Text>
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
