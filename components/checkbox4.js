import React from "react";
import { View, Text, StyleSheet,useWindowDimensions, Image } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome"; // Ensure the icon library is imported
import { FaCheckCircle} from 'react-icons/fa';

const CheckBox4 = ({title}) => {
        const {height, width } = useWindowDimensions();
        const minWidth = width<600;
    const features = [
        {
            title: "Real-Time Deal Tracking:",
            description:"Stay updated with automated notifications and progress updates.",
        },
        {
            title: "Customizable Dashboards",
            description:"Monitor startups, evaluate performance, and track your portfolio effortlessly.",
        },
        {
            title: "Investor Community",
            description:"Collaborate with other investors and co-invest in promising ventures.",
        },
        {
            title: "Secure Documentation",
            description:"Review, sign, and store deal-related documents directly on the platform.",
        },
    ];

    return (
        <View style={[styles.container, {marginBottom: '10%'}]}>
            <View style={styles.headerContainer}>
                <Text style={[styles.headingText,{fontSize:minWidth?35:48, fontWeight: 500}]}>{title}</Text>
            </View>
            {features.reduce((rows, feature, index) => {
                const rowIndex = Math.floor(index / 2);
                if (!rows[rowIndex]) rows[rowIndex] = [];
                rows[rowIndex].push(feature);
                return rows;
            }, []).map((row, rowIndex) => (
                <View key={rowIndex} style={[styles.rowContainer,{width: '74%'}]}>
                    {row.map((feature, featureIndex) => (
                        <FeatureBox
                            key={featureIndex}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

const FeatureBox = ({ title, description }) =>{ 
        const {height, width } = useWindowDimensions();
        const minWidth = width<600;
    return(
    <View style={styles.featureBox}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: '2%'}}>
            <Image source={require('../assets/images/tickmark-img.png')} style={{height: 32, width: 32, marginRight: '2%'}}></Image>
            <Text style={[styles.featureTitle,{fontSize:minWidth?18:25}]}>{title}</Text>
        </View>
        <Text style={[styles.smallText, { textAlign: "start" }]}>{description}</Text>
    </View>
);}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: "2%",
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: "2%",
    },
    headingText: {
        fontSize: 60,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "2%",
        color: "#FFFFFF",
    },
    smallText: {
        fontSize: 16,
        color: "#D6D6D6",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    featureBox: {
        backgroundColor: "#FFFFFF0D",
        borderRadius: 20,
        borderColor: "#D6D6D6",
        borderWidth: 1,
        flex: 1,
        width:"50%",
        paddingHorizontal: "3%",
        paddingVertical: "4%",
        margin: "2%",
    },
    featureTitle: {
        fontWeight: "600",
        fontSize: 25,
        color: "#FFFFFF",
        letterSpacing: 1,
        marginBottom: "2%",
    },
});

export default CheckBox4;
