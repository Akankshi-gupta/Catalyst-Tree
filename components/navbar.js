import React from "react";
import { TouchableOpacity, View , Text} from "react-native";
import styles from "../screens/styles";

export default function Navbar({ navigation }){
    return(
        <View style={{borderRadius: 24, borderWidth: 2, borderColor: '#FFFFFF1A', backgroundColor: '#FFFFFF0D', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: '0.5%', paddingHorizontal: '3%', marginVertical: '2%', marginHorizontal: '4%'}}>
            <View>
                <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 700, }}>LOGO</Text>
            </View>
            <View style={{flexDirection: 'row', width: '30%', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.smallText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.smallText}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Startup")}>
                    <Text style={styles.smallText}>For Startup</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Investor")}>
                    <Text style={styles.smallText}>For Investor</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.buttonSecondary,{ width: '16%'}]}>
                <Text style={styles.buttonText2}>Connect Us</Text>
            </TouchableOpacity>
        </View>
    )
}