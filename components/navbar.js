import React, { useState, useRef } from "react";
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, Image, Animated  } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaChevronDown } from 'react-icons/fa';
import { Hoverable } from 'react-native-gesture-handler';

export default function Navbar({ navigation }){
    const [isHovered, setIsHovered] = useState(false);
    const { width } = useWindowDimensions();

    const dropdownHeight = useRef(new Animated.Value(0)).current;
    const dropdownOpacity = useRef(new Animated.Value(0)).current;
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleDropdown = (isHovered) => {
      Animated.timing(dropdownHeight, {
        toValue: isHovered ? 256 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(dropdownOpacity, {
        toValue: isHovered ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    const productOptions = [
      {productName:"Debt", productImage: require("../assets/images/product-debt.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
      {productName:"Equity", productImage: require("../assets/images/product-equity.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
      {productName:"Mergers & Acquisition", productImage: require("../assets/images/product-ma.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
      {productName:"Acceleration", productImage: require("../assets/images/product-acceleration.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
    ];

    return (
        <View style={[styles.navbar, { width: width * 0.9 }]}>
          <TouchableOpacity style={{height: 40, width: 40}} onPress={() => navigation.navigate("Home")}>
              {/* <Text style={styles.logoText}>LOGO</Text> */}
              <Image source={require("../assets/images/navbarProduct-logo3.png")} style={{height: 40, width: 40}} resizeMode="contain"></Image>
          </TouchableOpacity>

          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.smallText}>Home</Text>
            </TouchableOpacity>

            <View style={[styles.dropdownContainer, { justifyContent: 'center'}]} onMouseEnter={() => {setIsHovered(true); toggleDropdown(true)}} onMouseLeave={() => { setIsHovered(false); toggleDropdown(false)}} onPress={() => {setIsHovered(true); toggleDropdown(true);}}>
              <TouchableOpacity  activeOpacity={0.7} style={{flexDirection:"row",justifyContent:"center", height: '108%'}}>
                  <Text style={[styles.smallText]}>Products for Startups</Text>
                  <FaChevronDown name={"chevron-down"} size={10} color="white"  style={{alignSelf:"center",paddingLeft:5}} ></FaChevronDown>
              </TouchableOpacity>

              {/* {isHovered && ( */}
                <Animated.View style={[styles.dropdownMenu, { height: dropdownHeight, opacity: dropdownOpacity, overflow: 'hidden', padding: isHovered ? 10 : 0, borderWidth: isHovered ? 2 : 0, }]}>
                  {productOptions.map((productOptions, index) => (
                    <TouchableOpacity key={index} style={[styles.dropdownItem, {borderWidth: hoveredIndex === index ? 1 : 0, borderColor: hoveredIndex === index ? "white" : "transparent", borderRadius: 8,}]} onPress={() => { setIsHovered(true); navigation.navigate(productOptions.productName);}} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                      <Image source={productOptions.productImage} style={{height: 122, width: 179, marginBottom: '6%', borderRadius: 20}}></Image>
                      <Text style={styles.dropdownText}>{productOptions.productName}</Text>
                      <Text style={styles.productInfo}>{productOptions.productInfo}</Text>
                    </TouchableOpacity>
                  ))}
                </Animated.View>
                
              {/* )} */}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Startup")}>
              <Text style={styles.smallText}>For Startup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Investor")}>
              <Text style={styles.smallText}>For Investor</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.buttonSecondary, { width: "16%" , borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 79, backgroundColor: 'transparent'}]} onPress={() => navigation.navigate("ContactUs")}>
              <Text style={styles.buttonText2}>Contact Us</Text>
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
      width: "35%",
      justifyContent: "space-between",
      position: "relative",
      flexWrap: 'wrap',
      height: '128%',
      alignItems: 'center'
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
      position: "relative",
      height: '100%',
      alignItems: 'center'
    },
    dropdownMenu: {
      position: "absolute",
      top: "104%",
      left: -276,
      backgroundColor: "rgba(14, 14, 14,1)",
      // borderTopColor: "rgba(114, 206, 99, 1)",
      // borderRightColor: "rgba(114, 206, 99, 1) rgba(114, 206, 99, 0)",
      // borderLeftColor: "rgba(114, 206, 99, 1) rgba(114, 206, 99, 0)",
      borderRadius: 20,
      zIndex: 10,
      width: 828,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row'
    },
    dropdownItem: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 4,
      backgroundColor: "transparent",
      marginBottom: 4,
      flex: 1,
    },
    dropdownText: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: 16,
      fontWeight: 600,
      marginBottom: '6%',
    },
    productInfo:{
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: 12, 
      fontWeight: 400,
    }
});
  