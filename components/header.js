import React from "react";
import { View, Text, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import styles from "../screens/styles";

const Header = ({ title, description, buttonText, imageSource, onButtonPress }) => {
    const { width, height } = useWindowDimensions();
    const minWidth= width<600;
    return (
        <View style={{ flexDirection:minWidth?"column-reverse": "row", justifyContent:minWidth?"flex-end" :"space-around",height:minWidth?"60vh":"auto" ,marginTop:minWidth?"10%":"auto" }}>
            <View style={{ width:minWidth?"100%": width * 0.5, height:minWidth?"30%":"auto",paddingLeft: '4%', alignContent: 'center',justifyContent:"space-evenly",marginTop:minWidth?"10%":"auto" }}>
                <Text style={[styles.title, {fontSize: minWidth?40:80,textAlign:minWidth?"center":"left"}]}>{title}</Text>
                <Text
                    style={{
                        fontSize: minWidth?18:18,
                        color: "white",
                        marginVertical: "2%",
                        fontWeight: 400,
                        marginHorizontal:minWidth?"1%":"auto",
                        lineHeight:minWidth? "auto":21.78,
                        textAlign:minWidth?"center":"left",
                    }}
                >
                    {description}
                </Text>
                <View style={[styles.buttonContainer, { marginTop: 25 ,alignSelf:minWidth?"center":"auto"}]}>
                    <TouchableOpacity
                        style={[styles.buttonPrimary, { marginHorizontal: 0, }]}
                        onPress={onButtonPress}
                    >
                        <Text style={styles.buttonText3}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image
                    source={imageSource}
                    style={{ height:minWidth?height*0.2 :height * 0.6, width:minWidth?height*0.2: height * 0.6 ,alignSelf:minWidth?"center":"flex-start"}}
                />
            </View>
        </View>
    );
};

export default Header;
