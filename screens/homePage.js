import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
// import { Image } from 'react-native-expo-image-cache';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import Counts from "../components/counts";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaCheckCircle} from 'react-icons/fa';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import UserFeedback from '../components/userFeedback';
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import { ScrollView } from "react-native-web";

export default function Home({navigation}){
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.homeSection1}>
                <ImageBackground source={require("../assets/images/background.png")} style={[styles.backgroundImage, { width, height }]}>
                    <ExpoLinearGradient colors={["rgba(114, 206, 99, 0.8)" ,"rgba(44, 165, 96, 0.8)","transparent", "transparent", "transparent"]} style={{flex: 1}} start={{ x: 0, y: 1 }} end={{ x: 0.5, y: 0  }}>
                        <Navbar style={{ marginTop: '4%'}} navigation={navigation}></Navbar>
                        <View style={[styles.overlay,{justifyContent:"flex-end",alignContent:"flex-start"}]} >
                            <Text style={[styles.title,{fontSize:minWidth?50:62}]}>
                                Empowering {minWidth?'\n':""}Startups,{'\n'}Investors, and {minWidth?'\n':""}Businesses {'\n'}to Scale  New Heights.
                            </Text>
                            <Text style={styles.subtitle}>
                                Your Gateway to Debt, Equity, M&A, and Acceleration Services—Simplified and Smarter.
                            </Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("Startup")}>
                                    <Text style={styles.buttonText1}>Find Funding</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.buttonSecondary,{paddingHorizontal:width*0.07}]} onPress={() => navigation.navigate("Investor")}>
                                    <Text style={styles.buttonText2}>Join as Investor</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </ExpoLinearGradient>
                </ImageBackground>
            </View>
            <View style={{alignItems: "center"}}>
                <Counts></Counts>
            </View>
            {/* <View>
                <ExpoLinearGradient colors={["black", "rgba(44, 165, 96, 0.8)","black"]} style={[styles.overlay,{paddingHorizontal: "6%"}]} start={{ x: 0, y: 1 }} end={{ x: 0.5, y: 0 }}>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", width: "100%", alignItems: 'center'}}>
                        <Text style={[styles.headingText, {lineHeight: 58}]}>Choose the Right Funding {minWidth?" ":'\n'}for Your Business. </Text>
                        <Text style={{fontSize: 18, fontWeight: 400, lineHeight: 21, color: 'rgb(202 198 198)'}}>Not sure whether debt or equity is the right choice for {minWidth?" ":'\n'}your business? Let us guide you through the decision. </Text>
                    </View>
                    <View style={{flexDirection: "row", flex: 1, gap: 6, width: "100%", marginTop: '5%'}}>
                        <View style={styles.fundingInfoView}>
                            <Image source={require("../assets/images/debt funding.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Debt Funding</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Keep full ownership of your business.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Flexible repayment terms.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Fixed interest rates and predictable cash flow.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Ideal for businesses that need capital without diluting equity.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fundingInfoView}>
                            <Image source={require("../assets/images/equity funding.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Equity Funding</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Raise capital by offering ownership in your business.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Attract long-term investors who are invested in your success.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Ideal for businesses looking to scale quickly and share the risk and reward.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fundingInfoView}>
                            <Image  source={require("../assets/images/mergers.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Mergers & Acquisitions</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Find the perfect partner with AI-driven matchmaking.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Get expert guidance for valuation and deal structuring.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Streamline due diligence with integrated tools.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Maximize value with tailored exit strategies.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fundingInfoView}>
                            <Image  source={require("../assets/images/acceleration.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Acceleration Programs</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Access mentorship from industry leaders.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Learn from exclusive workshops and webinars.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Leverage discounted tools and services to scale faster.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Gain exposure to top-tier investors through demo days.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", width: "100%", marginTop: '5%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={[styles.fundingInfoTitle, {fontSize: 26}]}>Let us help you decide which option aligns best with your business goals.</Text>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={styles.buttonText1}>Get In Touch With Us</Text>
                        </TouchableOpacity>
                    </View>
                </ExpoLinearGradient>   
            </View> */}
            <View style={{height:width<600?"85vh":"auto"}}>
                <ExpoLinearGradient colors={["transparent", "transparent", "transparent", "rgba(44, 165, 96, 0.8)"]} style={[styles.overlay, {flexDirection: minWidth?'column-reverse':'row', justifyContent: 'center',alignContent:"flex-start",marginTop:minWidth?0:0}]} start={{ x: 1, y: 0 }} end={{ x: 1, y: 0  }}>
                    <View>
                        <View style={{backgroundColor: '#FFFFFF1A',borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%', width:minWidth?"90%" :'66%', alignItems: 'center'}}>
                            <Text style={{ color: '#FFFFFF'}}>For Investors (HNIs, Angels, VCs, Family Offices)</Text>
                        </View>
                        <Text style={[styles.headingText, {lineHeight:minWidth? "auto":58, marginTop: '4%'}]}>
                            Invest in the Future.{minWidth?" ":'\n'}Make Your Money Work {minWidth?" ":'\n'}Smarter.
                        </Text>
                        <Text style={{color: '#FFFFFF', fontWeight: 400, fontSize: 16, marginTop: '4%'}}>
                            The Catalyst Tree offers investors access to a wide range of {minWidth?" ":'\n'} opportunities across industries and business stages. Whether you're {minWidth?" ":'\n'} seeking debt investments with steady returns or equity stakes with {minWidth?" ":'\n'} high-growth potential, we have investment opportunities to match your {minWidth?" ":'\n'} strategy and risk appetite.
                        </Text>
                        <TouchableOpacity style={[styles.buttonSecondary,{borderColor: '#2CA560', marginTop: '4%', width: '50%'}]} onPress={() => navigation.navigate("Investor")}>
                            <Text style={[styles.buttonText1, {color: '#2CA560'}]}>Start Investing Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Image  source={require("../assets/images/investors.png")} style={{width: minWidth?"60%":'40%', height:minWidth?"30%":'100%', borderRadius: 20, marginLeft: '6%',alignSelf:minWidth?"center":"auto",marginBottom:minWidth?20:"auto"}}></Image>
                </ExpoLinearGradient>
            </View>    
            <View style={{height:width<600?"70vh":"auto",justifyContent:minWidth?"flex-start":"flex-start"}}>
                <ExpoLinearGradient colors={["transparent", "transparent", "transparent", "rgba(44, 165, 96, 0.8)"]} style={[styles.overlay, {flexDirection: minWidth?'column':'row', justifyContent: 'center',marginTop:minWidth?0:0}]} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0  }}>
                    <Image  source={require("../assets/images/Business.png")} style={{width: minWidth?"60%":'40%', height:minWidth?"30%": '100%', borderRadius: 20, marginRight: '6%',marginBottom:minWidth?20:"auto"}}></Image>
                    <View>
                        <View style={{backgroundColor: '#FFFFFF1A', padding: '2%',borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%',width:minWidth?"90%" :'75%', alignItems: 'center'}}>
                            <Text style={{ color: '#FFFFFF',textAlign:"center"}}>For Business Owners (Startups & Existing Businesses)</Text>
                        </View>
                        <Text style={[styles.headingText, {lineHeight:minWidth? "auto":58, marginTop: '4%'}]}>
                            Ready to Take Your {minWidth?" ":'\n'}Business to the Next {minWidth?" ":'\n'}Level?
                        </Text>
                        <Text style={{color: '#FFFFFF', fontWeight: 400, fontSize: 16, marginTop: '4%'}}>
                            Whether you're a startup with a big idea or an existing business ready {minWidth?" ":'\n'}to scale, we're here to help.
                        </Text>
                        <TouchableOpacity style={[styles.buttonSecondary,{borderColor: '#2CA560', marginTop: '4%', width: '60%'}]} onPress={() => navigation.navigate("Startup")}>
                            <Text style={[styles.buttonText1, {color: '#2CA560'}]}>Apply For Funding Now</Text>
                        </TouchableOpacity>
                    </View>
                </ExpoLinearGradient>
            </View>   
            <View>
                <ExpoLinearGradient colors={["black", "rgba(44, 165, 96, 0.8)","black"]} style={[styles.overlay,{paddingHorizontal: "6%"}]} start={{ x: 0, y: 1 }} end={{ x: 0.5, y: 0 }}>
                    <View style={{flexDirection:minWidth?"column": 'row', justifyContent: "space-between", width: "100%", alignItems: 'center'}}>
                        <Text style={[styles.headingText, {lineHeight: 58}]}>Choose the Right Funding {minWidth?" ":'\n'}for Your Business. </Text>
                        <Text style={{fontSize: 18, fontWeight: 400, lineHeight: 21, color: 'rgb(202 198 198)'}}>Not sure whether debt or equity is the right choice for {minWidth?" ":'\n'}your business? Let us guide you through the decision. </Text>
                    </View>
                    <View style={{flexDirection:minWidth? "column":"row", flex: 1, gap: 6, width: "100%", marginTop: '5%'}}>
                        <View style={styles.fundingInfoView}>
                            <Image source={require("../assets/images/debt funding.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Debt Funding</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Keep full ownership of your business.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Flexible repayment terms.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Fixed interest rates and predictable cash flow.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Ideal for businesses that need capital without diluting equity.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fundingInfoView}>
                            <Image source={require("../assets/images/equity funding.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Equity Funding</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Raise capital by offering ownership in your business.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Attract long-term investors who are invested in your success.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Ideal for businesses looking to scale quickly and share the risk and reward.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fundingInfoView}>
                            <Image  source={require("../assets/images/mergers.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Mergers & Acquisitions</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Find the perfect partner with AI-driven matchmaking.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Get expert guidance for valuation and deal structuring.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Streamline due diligence with integrated tools.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Maximize value with tailored exit strategies.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.fundingInfoView}>
                            <Image  source={require("../assets/images/acceleration.png")} style={{borderRadius: 12, height: 138, width: '100%'}}></Image>
                            <View style={{gap: 10, marginTop: "5%"}}>
                                <Text style={styles.fundingInfoTitle}>Acceleration Programs</Text>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Access mentorship from industry leaders.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Learn from exclusive workshops and webinars.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Leverage discounted tools and services to scale faster.</Text>
                                </View>
                                <View style={styles.fundingInfo}>
                                    <FaCheckCircle name="check-circle" size={30} color="white" />
                                    <Text style={styles.fundingInfoText}>Gain exposure to top-tier investors through demo days.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:minWidth?"column":"row", width: "100%", marginTop: '5%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={[styles.fundingInfoTitle, {fontSize:minWidth?18: 26,marginBottom:minWidth?30:"auto"}]}>Let us help you decide which option aligns best with your business goals.</Text>
                        <TouchableOpacity style={styles.buttonPrimary}  onPress={() => navigation.navigate("ContactUs")}>
                            <Text style={styles.buttonText1}>Get In Touch With Us</Text>
                        </TouchableOpacity>
                    </View>
                </ExpoLinearGradient>   
            </View>
        <View style={{paddingVertical:minWidth?"5%":"auto",}}> 
            <View>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%'}}>
                    <Defs>
                        <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={width / 2} cy={height / 2} rx={'80%'} ry={"70%"} fill="url(#grad1)" />
                </Svg>
                <View style={{backgroundColor: 'rgba(51 51 51 / 0.29)', borderRadius: 24, alignItems: 'center', paddingVertical: "4%", paddingHorizontal: "6%"}}>
                    <View style={{justifyContent: 'center', alignItems: "center", borderRadius: 50, borderColor: '#FFFFFF', borderWidth: 1, width: minWidth?"60%":'30%', padding: '1%', marginBottom: '1%'}}>
                        <Text style={{color: '#FFFFFF', fontWeight: 500, }}>How It Works Section</Text>
                    </View>
                    <Text style={[styles.headingText, {marginBottom: '1%'}]}>Simple, Transparent, Powerful.</Text>
                    <Text style={[{width:minWidth?"80%" :'36%', marginBottom: '4%'}, styles.smallText]}>Getting started with The Catalyst Tree is easy. Here's how we connect business owners with investors:</Text>

                        <Text style={[styles.headingText, {marginBottom: minWidth?"5%":'1%'}]}>For Business Owners</Text>
                        <View style={{backgroundColor: '#282B27', borderRadius: 24, flexDirection:minWidth?"column": 'row', paddingVertical: "4%" , paddingHorizontal: "6%", borderColor: '#FFFFFF00', borderWidth: 1, marginBottom: '4%'}}>
                            <View style={{flex: 1, justifyContent: 'start', alignItems: 'center', marginRight: '5%'}}>
                                <Svg height={70}>
                                    <Defs>
                                        <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                                            <Stop offset="0%" stopColor="#72CE63" />
                                            <Stop offset="100%" stopColor="#FFFFFF" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <SvgText x="35%" y="50%" fontSize="36" fontWeight="bold" fill="url(#gradientText)">
                                        Step 1
                                    </SvgText>
                                </Svg>
                                <Text style={styles.smallText}>Create your business profile and submit your funding application.</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'start', alignItems: 'center',  marginRight: '4%'}}>
                                <Svg height={70}>
                                    <Defs>
                                        <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                                            <Stop offset="0%" stopColor="#72CE63" />
                                            <Stop offset="100%" stopColor="#FFFFFF" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <SvgText x="35%" y="50%" fontSize="36" fontWeight="bold" fill="url(#gradientText)">
                                        Step 2
                                    </SvgText>
                                </Svg>
                                <Text style={styles.smallText}>Choose your funding option: debt or equity.</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'start', alignItems: 'center'}}>
                                <Svg height={70}>
                                    <Defs>
                                        <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                                            <Stop offset="0%" stopColor="#72CE63" />
                                            <Stop offset="100%" stopColor="#FFFFFF" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <SvgText x="35%" y="50%" fontSize="36" fontWeight="bold" fill="url(#gradientText)">
                                        Step 3
                                    </SvgText>
                                </Svg>
                                <Text style={styles.smallText}>Get matched with investors who are interested in your business, and receive funding to fuel your growth.</Text>
                            </View>
                        </View>

                        <Text style={[styles.headingText, {marginBottom:minWidth?"5%": '1%'}]}>For Investors</Text>
                        <View style={{backgroundColor: '#282B27', borderRadius: 24, flexDirection:minWidth?"column": 'row', paddingVertical: "4%" , paddingHorizontal: "6%", borderColor: '#FFFFFF00', borderWidth: 1}}>
                            <View style={{flex: 1, justifyContent: 'start', alignItems: 'center', marginRight: '5%'}}>
                                <Svg height={70}>
                                    <Defs>
                                        <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                                            <Stop offset="0%" stopColor="#72CE63" />
                                            <Stop offset="100%" stopColor="#FFFFFF" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <SvgText x="35%" y="50%" fontSize="36" fontWeight="bold" fill="url(#gradientText)">
                                        Step 1
                                    </SvgText>
                                </Svg>
                                <Text style={styles.smallText}>Sign up and create your investor profile.</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'start', alignItems: 'center',  marginRight: '4%'}}>
                                <Svg height={70}>
                                    <Defs>
                                        <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                                            <Stop offset="0%" stopColor="#72CE63" />
                                            <Stop offset="100%" stopColor="#FFFFFF" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <SvgText x="35%" y="50%" fontSize="36" fontWeight="bold" fill="url(#gradientText)">
                                        Step 2
                                    </SvgText>
                                </Svg>
                                <Text style={styles.smallText}>Browse investment opportunities and filter by industry, funding type (debt or equity), and business stage.</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'start', alignItems: 'center'}}>
                                <Svg height={70}>
                                    <Defs>
                                        <SvgLinearGradient id="gradientText" x1="0" y1="0" x2="1" y2="0">
                                            <Stop offset="0%" stopColor="#72CE63" />
                                            <Stop offset="100%" stopColor="#FFFFFF" />
                                        </SvgLinearGradient>
                                    </Defs>
                                    <SvgText x="35%" y="50%" fontSize="36" fontWeight="bold" fill="url(#gradientText)">
                                        Step 3
                                    </SvgText>
                                </Svg>
                                <Text style={styles.smallText}>Choose the right investment opportunity, and start investing with confidence.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View> 
            {/* <View style={{padding: '6% '}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%'}}>
                    <Defs>
                        <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    
                    <Ellipse cx={0} cy={height / 2} rx={'80%'} ry={"70%"} fill="url(#grad1)" />
                </Svg>
                <View style={{flexDirection: 'row', padding: "5%"}}>
                    <View style={{flex: 1, marginRight: '4%'}}>
                        <Text style={styles.headingText}>Experiences Shared by Our Clients</Text>
                        <Text style={[styles.smallText, {textAlign: 'start'}]}>The team at WDK AI ToolKit provided unparalleled support throughout our project. Their expertise and dedication were evident from day one.</Text>
                    </View>
                    <UserFeedback style={{marginLeft: '4%'}} feedback="As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have revolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a deep understanding." userName="Artemisia Udinese" userOccupation='Marketing Specialist'></UserFeedback>
                </View>    
                <View style={{padding: "5%"}}>
                    <Text style={[styles.headingText, {marginBottom: '4%',}]}>Frequently Asked Questions</Text>
                    <FrequentlyAsked Question='What is a Bounce?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='What is the difference between the Free and Paid versions?' Answer={'Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.'}></FrequentlyAsked>
                    <FrequentlyAsked Question='What if I decide to change a plan from monthly to annually and back?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='How do I add personalised data to messages?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='How do I re-subscribe a contact who opted out or was accidentally removed?' Answer={''}></FrequentlyAsked>
                    <FrequentlyAsked Question='Do you plan on adding more features in the future?' Answer={''}></FrequentlyAsked>
                </View>
            </View> */}
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
};