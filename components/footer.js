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
        <View style={{backgroundColor: '#0E0E0E', paddingHorizontal: '8%', paddingTop: '7%'}}>
            <Image source={require('../assets/images/Logo.png')} style={{marginBottom: '4%'}}></Image>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%'}}>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width:minWidth?"auto" :'20%', paddingVertical: '1%',paddingHorizontal:minWidth?"1%":""}}>
                    <Text style={footerStyles.smallText}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={footerStyles.smallText}>Behance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={footerStyles.smallText}>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={footerStyles.smallText}>Dribble</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%'}}>
                <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={{ marginBottom: '8%'}}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>For Startup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: '8%'}}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start'}]}>For Investors</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={{marginBottom: '8%'}} onPress={() => navigation.navigate("AboutUs")}>
                        <Text style={[footerStyles.smallText, {color: '#808080', textAlign: 'start',}]}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
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
                        <TextInput  style={{backgroundColor: '#FFFFFF', width: '62%', paddingVertical: '2%', borderRadius:minWidth?5: 8,paddingHorizontal:"2%",marginBottom:minWidth?5:"auto",fontSize:minWidth?10:15}}></TextInput>
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