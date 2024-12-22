import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar({ navigation }){
    const [isHovered, setIsHovered] = useState(false);
    const { width } = useWindowDimensions();

    const productOptions = ["Debt", "Equity", "Mergers & Acquisition", "Acceleration"];

    return (
        <View style={[styles.navbar, { width: width * 0.9 }]}>
        {/* Logo */}
        <View>
            <Text style={styles.logoText}>LOGO</Text>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.smallText}>Home</Text>
            </TouchableOpacity>

            {/* Products Dropdown */}
            <View style={styles.dropdownContainer}>
            <TouchableOpacity
                onPress={() => setIsHovered(!isHovered)} // Toggle dropdown on press
                activeOpacity={0.7}
                style={{flexDirection:"row",justifyContent:"center"}}
            >
                <Text style={styles.smallText}>Products</Text>
                <FaChevronDown name={"chevron-down"} size={10} color="white"  style={{alignSelf:"center",paddingLeft:5}} ></FaChevronDown>
            </TouchableOpacity>

            {isHovered && (
                <View style={styles.dropdownMenu}>
                {productOptions.map((option, index) => (
                    <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                        setIsHovered(false); // Close dropdown on selection
                        navigation.navigate(option); // Navigate to the selected product
                    }}
                    >
                    <Text style={styles.dropdownText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            )}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Startup")}>
            <Text style={styles.smallText}>For Startup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Investor")}>
            <Text style={styles.smallText}>For Investor</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.buttonSecondary, { width: "16%" }]} onPress={() => navigation.navigate("ContactUs")}>
            <Text style={styles.buttonText2}>Connect Us</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
      borderRadius: 24,
      borderWidth: 2,
      borderColor: "#FFFFFF1A",
      backgroundColor: "#FFFFFF0D",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: "0.5%",
      paddingHorizontal: "3%",
      marginVertical: "2%",
      marginHorizontal: "4%",
      zIndex:1
    },
    logoText: {
      color: "#FFFFFF",
      fontSize: 32,
      fontWeight: "700",
    },
    menu: {
      flexDirection: "row",
      width: "30%",
      justifyContent: "space-between",
      position: "relative", // Important for dropdown positioning
    },
    smallText: {
      color: "#FFFFFF",
      fontSize: 16,
      alignSelf: "center",
    },
    buttonSecondary: {
      backgroundColor: "#FFFFFF1A",
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText2: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "600",
    },
    dropdownContainer: {
      position: "relative", // Allows dropdown to position correctly below
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%", // Position just below the Products tab
      left: 0,
      backgroundColor: "#FFFFFF0D",
      borderWidth: 2,
      borderColor: "#FFFFFF1A",
      borderRadius: 8,
      zIndex: 10, // Ensure it appears above other elements
      padding: 10,
      width: 150,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Shadow effect on Android
    },
    dropdownItem: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 4,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      marginBottom: 4,
    },
    dropdownText: {
      color: "#FFFFFF",
      fontSize: 14,
    },
});
  