import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import Counts from "../components/counts";
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductExplanation from "../components/productExplaination";
import FounderMessage from "../components/founderMessage";

export default function Debt({navigation}){
    const { width, height } = useWindowDimensions();
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{flex: 1}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                    <Defs>
                        <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id="grad2" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="  rgba(114, 206, 99, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={0} cy={'45%'} rx={'50%'} ry={"15%"} fill="url(#grad1)" />

                    <Ellipse cx={'50%'} cy={'82%'} rx={'40%'} ry={"18%"} fill="url(#grad2)" />
                </Svg>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center'}}>
                    <ImageBackground source={require("../assets/images/background2.png")} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%', overflow: 'hidden'}}>
                    {/* <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}> */}
                        <View style={{backgroundColor: '#FFFFFF1A', paddingVertical: '0.5%', paddingHorizontal: '2%', borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%', alignItems: 'center'}}>
                            <Text style={{ color: '#FFFFFF'}}>Flexible Debt Solutions for Founders</Text>
                        </View>
                        <Text style={[styles.title, {lineHeight: 78, textAlign: 'center', fontSize: 70}]}>Fuel Growth Without {'\n'} Giving Up Equity</Text>
                        <Text style={[styles.subtitle, {marginBottom: '5%', color: '#FFFFFFCC'}]}>Tailored debt funding solutions for startups and businesses</Text>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Apply for Debt Funding</Text>
                        </TouchableOpacity>
                    {/* </ExpoLinearGradient> */}
                    </ImageBackground>
                </View>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center'}}>
                    <ProductExplanation why={'Why Debt Funding?'} img1={require("../assets/images/explanation1.png")} img2={require("../assets/images/explanation2.png")} img3={require("../assets/images/explanation3.png")} reason1={'Retain full ownership of your business.'} reason2={'Predictable repayments tailored to your cash flow.'} reason3={'Perfect for scaling operations or bridging working capital gaps.'}></ProductExplanation>
                </View>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center'}}>
                    <Text style={[styles.headingText,{ marginBottom: '5%'}]}>
                        How it <Text style={{color: '#2CA560'}}>Works</Text>
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row', marginBottom: '12%'}}>
                                <Text style={{color: '#2CA560', fontSize: 32, fontWeight: 400, marginRight: '3%'}}>01</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 600}}>Apply</Text>
                                    <Text style={styles.smallText}>Submit your application with basic business details.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', opacity: 0.5, marginBottom: '12%'}}>
                                <Text style={{color: '#2CA560', fontSize: 32, fontWeight: 400, marginRight: '3%'}}>02</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 600}}>Risk Scoring</Text>
                                    <Text style={styles.smallText}>Our advanced analytics assess your eligibility and suggest funding options.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', opacity: 0.5, marginBottom: '12%'}}>
                                <Text style={{color: '#2CA560', fontSize: 32, fontWeight: 400, marginRight: '3%'}}>03</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 600}}>Matchmaking</Text>
                                    <Text style={styles.smallText}>Connect with our network of pre-vetted lenders.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', opacity: 0.5, marginBottom: '12%'}}>
                                <Text style={{color: '#2CA560', fontSize: 32, fontWeight: 400, marginRight: '3%'}}>04</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 600}}>Funding Secured</Text>
                                    <Text style={styles.smallText}>Get funds in a matter of weeks.</Text>
                                </View>
                            </View>
                        </View>
                        <Image source={require("../assets/images/man working.png")} style={{borderRadius: 20, marginLeft: '6%', flex: 1, }} resizeMode="contain"></Image>
                    </View>   
                </View>
                <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: '8%', paddingVertical: '2%', justifyContent: 'space-between'}}>
                    <Text style={[styles.headingText, {flex: 1}]}>Key Features</Text>
                    <View style={{flex: 1}}>
                        <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row'}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <View style={{marginBottom: '3%', justifyContent: 'center', flex: 1}}>
                                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 24, fontWeight: 500}}>Transparent terms.</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row'}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <View style={{marginBottom: '3%', justifyContent: 'center', flex: 1}}>
                                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 24, fontWeight: 500}}>Non-circumvention contracts ensuring a fair process.</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row'}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <View style={{marginBottom: '3%', justifyContent: 'center', flex: 1}}>
                                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize: 24, fontWeight: 500}}>Dedicated support team for every deal.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%'}}>
                    <Image source={require('../assets/images/coins_graph.png')} style={{width: '100%', borderRadius: 20, aspectRatio: 1}} resizeMode="contain"></Image>
                </View>   
            </View>
            <FounderMessage message={'The Catalyst Tree made securing debt funding effortless. We were funded in just 3 weeks!'} companyName={'TechNova'} designation={'Founder'}></FounderMessage>   
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
        
    )
}