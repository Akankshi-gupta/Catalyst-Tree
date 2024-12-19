import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backgroundImage: {
        resizeMode: "cover",
        justifyContent: "center",
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        overflow: 'hidden',
    },
    overlay: {
        flex: 1,
        // width: Dimensions.get('window').width, // Dynamically adjust width
        // height: Dimensions.get('window').height,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: "5%",
    },
    title: {
        fontSize: 62,
        color: "white",
        fontWeight: 600,
        textAlign: "left",
        marginBottom: 10,
        lineHeight: 66.75,
    },
    subtitle: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        marginBottom: "2%",
        marginTop: "2%",
        fontWeight: 400,
        lineHeight: 21.78,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
    },
    buttonPrimary: {
        backgroundColor: "#ffffff",
        paddingVertical: 15,
        paddingHorizontal: 28,
        borderRadius: 79,
        marginHorizontal: 5,
    },
    buttonSecondary: {
        backgroundColor: "transparent",
        paddingVertical: 15,
        paddingHorizontal: 28,
        borderRadius: 79,
        marginHorizontal: 5,
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    buttonText1: {
        color: "#2CA560",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
    },
    buttonText2: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
    },
    homeSection1:{
        flex: 1,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        // height: '100%',
    },
    counts: {
        fontWeight: 500,
        fontSize: 48,
        color: "#2CA560",
    },
    countsInfo: {
        color: '#808080',
        fontWeight: 400,
        fontSize: 20,
    },
    fundingInfoView: {
        flex: 1,
        width: '25%',
        backgroundColor: '#FFFFFF33',
        borderColor: '#2CA560',
        borderWidth: 1,
        padding: '2%',
        borderRadius: 12,
        // flexWrap: 'wrap',  
    },
    fundingInfoTitle: {
        color: '#FFFFFF', 
        fontWeight: 600, 
        fontSize: 24,
        flex: 1,
    },
    fundingInfoText: {
        fontWeight: 400, 
        fontSize: 12, 
        color: 'rgb(202, 198, 198)',
        flex: 1,
    },
    fundingInfo: {
        flexDirection: 'row', 
        gap: 10, 
        alignItems: "center",
        flex: 1,
    },
    buttonText3: {
        color: "#0E0E0E",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
    }, 
    headingText: {
        color: '#FFFFFF', 
        fontWeight: 500, 
        fontSize: 46,
    },
    smallText: {
        textAlign: 'center', 
        color: '#FFFFFFCC', 
        fontWeight: 400, 
        fontSize: 16
    }

});

export default styles;
  