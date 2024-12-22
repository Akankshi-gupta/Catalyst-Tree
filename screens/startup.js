import React, { useRef } from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image,} from "react-native";
import styles from "./styles";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import StartFunding from "../components/startFundingSection";
import UserFeedback from "../components/userFeedback";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import InvestorProcessScreen from "../components/RowScroll";
import CatalystAdvantages from "../components/catalystAdvantage";
import InvestorServices from "../components/ServiesBoxes";
import CheckBox4 from "../components/checkbox4";
import Header from "../components/header";
import StartupServices from "../components/servicestartup";

export default function Startup({navigation}) {
    const items = [
        { icon: "check-circle", text: "Sign Up & Get Verified" },
        {icon: "person",text: "Create your profile and submit necessary documents for quick onboarding.",},
        { icon: "error", text: "Smart Risk Scoring" },
        {icon: "store",text: "Our AI analyzes your data (revenue, team strength, market size, etc.) to provide a comprehensive risk score visible to investors.",},
        { icon: "check", text: "Get Matched with Investors" },
        {icon: "trending-up",text: "Explore curated investor profiles suited to your funding goals.",},
        { icon: "account-balance", text: "Collaborate & Close Deals" },
        {icon: "diversity-3",text: "Use our secure chat and document-sharing tools to negotiate, finalize terms, and close deals.",},
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
    return (
        <ScrollView style={styles.container}>
            <Navbar navigation={navigation}></Navbar>
            <ExpoLinearGradient colors={["#002F1C", "#0C4931", "#2CA5601A"]} style={{ position: "absolute", top: 0, right: 0, zIndex: -1, height: height * 0.9, width: width * 0.3, }} />
            <View style={{ position: "absolute", top: 0, right: 0, height: height * 0.9, width: width * 0.3,}}></View>
            <Header  buttonText={"Signup for free"} description={"Whether you're raising debt, equity, or exploring M&A and acceleration opportunities, we’ve got you covered."} title={"Fuel Your Growth with the Right Funding Partners"} imageSource={require("../assets/images/startup.png")}  onButtonPress={()=> navigation.navigate("StartupSignUp")}></Header>
            <InvestorServices services={services} title={"Why Choose \nThe Catalyst Tree?"}></InvestorServices>
            <InvestorProcessScreen items={items} title={"Our Process \nStartup"} />
            
            
            <View style={{flexDirection:"row",margin:35,marginTop:50}}>
                <View style={{flex:1}}><Text style={[styles.headingText,{textAlign:"right",marginTop:55}]}>Service for {"\n"}Startups</Text></View>
                <View style={{flex:3}}>
                <StartupServices services={startupServices} ></StartupServices>
                </View>
            </View>


            <View
                style={{flexDirection: "row",marginHorizontal: "12%",marginVertical: 50,}} >
                <View style={{ flex: 1, marginRight: 10 ,marginTop:20}}>
                    <Text style={[styles.headingText]}>
                        Startups That Thrived With Us
                    </Text>
                    <Text style={[styles.smallText, { textAlign: "left" }]}>
                        The team at WDK AI ToolKit provided unparalleled support throughout
                        our project. Their expertise and dedication were evident from day
                        one.
                    </Text>
                </View> 
                <UserFeedback feedback={"As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have evolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a understanding."} userName={"Artemisia Udinese"} userOccupation={"Marketing Specialist"}/>
            </View>
            <StartFunding navigation={navigation}/>
            <Footer navigation={navigation}/>
        </ScrollView>
    );
}
