import React, { useRef, useState, useEffect  } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import {Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image,} from "react-native";
import styles from "./styles";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import StartFunding from "../components/startFundingSection";
import UserFeedback from "../components/userFeedback";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import InvestorProcessScreen from "../components/RowScroll";
import CatalystAdvantages from "../components/catalystAdvantage";
import InvestorServices from "../components/InvestorServiesBoxes";
import CheckBox4 from "../components/checkbox4";
import Header from "../components/header";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";

export default function Investor({navigation}) {
    const [id, setId] = useState('');
                
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
    const items = [
        {img:require("../assets/images/profile-icon.png"), text: "Create Your Profile" },
        {img:require("../assets/images/setting-icon.png"),text: "Set your investment preferences (sector, funding type, ticket size).",},
        {img:require("../assets/images/searching-icon.png"), text: "Discover Startups" },
        {img:require("../assets/images/explore-icon.png"),text: "Explore startups that meet your criteria, complete with risk scores and detailed profiles.",},
        {img:require("../assets/images/evaluate-icon.png"), text: "Evaluate with Confidence" },
        {img:require("../assets/images/access-icon.png"),text: "Access startup metrics like financial health, team strength, market trends, and projections.",},
        {img:require("../assets/images/engage-icon.png"), text: "Engage & Invest" },
        {img:require("../assets/images/connect-icon.png"),text: "Connect with startups, negotiate terms, and finalize deals securely on our platform.",},
    ];
    const { width, height } = useWindowDimensions();
    return (
        <ScrollView style={styles.container}>
            <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                <Defs>
                    <RadialGradient id={`radial-gradient-${id}-1`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                        <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.6)" stopOpacity="1" />
                        <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                    </RadialGradient>

                    <RadialGradient id={`radial-gradient-${id}-2`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                        <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                        <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                    </RadialGradient>

                    <RadialGradient id={`radial-gradient-${id}-3`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                        <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                        <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                    </RadialGradient>

                    <RadialGradient id={`radial-gradient-${id}-4`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                        <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.6)" stopOpacity="1" />
                        <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                    </RadialGradient>
                </Defs>

                {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                <Ellipse cx={0} cy={'22%'} rx={'45%'} ry={"13%"} fill={`url(#radial-gradient-${id}-1)`} />

                <Ellipse cx={'50%'} cy={'50%'} rx={'50%'} ry={"12%"} fill={`url(#radial-gradient-${id}-2)`} />

                <Ellipse cx={'50%'} cy={'69%'} rx={'50%'} ry={"12%"} fill={`url(#radial-gradient-${id}-3)`} />

                <Ellipse cx={'100%'} cy={'30%'} rx={'45%'} ry={"13%"} fill={`url(#radial-gradient-${id}-1)`} />
            </Svg>
            <Navbar navigation={navigation}></Navbar>
            <ExpoLinearGradient colors={["rgba(44, 165, 96, 0.1)", "rgba(44, 165, 96, 0.1)", "rgba(44, 165, 96, 0.1)"]} style={{ position: "absolute", top: 0, right: 0, zIndex: -1, height:'11.5%', width: '32%', borderBottomLeftRadius: 12}} />
            <Header buttonText={"Signup"} description={"Invest smarter with detailed startup insights, risk scores, and seamless deal-making tools."} title={"Discover the Next Big Opportunity"} imageSource={require("../assets/images/investor1.png")} onButtonPress={()=>navigation.navigate("InvestorSignUp")}></Header>
            <CatalystAdvantages> </CatalystAdvantages>
            <InvestorProcessScreen items={items} title={"Our Process for \nInvestor"}/>
            <View style={{marginVertical: '7%'}}>
                <Text style={[styles.title, { textAlign: 'center' , fontSize: 48, fontWeight: 500,}]}>Services for Investor</Text>
                <View style={{paddingVertical: '4%', paddingHorizontal: '5%'}}>
                    <View style={{flexDirection: 'row', borderBottomColor: 'rgba(255, 255, 255, 0.1)', borderBottomWidth: 1}}>
                        <View style={{borderRightColor: 'rgba(255, 255, 255, 0.1)', borderRightWidth: 1, flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon1.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Debt Investments</Text>
                        </View>
                        <View style={{borderRightColor: 'rgba(255, 255, 255, 0.1)', borderRightWidth: 1, flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon2.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Provide growth capital with flexible debt options and reliable risk evaluations.</Text>
                        </View>
                        <View style={{borderRightColor: 'rgba(255, 255, 255, 0.1)', borderRightWidth: 1, flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon3.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Equity Investments</Text>
                        </View>
                        <View style={{flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon4.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Build your portfolio with high-potential startups at the pre-seed, seed, or growth stage.</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{borderRightColor: 'rgba(255, 255, 255, 0.1)', borderRightWidth: 1, flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon5.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Mergers & Acquisitions (M&A)</Text>
                        </View>
                        <View style={{borderRightColor: 'rgba(255, 255, 255, 0.1)', borderRightWidth: 1, flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon6.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Discover startups and companies ripe for strategic acquisitions.</Text>
                        </View>
                        <View style={{borderRightColor: 'rgba(255, 255, 255, 0.1)', borderRightWidth: 1, flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon7.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Exclusive Analytics</Text>
                        </View>
                        <View style={{flex: 1, padding: '2%'}}>
                            <Image source={require('../assets/images/investor-icon8.png')} style={{height: 40, width: 40, marginBottom: '8%'}}></Image>
                            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 18, fontWeight: 400}}>Benefit from predictive analysis and comparative metrics for startups.</Text>
                        </View>
                    </View>
                </View>
            </View>
            <CheckBox4 title={"Tools for Investor"}></CheckBox4>
            <View style={{flexDirection:width<600?"column": "row",marginHorizontal:"12%",marginVertical:'6%',flex:2,  marginBottom: '8%'}} >
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Text style={[styles.headingText]}>
                        Startups That Thrived With Us
                    </Text>
                    <Text style={[styles.smallText, { textAlign: "left" }]}>
                        The team at WDK AI ToolKit provided unparalleled support throughout
                        our project. Their expertise and dedication were evident from day
                        one.
                    </Text>
                </View>
                <View style={{flex:1}}>

                <UserFeedback feedback={"As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have evolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a understanding."} userName={"Artemisia Udinese"} userOccupation={"Marketing Specialist"}/>
                </View>
            </View>
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
}
