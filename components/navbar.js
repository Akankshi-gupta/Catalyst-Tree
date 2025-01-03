import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, useWindowDimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaChevronDown } from 'react-icons/fa';
import { Hoverable } from 'react-native-gesture-handler';

export default function Navbar({ navigation }){
    const [isHovered, setIsHovered] = useState(false);
    const { width } = useWindowDimensions();

    const productOptions = [
      {productName:"Debt", productImage: require("../assets/images/product-debt.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
      {productName:"Equity", productImage: require("../assets/images/product-equity.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
      {productName:"Mergers & Acquisition", productImage: require("../assets/images/product-ma.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
      {productName:"Acceleration", productImage: require("../assets/images/product-acceleration.png"), productInfo: "Whether you're a startup with a big idea or an existing business ready to scale, we're here to help."},
    ];

    return (
        <View style={[styles.navbar, { width: width * 0.9 }]}>
          <View style={{height: 40, width: 40}}>
              {/* <Text style={styles.logoText}>LOGO</Text> */}
              <Image source={require("../assets/images/navbarProduct-logo3.png")} style={{height: 40, width: 40}} resizeMode="contain"></Image>
          </View>

          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.smallText}>Home</Text>
            </TouchableOpacity>

            <View style={styles.dropdownContainer}>
              <TouchableOpacity onMouseEnter={() => setIsHovered(!isHovered)} onPress={() => setIsHovered(!isHovered)} activeOpacity={0.7} style={{flexDirection:"row",justifyContent:"center"}}>
                  <Text style={[styles.smallText]}>Products</Text>
                  <FaChevronDown name={"chevron-down"} size={10} color="white"  style={{alignSelf:"center",paddingLeft:5}} ></FaChevronDown>
              </TouchableOpacity>

              {isHovered && (
                
                <View style={styles.dropdownMenu}>
                  {productOptions.map((productOptions, index) => (
                    <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => { setIsHovered(false); navigation.navigate(productOptions.productName);}}>
                      <Image source={productOptions.productImage} style={{height: 122, width: 179, marginBottom: '6%', borderRadius: 20}}></Image>
                      <Text style={styles.dropdownText}>{productOptions.productName}</Text>
                      <Text style={styles.productInfo}>{productOptions.productInfo}</Text>
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
          <TouchableOpacity style={[styles.buttonSecondary, { width: "16%" , borderColor: 'rgba(255, 255, 255, 1)', borderWidth: 1, borderRadius: 79, backgroundColor: 'transparent'}]} onPress={() => navigation.navigate("ContactUs")}>
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
      position: "relative",
      flexWrap: 'wrap',
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
    },
    dropdownMenu: {
      position: "absolute",
      top: "198%",
      left: -276,
      backgroundColor: "rgba(14, 14, 14,1)",
      borderWidth: 2,
      // borderTopColor: "rgba(114, 206, 99, 1)",
      // borderRightColor: "rgba(114, 206, 99, 1) rgba(114, 206, 99, 0)",
      // borderLeftColor: "rgba(114, 206, 99, 1) rgba(114, 206, 99, 0)",
      borderRadius: 20,
      zIndex: 10,
      padding: 10,
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
  