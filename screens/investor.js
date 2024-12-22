import React, { useRef } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    useWindowDimensions,
    Image,
} from "react-native";
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

export default function Investor({navigation}) {
    const items = [
        { icon: "person", text: "Create Your Profile" },
        {icon: "settings",text: "Set your investment preferences (sector, funding type, ticket size).",},
        { icon: "search", text: "Discover Startups" },
        {icon: "store",text: "Explore startups that meet your criteria, complete with risk scores and detailed profiles.",},
        { icon: "check", text: "Evaluate with Confidence" },
        {icon: "trending-up",text: "Access startup metrics like financial health, team strength, market trends, and projections.",},
        { icon: "account-balance", text: "Engage & Invest" },
        {icon: "diversity-3",text: "Connect with startups, negotiate terms, and finalize deals securely on our platform.",},
    ];

    const services = [
        { no: "01", text: "Debt Investments" },
        {no: "02",text: "Provide growth capital with flexible debt options and reliable risk evaluations.",},
        { no: "03", text: "Equity Investments" },
        {no: "04",text: "Build your portfolio with high-potential startups at the pre-seed, seed, or growth stage.",},
        { no: "05", text: "Mergers & Acquisitions (M&A)" },
        {no: "06",text: "Discover startups and companies ripe for strategic acquisitions.",},
        { no: "07", text: "Exclusive Analytics" },
        {no: "08",text: "Benefit from predictive analysis and comparative metrics for startups.",},
    ];
    const { width, height } = useWindowDimensions();
    return (
        <ScrollView style={styles.container}>
            <Navbar navigation={navigation}></Navbar>
            <ExpoLinearGradient colors={["#002F1C", "#0C4931", "#2CA5601A"]} style={{ position: "absolute", top: 0, right: 0, zIndex: -1, height:'15%', width: '41%', borderBottomLeftRadius: 12}} />
            <View style={{ position: "absolute", top: 0, right: 0, height: height * 0.9, width: width * 0.3,}}></View>
            <Header  buttonText={"Signup for free"} description={"Invest smarter with detailed startup insights, risk scores, and seamless deal-making tools."} title={"Discover the Next Big Opportunity"} imageSource={require("../assets/images/investor1.png")} onButtonPress={()=>navigation.navigate("InvestorSignUp")}></Header>
            <CatalystAdvantages> </CatalystAdvantages>
            <InvestorProcessScreen items={items} />
            <InvestorServices services={services}></InvestorServices>
            <CheckBox4 title={"Tools for Investor"}></CheckBox4>
            <View
                style={{flexDirection: "row",marginHorizontal: "12%",marginVertical: 50,}} >
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
                <UserFeedback feedback={"As a long-time user of WDK AI ToolKit, I can confidently say that their solutions have evolutionised the way we operate. From the outset, the team provided exceptional support and demonstrated a understanding."} userName={"Artemisia Udinese"} userOccupation={"Marketing Specialist"}/>
            </View>
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
}
