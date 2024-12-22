import React from "react";
import { View,ScrollView, TouchableOpacity,Text, } from "react-native";
import styles from "./styles";
import Navbar from "../components/navbar";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import StartFunding from "../components/startFundingSection";
import Footer from "../components/footer";
import Svg, {Defs,RadialGradient,Stop,Ellipse,LinearGradient as SvgLinearGradient,Text as SvgText,} from "react-native-svg";


export default function FAQ() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Navbar></Navbar>
            <View style={{padding:"5%"}}>
            <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <Text style={[styles.title, {lineHeight: 78, textAlign: 'center', fontSize: 70}]}>Frequently Asked {"\n"} Question</Text>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Get Started</Text>
                        </TouchableOpacity>
                </ExpoLinearGradient>
            </View>
                <View style={{marginBottom:"5%"}}>
                    <Svg style={{position: "absolute",zIndex: -1,top: 0,left: 0,width: "100%",height: "100%"}}> 
                        <Defs>     
                            <RadialGradient id="grad1" cx="30%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">         
                                <Stop offset="10%" stopColor="rgba(44, 165, 96, 0.56)" stopOpacity="1"/>         
                                <Stop offset="100%" stopColor="black" stopOpacity="1" />     
                            </RadialGradient> 
                        </Defs> 
                        {/* Apply Radial Gradient to an Ellipse (Oval Shape) */} 
                        <Ellipse cx={0} cy={"40%"} rx={"80%"} ry={"40%"} fill="url(#grad1)" />
                    </Svg>
                    <View style={{padding: "5%"}}>
                    <Text style={[styles.headingText, {marginBottom: '4%',}]}>Frequently Asked Questions</Text>
                    <View style={{flexDirection:"row"}}> 
                            <TouchableOpacity>
                        <View style={{backgroundColor:"rgba(114, 206, 99, 1)" ,paddingVertical:12,paddingHorizontal:24,borderRadius:100, marginBottom:20,marginRight:15}} >
                                <Text style={{color:"white", textAlign:"center", fontSize:16,fontWeight:"600"}}>Overview FAQs</Text>
                        </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                        <View style={{backgroundColor:"transparent" ,paddingVertical:12,paddingHorizontal:24,borderRadius:100, marginBottom:20,marginRight:15,borderColor:"rgba(114,206,99,1)",borderWidth:1}} >
                                <Text style={{color:"rgba(114, 206, 99, 1)", textAlign:"center", fontSize:16,fontWeight:"600"}}>Safety FAQs</Text>
                        </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                        <View style={{backgroundColor:"transparent" ,paddingVertical:12,paddingHorizontal:24,borderRadius:100, marginBottom:20,marginRight:15,borderColor:"rgba(114,206,99,1)",borderWidth:1}} >
                                <Text style={{color:"rgba(114, 206, 99, 1)", textAlign:"center", fontSize:16,fontWeight:"600"}}>Cancellation FAQs</Text>
                        </View>
                            </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{paddingHorizontal:"5%"}}>
                    <FrequentlyAsked Question='What is a Bounce?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='What is the difference between the Free and Paid versions?' Answer={'Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.'}></FrequentlyAsked>
                    <FrequentlyAsked Question='What if I decide to change a plan from monthly to annually and back?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='How do I add personalised data to messages?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='How do I re-subscribe a contact who opted out or was accidentally removed?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='Do you plan on adding more features in the future?' Answer={''}></FrequentlyAsked>
                    </View>
                    </View>
                
                <StartFunding></StartFunding>
                <Footer></Footer>
                </View>
    </ScrollView>
    
  );
}

