import React, {useState, useEffect}  from "react";
import { v4 as uuidv4 } from 'uuid'; 
import {Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image, TextInput} from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Counts from "../components/counts";
import Icon from "react-native-vector-icons/FontAwesome";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Svg, {Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient, Text as SvgText} from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact_Us({navigation}) {
    const { width, height } = useWindowDimensions();
    const [id, setId] = useState('');
        
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Svg style={{position: "absolute",zIndex: -1,top: 0,left: 0,width: "100%",height: "100%"}}> 
                    <Defs>     
                        <RadialGradient id={`radial-gradient-${id}`} cx="30%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">         
                            <Stop offset="10%" stopColor="rgba(44, 165, 96, 0.56)" stopOpacity="1"/>         
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />     
                        </RadialGradient> 
                    </Defs> 
                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */} 
                    <Ellipse cx={0} cy={"40%"} rx={"80%"} ry={"40%"} fill={`url(#radial-gradient-${id})`} />
                </Svg>
                <Navbar navigation={navigation}></Navbar>
                <View style={{backgroundColor: "#33333399",height: height ,margin: 100,borderRadius: 24,paddingVertical: 40,paddingHorizontal: 100, marginTop: '1%'}}>
                    <View style={{flexDirection: "row",justifyContent: "space-between",borderBottomColor: "white",borderBottomWidth: 1,paddingBottom: 20,}}>
                        <Text style={{ color: "white", fontSize: 48, fontWeight: 500 }}>Contact Us</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <View style={{padding: 16,backgroundColor: "#282B27",borderRadius: 12,flexDirection: "row",}}>
                                <FaEnvelope name={"envelope"} color={"white"} size={30} />
                                <View
                                    style={{paddingHorizontal: 9,justifyContent: "space-between",}}>
                                    <Text style={{color: "#FFFFFF",size: 14,fontWeight: "500",padding: 3,}}>
                                        Send Us an Email</Text>
                                    <Text style={{color: "#FFFFFF",size: 18,fontWeight: "500",padding: 3,}}>info@wdesignkit.com</Text>
                                </View>
                            </View>
                            <View style={{ width: 20 }}></View>
                            <View
                                style={{padding: 16,backgroundColor: "#282B27",borderRadius: 12,flexDirection: "row",}}>
                                <FaPhone name={"phone"} color={"white"} size={30} style={{ transform: 'rotate(94deg)' }}  />
                                <View style={{paddingHorizontal: 9, justifyContent: "space-between",}}>
                                    <Text style={{color: "#FFFFFF",size: 14,fontWeight: "500",padding: 3,}}>
                                        Give Us a Call</Text>
                                    <Text style={{color: "#FFFFFF",size: 18,fontWeight: "500",padding: 3,}}>+1 800-525-54-589</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 32, flexDirection: "row" }}>
                        <View style={{}}>
                            <Image source={require("../assets/images/map.png")} style={{ objectFit: "cover", height: 433, width: 430 }}/>
                            <View style={{flexDirection: "row",paddingVertical: 15,}}>
                                <Text style={{ color: "white", fontSize: 24 }}>Follow Us:</Text>
                                <View style={{justifyContent: "space-around",flexDirection: "row",paddingHorizontal: 15,}}>
                                    <TouchableOpacity>
                                    <View style={{height: 35,width: 35,borderRadius: 500,borderColor: "white",borderWidth: 1,justifyContent: "center",marginRight:10}}>
                                        <FaFacebook name={"facebook"} color={"white"} size={18} style={{ alignSelf: "center" }} ></FaFacebook>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{height: 35,width: 35,borderRadius: 500,borderColor: "white",borderWidth: 1,justifyContent: "center",marginRight:10}}>
                                        <FaInstagram name={"instagram"} color={"white"} size={18} style={{ alignSelf: "center" }} ></FaInstagram>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{height: 35,width: 35,borderRadius: 500,borderColor: "white",borderWidth: 1,justifyContent: "center",marginRight:10}}>
                                        <FaTwitter name={"twitter"} color={"white"} size={18} style={{ alignSelf: "center" }} ></FaTwitter>
                                    </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{height: 35,width: 35,borderRadius: 500,borderColor: "white",borderWidth: 1,justifyContent: "center",marginRight:10}}>
                                        <FaLinkedin  name={"linkedin"} color={"white"} size={18} style={{ alignSelf: "center" }}></FaLinkedin>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:15, flex:1}}> 
                            <View style={{padding:5,flexDirection:"row",flex: 1}}>
                                <View style={{width: '50%',justifyContent: "space-around",paddingRight:15, flex:1}}>
                                    <Text style={{ color: "white", fontSize: 16 }}>
                                        First Name
                                    </Text>
                                    <TextInput placeholder="First name" placeholderTextColor={"#808080"} keyboardType="name-phone-pad" style={{paddingHorizontal: 12,borderRadius: 8,borderWidth: 1,borderColor: "white",fontSize: 14,paddingVertical: 10,color: "white",height: 48,}}
                                    ></TextInput>
                                </View>
                                <View style={{width: '50%',justifyContent: "space-around",paddingRight:15, flex:1}}>
                                    <Text style={{ color: "white", fontSize: 16 }}>
                                        Last Name
                                    </Text>
                                    <TextInput placeholder="Last name" placeholderTextColor={"#808080"} keyboardType="name-phone-pad" style={{paddingHorizontal: 12,borderRadius: 8,borderWidth: 1,borderColor: "white",fontSize: 14,paddingVertical: 10,color: "white",height: 48,}}
                                    ></TextInput>
                                </View>
                            </View>
                        <View style={{padding:5}}></View>
                        <View style={{flexDirection:"row", flex: 1}}>
                            <View style={{padding:5,flexDirection:"row",justifyContent:"space-around", flex:1}}>
                                <View style={{width: '50%',justifyContent: "space-around",paddingRight:15, flex:1}}>
                                    <Text style={{ color: "white", fontSize: 16 }}>
                                        Email
                                    </Text>
                                    <TextInput placeholder="Enter your Email" placeholderTextColor={"#808080"} keyboardType="email-address" style={{paddingHorizontal: 12,borderRadius: 8,borderWidth: 1,borderColor: "white",fontSize: 14,paddingVertical: 10,color: "white",height: 48,}} 
                                    ></TextInput>
                                </View>
                                <View style={{width: '50%',justifyContent: "space-around",paddingRight:15, flex:1}}>
                                    <Text style={{ color: "white", fontSize: 16 }}>
                                        Phone Number
                                    </Text>
                                        <TextInput placeholder="Your Number" Text placeholderTextColor={"#808080"} keyboardType="number-pad" style={{paddingHorizontal: 12,borderRadius: 8,borderWidth: 1,borderColor: "white",fontSize: 14,paddingVertical: 10,color: "white",height: 48,}}
                                    ></TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingLeft:5,paddingVertical:10,paddingRight:15}}>
                            <Text style={{ color: "white", fontSize: 16 ,marginBottom:10,}}>Your Message</Text>
                            <TextInput placeholder="Write here.." multiline  placeholderTextColor={"#808080"} style={{paddingHorizontal: 12,borderRadius: 8,borderWidth: 1,borderColor: "white",fontSize: 14,paddingVertical: 10,color: "white",height:152}}></TextInput>
                        </View>
                        <TouchableOpacity>
                            <View style={{backgroundColor:"white",borderRadius:79 ,padding:10,height:60,width:206,marginTop:20 ,justifyContent:"center"}}>
                                <Text style={{color:"#2CA560",size:20,fontWeight:"600",textAlign:"center"}}>Send Message</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
}
