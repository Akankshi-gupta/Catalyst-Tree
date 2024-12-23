import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { useWindowDimensions } from "react-native-web";
// import styles from "../screens/styles";

const InvestorServices = ({services,title}) => {
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    return (
        <View style={[styles.container,{paddingHorizontal:minWidth?10:25}]}>
            <Text style={[styles.title, { fontSize:minWidth?35:60,textAlign: "center" }]}>
                {title}
            </Text> 
            <View>
                {chunkArray(services, 4).map((row, rowIndex) => (
                    <View
                        key={rowIndex}
                        style={[styles.rowContainer,{flexDirection:minWidth?"column":"row",paddingTop:minWidth?5:25,paddingHorizontal:minWidth?10:25}]}
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
    <View style={[styles.box,{height:minWidth?"auto":250,width:minWidth?"100%":260,flexDirection:minWidth?"row":"column",justifyContent:minWidth?"flex-start":"space-between",alignContent:minWidth?"flex-start":"stretch"}]}>
        <Text style={[styles.boxNumber,{fontSize:minWidth?25:48,paddingRight:minWidth?10:0}]}>{no}</Text>
        <Text style={[styles.boxText,{fontSize:minWidth?17:20,alignContent:"center"}]}>{text}</Text>
    </View>
    );
}

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
        fontSize:60,
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
