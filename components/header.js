import React from "react";
import { View, Text, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import styles from "../screens/styles";

const Header = ({ title, description, buttonText, imageSource, onButtonPress }) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={{ width: width * 0.5, padding: 100 }}>
                <Text style={styles.title}>{title}</Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: "white",
                        marginBottom: "2%",
                        marginTop: "2%",
                        fontWeight: 400,
                        lineHeight: 21.78,
                    }}
                >
                    {description}
                </Text>
                <View style={[styles.buttonContainer, { marginTop: 25 }]}>
                    <TouchableOpacity
                        style={[styles.buttonPrimary, { marginHorizontal: 0 }]}
                        onPress={onButtonPress}
                    >
                        <Text style={styles.buttonText3}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image
                    source={imageSource}
                    style={{ height: height * 0.6, width: height * 0.6 }}
                />
            </View>
        </View>
    );
};

export default Header;
