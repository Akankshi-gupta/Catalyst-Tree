import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image,} from "react-native";
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
import StartupServices from "../components/servicestartup";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import { wp } from "react-native-responsive-screen";

export default function Startup({navigation}) {
    const [id, setId] = useState('');
            
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);

    const items = [
        {img:require("../assets/images/ma-process3.png"), text: "Sign Up & Get Verified" },
        {img:require("../assets/images/profile-icon.png"), text: "Create your profile and submit necessary documents for quick onboarding.",},
        {img:require("../assets/images/m&a-icon2.png"), text: "Smart Risk Scoring" },
        {img:require("../assets/images/ai-icon.png"), text: "Our AI analyzes your data (revenue, team strength, market size, etc.) to provide a comprehensive risk score visible to investors.",},
        {img:require("../assets/images/ma-process4.png"), text: "Get Matched with Investors" },
        {img:require("../assets/images/explanation3.png"), text: "Explore curated investor profiles suited to your funding goals.",},
        {img:require("../assets/images/acceleration-icon2.png"), text: "Collaborate & Close Deals" },
        {img:require("../assets/images/message-icon.png"), text: "Use our secure chat and document-sharing tools to negotiate, finalize terms, and close deals.",},
    ];

    const services = [
        { no: "01", text: "Access a Global Investor Network" },
        {no: "02",text: "Connect with investors who align with your vision and funding needs.",},
        { no: "03", text: "AI-Driven Risk Insights" },
        {no: "04",text: "Understand your business potential with data-backed risk scores and actionable recommendations.",},
        { no: "05", text: "Tailored Funding Opportunities" },
        {no: "06",text: "From debt to equity, get personalized matches based on your stage, industry, and goals.",},
        { no: "07", text: "Transparency & Compliance" },
        {no: "08",text: "Ensure a smooth funding process with secure contracts and non-circumvention agreements.",},
    ];
    const startupServices = [
        { no: "01", text: "Debt Funding" },
        {no: "02",text: "Flexible funding options with quick disbursements and investor alignment.",},
        { no: "03", text: "Equity Funding" },
        {no: "04",text: "Find equity partners who bring more than just capital—mentorship, resources, and growth opportunities.",},
        { no: "05", text: "M&A Opportunities" },
        {no: "06",text: "Expand or exit with strategic M&A deals facilitated by our experts.",},
        { no: "07", text: "Acceleration Programs" },
        {no: "08",text: "Gain access to tailored mentorship, resources, and partnerships to fast-track your growth.",},
        {no: "08",text: "Analytics & Recommendations",},
        {no: "08",text: "Improve your pitch and business performance with AI-driven insights.",},
    ];
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;
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
                </Defs>

                {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                <Ellipse cx={0} cy={'22%'} rx={'45%'} ry={"13%"} fill={`url(#radial-gradient-${id}-1)`} />

                <Ellipse cx={'50%'} cy={'41%'} rx={'50%'} ry={"12%"} fill={`url(#radial-gradient-${id}-2)`} />

                <Ellipse cx={'50%'} cy={'57%'} rx={'50%'} ry={"12%"} fill={`url(#radial-gradient-${id}-3)`} />
            </Svg>
            <Navbar navigation={navigation}></Navbar>
            <ExpoLinearGradient colors={["rgba(44, 165, 96, 0.1)", "rgba(44, 165, 96, 0.1)", "rgba(44, 165, 96, 0.1)"]} style={{ position: "absolute", top: 0, right: 0, zIndex: -1, height: height * 0.85, width: width * 0.32, borderBottomLeftRadius: 12}} />
            {/* <View style={{ position: "absolute", top: 0, right: 0, height: height * 0.9, width: width * 0.3,}}></View> */}
            <Header buttonText={"Signup"} description={"Whether you're raising debt, equity, or exploring M&A and acceleration opportunities, we've got you covered."} title={"Fuel Your Growth with the Right Funding Partners"} imageSource={require("../assets/images/startup.png")}  onButtonPress={()=> navigation.navigate("StartupSignUp")}></Header>
            <InvestorServices services={services} title={"Why Choose \nThe Catalyst Tree?"}></InvestorServices>
            <InvestorProcessScreen items={items} title={"Our Process \nStartup"} />
            
            <View style={{flexDirection:minWidth?"column":"row",margin:'5%', marginTop: '10%'}}>
                <View style={{width: '40%'}}>
                    <Text style={[styles.headingText,{fontSize:minWidth?40:48, marginTop:'2%', marginLeft: '12%'}]}>Service for {"\n"}Startups</Text>
                </View>
                <View style={{width: '60%'}}>
                    <StartupServices services={startupServices} ></StartupServices>
                </View>
            </View>
            <View style={{flexDirection: minWidth?"column":"row",marginHorizontal:"12%",marginVertical:'6%',flex:2, marginBottom: '8%'}} >
                <View style={{ flex: 1, marginRight: '1%' ,marginTop:'1%'}}>
                    <Text style={[styles.headingText, {marginBottom: '3%'}]}>
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
            <StartFunding navigation={navigation}/>
            <Footer navigation={navigation}/>
        </ScrollView>
    );
}
