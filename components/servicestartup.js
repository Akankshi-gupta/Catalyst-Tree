import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import styles from "../screens/styles";

const StartupServices = ({services,title}) => {
    

    return (
        <View style={styles.container}>
            <View>
                {chunkArray(services, 3).map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={styles.rowContainer}
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
const Box = ({ no, text }) => (
    <View style={styles.box}>
        <Icon name={"check-circle"} size={30} style={{color:"#72CE63"}}></Icon>
        <Text style={styles.boxText}>{text}</Text>
    </View>
);

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
