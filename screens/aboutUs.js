import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import Counts from "../components/counts";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaCheckCircle, FaAngleDown } from 'react-icons/fa';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutUs({navigation}){
    const { width, height } = useWindowDimensions();
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{flex: 1}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: 'transparent',}}>
                    <Defs>
                        <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={0} cy={'45%'} rx={'50%'} ry={"15%"} fill="url(#grad1)" />
                </Svg>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%',}}>
                    <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <Text style={[styles.title, {lineHeight: 78, textAlign: 'center', fontSize: 70}]}>Connecting {'\n'}Innovators with the {'\n'}Capital to Grow.</Text>
                        <Text style={[styles.subtitle, {marginBottom: '5%', color: '#FFFFFFCC'}]}>Get a car wherever and whenever you need it with your iOS or Android device.</Text>
                        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("Startup")}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Start Funding</Text>
                        </TouchableOpacity>
                    </ExpoLinearGradient>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%', marginBottom: '7%'}}>
                    <Image source={require("../assets/images/Frame 1272636721.png")} style={{width: '40%', height: '100%', borderRadius: 20, marginRight: '6%', flex: 1}}></Image>
                    <View style={{flex: 1, justifyContent: 'center', padding: '2%'}}>
                        <Text style={[styles.headingText, {lineHeight: 58,}]}>
                            Connecting Innovators with the Capital to Grow
                        </Text>
                        <Text style={{color: '#FFFFFF', fontWeight: 400, fontSize: 16, marginTop: '4%'}}>
                            The Catalyst Tree is a platform built to fuel innovation, accelerate growth, and bridge the gap between businesses and lenders/investors. Whether you're a startup seeking seed funding or an established business looking for capital to expand, we offer the flexibility and options you need—debt financing for expansion or equity funding for long-term growth.
                        </Text>
                        <Text style={{color: '#FFFFFF', fontWeight: 400, fontSize: 16, marginTop: '4%'}}>
                            We believe that great businesses deserve the right resources to succeed. Our platform provides customized solutions to match startups, small businesses, and growth-stage companies with the perfect investors who share their vision.
                        </Text>
                        
                    </View>
                </View>
                <View>
                    <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: '8%', paddingVertical: '2%', justifyContent: 'space-between'}}>
                        <Text style={[styles.headingText, {lineHeight: 58, flex: 1}]}>We've been helping customer globally.</Text>
                        <View style={{flex: 1}}>
                            <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', alignItems: "center"}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Who we are?</Text>
                                    <FaAngleDown name="angle-down" size={24} color="white" />
                                </View>
                                <Text style={[styles.smallText, {marginBottom: '3%', textAlign: 'left'}]}>Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.</Text>
                            </View>
                            <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', alignItems: "center"}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Our Mission</Text>
                                    <FaAngleDown name="angle-down" size={24} color="white" />
                                </View>
                                <Text style={[styles.smallText, {display: 'none', marginBottom: '3%', textAlign: 'left'}]}>Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.</Text>
                            </View>
                            <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', alignItems: "center"}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Our Vision</Text>
                                    <FaAngleDown name="angle-down" size={24} color="white" />
                                </View>
                                <Text style={[styles.smallText, {display: 'none', marginBottom: '3%', textAlign: 'left'}]}>Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%'}}>
                        <Image source={require('../assets/images/Frame 1.png')} style={{width: '100%', borderRadius: 20}}></Image>
                    </View>
                    <Counts></Counts>
                </View>        
            </View>
            <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginTop: '5%'}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                    <Defs>
                        <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={'50%'} cy={'50%'} rx={'50%'} ry={"50%"} fill="url(#grad1)" />
                </Svg>
                <View style={{alignItems: 'center', marginBottom: '2%'}}>
                    <Text style={[styles.headingText,{ textAlign: 'center', marginBottom: '2%'}]}>Why Choose Us</Text>
                    <Text style={[styles.smallText, {width: '50%'}]}>At the heart of our offering are a set of innovative features that have been meticulously designed to address the specific needs.</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Tailore Funding Solutions</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>Choose the financing option that fits your goals, whether it's debt for predictable cash flow or equity to bring on investors who can add value beyond just capital.</Text>
                    </View>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Diverse Investment Opportunities</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>From startups looking to disrupt industries to established businesses seeking to scale, our platform offers investors access to a wide variety of opportunities.</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Investor-Ready Startups</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>We carefully vet each business and ensure that they are ready for investment, providing investors with high-quality opportunities to invest in.</Text>
                    </View>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Global Network, Local Impact</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>With an expansive network of investors and businesses, The Catalyst Tree facilitates connections that can drive both local success and global impact.</Text>
                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginTop: '5%', alignItems: 'center'}}>
                <TouchableOpacity style={[styles.buttonSecondary,{borderColor: '#2CA560', marginTop: '4%', width: '14%'}]}>
                    <Text style={[styles.buttonText1, {color: '#2CA560'}]}>Product</Text>
                </TouchableOpacity>
                <Text style={[styles.headingText, {marginBottom: '3%'}]}>Explore Our Products</Text>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity style={{flex: 1,margin: '2%'}} onPress={() => navigation.navigate("Debt")}>
                            <Image source={require('../assets/images/Debt Funding2.png')} style={{ width: '100%', aspectRatio: 1, borderRadius: 12 }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, margin: '2%' }} onPress={() => navigation.navigate("Equity")}>
                            <Image source={require('../assets/images/Equity Funding2.png')} style={{ width: '100%', aspectRatio: 1, borderRadius: 12 }}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity style={{flex: 1, margin: '2%'}} onPress={() => navigation.navigate("Mergers & Acquisition")}>
                            <Image source={require('../assets/images/Mergers2.png')} style={{ width: '100%', aspectRatio: 1, borderRadius: 12 }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, margin: '2%' }} onPress={() => navigation.navigate("Acceleration")}>
                            <Image source={require('../assets/images/Acceleration Programs.png')} style={{ width: '100%', aspectRatio: 1, borderRadius: 12, }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginVertical: '5%', alignItems: 'center'}}>
                <View style={{alignItems: 'flex-end',}}>
                    <View style={{width: '38%', marginBottom: '4%'}}>
                        <Text style={[styles.headingText, {textAlign: 'left'}]}>Our Leadership team</Text>
                        <Text style={[styles.smallText, {textAlign: 'left'}]}>Empowering digital disruptors to achieve the extraordinary, Axel Capital brings together capital, creativity, and connectivity to turn groundbreaking ideas into global solutions.</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '1%'}}>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')}  ></Image>
                    <Image style={{flex: 2, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction men.png')} resizeMode="cover"></Image>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')} resizeMode="cover"></Image>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '1%'}}>
                    <Image style={{flex: 2, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction men.png')}  ></Image>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')} resizeMode="cover"></Image>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')} resizeMode="cover"></Image>
                </View>
            </View>
            <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginBottom: '5%'}}>
                <Text style={[styles.headingText, {marginBottom: '4%',}]}>Frequently Asked Questions</Text>
                <FrequentlyAsked Question='What is a Bounce?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='What is the difference between the Free and Paid versions?' Answer={'Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.'}></FrequentlyAsked>
                <FrequentlyAsked Question='What if I decide to change a plan from monthly to annually and back?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='How do I add personalised data to messages?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='How do I re-subscribe a contact who opted out or was accidentally removed?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='Do you plan on adding more features in the future?' Answer={''}></FrequentlyAsked>
            </View>
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
        
    )
}