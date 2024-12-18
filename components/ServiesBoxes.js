import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
// import styles from "../screens/styles";

const InvestorServices = ({services,title}) => {
    

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { textAlign: "center" }]}>
                {title}
            </Text> 
            <View>
                {chunkArray(services, 4).map((row, rowIndex) => (
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
        <Text style={styles.boxNumber}>{no}</Text>
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
        margin: 15,
        padding: 25,
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
        height: 250,
        width: 260,
        borderRadius: 20,
        borderColor: "#72CE63",
        borderWidth: 1,
        justifyContent: "space-between",
        padding: 15,
        margin: 8,
    },
    boxNumber: {
        color:"white",
        fontSize: 48,
        fontWeight: "700",
    },
    boxText: {
        color:"white",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "left",
    },
});

export default InvestorServices;
