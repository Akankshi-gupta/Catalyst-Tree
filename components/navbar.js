import React from "react";
import { Touchable, View } from "react-native";

export default function Navbar(){
    return(
        <View style={{borderRadius: 24, borderWidth: 2, borderColor: '#FFFFFF1A', backgroundColor: '#FFFFFF0D', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text>LOGO</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Touchable>
                    <Text>Home</Text>
                </Touchable>
                <Touchable>
                    <Text>Products</Text>
                </Touchable>
                <Touchable>
                    <Text>For Startup</Text>
                </Touchable>
                <Touchable>
                    <Text>For Investor</Text>
                </Touchable>
            </View>
            <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonText2}>Connect Us</Text>
            </TouchableOpacity>
        </View>
    )
}