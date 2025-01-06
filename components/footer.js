import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput, useWindowDimensions } from "react-native";
import styles from "../screens/styles";

export default function Footer({navigation}){
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    
    const footerStyles = ({
            smallText: {
                textAlign: 'center', 
                color: '#FFFFFFCC', 
                fontWeight: 400, 
                fontSize: width<600?12:16,   
            }
    });
    return(
        <View style={{backgroundColor: '#0E0E0E', paddingHorizontal: '8%', paddingTop: '6%'}}>
            <View style={{flexDirection: 'row', marginBottom: '4%', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
                    <Image source={require('../assets/images/footer-logo.png')} style={{height: 120, width: 120, marginRight: '2%'}} resizeMode="contain"></Image>
                    <Text style={{fontSize: 19, fontWeight: 600, color: 'rgba(106, 204, 52, 1)', }}>The Catalyst Tree</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '20%', alignItems: 'center',}}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/instagram-vector.png')} style={{height: 24, width: 24}} resizeMode="contain"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/twitter-vector.png')} style={{height: 24, width: 24}} resizeMode="contain"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/facebook-vector.png')} style={{height: 24, width: 24}} resizeMode="contain"></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/whatsapp-vector.png')} style={{height: 24, width: 24}} resizeMode="contain"></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%'}}>
                <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={{ marginBottom: '8%'}} onPress={() => navigation.navigate("Startup")}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>For Startup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: '8%'}} onPress={() => navigation.navigate("Investor")}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start'}]}>For Investors</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={{marginBottom: '8%'}} onPress={() => navigation.navigate("AboutUs")}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>Pricing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}} onPress={() => navigation.navigate("FAQ")}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>FAQ's</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '45%'}}>
                    <Text style={[styles.headingText, {fontSize: minWidth?14:20, marginBottom: '4%'}]}>Subscribe Our Newsletter.</Text>
                    <View style={{flexDirection:minWidth?"column" :'row', justifyContent: 'space-between'}}>
                        <TextInput placeholder="Email address" placeholderTextColor={'rgba(214, 214, 214, 1)'} style={{backgroundColor: '#FFFFFF', width: '62%', paddingVertical: '2%', borderRadius:minWidth?5: 8,paddingHorizontal:"2%",marginBottom:minWidth?5:"auto",fontSize:minWidth?10:15}}></TextInput>
                        <TouchableOpacity style={{backgroundColor: '#FFFFFF', borderRadius: minWidth?5:8,  width: minWidth?'50%':"30%", alignItems: 'center', justifyContent: 'center'}} >
                            <Text style={[footerStyles.smallText, {color: '#0E0E0E' , paddingVertical: '2%'}]}>Book a Demo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{borderTopColor: '#D6D6D6', borderTopWidth: 1, padding: '2%'}}>
                <Text style={footerStyles.smallText}>The Catalyst Tree 2024 All right reserved.</Text>
            </View>
        </View>
    )
}