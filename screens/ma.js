import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image,} from "react-native";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Counts from "../components/counts";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient, Text as SvgText,} from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductExplanation from "../components/productExplaination";
import FounderMessage from "../components/founderMessage";

export default function MergersAcquisitions({navigation}) {
    const { width, height } = useWindowDimensions();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Svg style={{position: "absolute", zIndex: -1, top: 0, left: 0, width: "100%", height: "100%", }}>
                    <Defs>
                        <RadialGradient id="grad1" cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1"/>
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={0} cy={"45%"} rx={"50%"} ry={"15%"} fill="url(#grad1)" />
                </Svg>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: "5%", paddingTop: "3%", paddingBottom: "5%", alignItems: "center",}}>
                    <ImageBackground source={require("../assets/images/background2.png")} style={{ flex: 1, paddingHorizontal: "5%", paddingVertical: "8%", alignItems: "center", borderRadius: 24, justifyContent: "center", height: "100%", width: "100%", overflow: "hidden",}}>
                        {/* <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}> */}
                        <View style={{ backgroundColor: "#FFFFFF1A", paddingVertical: "0.5%", paddingHorizontal: "2%", borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: "2%", alignItems: "center",}}>
                            <Text style={{ color: "#FFFFFF" }}>
                                Navigate M&A with Confidence
                            </Text>
                        </View>
                        <Text style={[styles.title, { lineHeight: 78, textAlign: "center", fontSize: 70 }, ]}>
                            Strategic Partnerships {"\n"}Made Simple.
                        </Text>
                        <Text
                            style={[
                                styles.subtitle,
                                { marginBottom: "5%", color: "#FFFFFFCC" },
                            ]}
                        >
                            Explore mergers, acquisitions, and partnerships with data-driven
                            precision.
                        </Text>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={[styles.buttonText1, { color: "#0E0E0E" }]}>
                                Explore M&A Opportunities
                            </Text>
                        </TouchableOpacity>
                        {/* </ExpoLinearGradient> */}
                    </ImageBackground>
                </View>
                <View
                    style={{
                        paddingHorizontal: "5%",
                        paddingTop: "3%",
                        paddingBottom: "5%",
                        alignItems: "center",
                    }}
                >
                    <ProductExplanation
                        why={"Why Choose M&A?"}
                        img1={require("../assets/images/ma1.png")}
                        img2={require("../assets/images/ma2.png")}
                        img3={require("../assets/images/ma3.png")}
                        reason1={"Access new markets or technologies."}
                        reason2={
                            "Enhance operational efficiency through strategic alliances."
                        }
                        reason3={"Scale faster with the right partnerships."}
                    ></ProductExplanation>
                </View>
            </View>

            <View
                style={{ justifyContent: "center", alignContent: "center", margin: 15, marginBottom: '5%' }}
            >
                <Text style={[styles.title, { textAlign: "center", marginBottom: 25 }]}>
                    What we Offer
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginVertical: 50,
                    }}
                >
                    <InfoCard
                        description={"We match businesses based on synergy and growth potential."}
                        title={"Deal Discovery"}></InfoCard>
                    <InfoCard
                        description={"Your sensitive information is secure with us."}
                        title={"Confidential Transactions"}></InfoCard>
                    <InfoCard
                        description={"From negotiation to closure, we assist at every step."}
                        title={"Deal Discovery"}></InfoCard>
                </View>
            </View>

            <View style={{flexDirection:"row",marginVertical:25,marginHorizontal:"5%"}}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={styles.headingText}>Process</Text>
                    <Image source={require("../assets/images/ma-process.png")} style={{width:'100%',height:'80%', borderRadius: 20}}></Image>
                </View>
                <View style={{flex:1}}>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', marginBottom: '5%'}}>
                        <Box no={'Define Goals'} text={"Tell us your M&A objectives."} imageSource={require("../assets/images/ma-process1.png")}></Box>
                        <Box no={"Matchmaking"} text={"Find the right business partner."} imageSource={require("../assets/images/ma-process2.png")}></Box>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                        <Box no={"Due Diligence"} text={"Leverage our tools for a thorough evaluation."} imageSource={require("../assets/images/ma-process3.png")}></Box>
                        <Box no={"Closure"} text={"Expertly negotiate and finalize the deal."} imageSource={require("../assets/images/ma-process4.png")}></Box>
                    </View>
                </View>
            </View>
            <FounderMessage message={'The Catalyst Tree helped us acquire a company perfectly aligned with our vision.'} companyName={'AgriCorp'} designation={'CEO'}></FounderMessage>   
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
}

const InfoCard = ({ title, description }) => {
    return (
        <View style={{justifyContent: "flex-start",alignContent: "space-between",width: 352,height: 151,}}>
            <Image source={require("../assets/images/tickma.png")} style={{ height: 44, width: 44 }}/>
            <Text style={[styles.headingText,{fontSize: 24, textAlign: "left", paddingVertical: 15 },]}>
                {title}
            </Text>
            <Text style={[ styles.smallText,{ textAlign: "left", color: "#898989", fontSize: 18 },]}>
                {description}
            </Text>
        </View>
);};

const Box = ({ no, text ,imageSource}) => (
    <View style={style.box}>
        <Image source={imageSource} style={{height:60,width:60}}></Image>
        <Text style={style.boxNumber}>{no}</Text>
        <Text style={style.boxText}>{text}</Text>
    </View>
);

const style= ({
    box: {
        flex: 1,
        borderRadius: 20,
        borderColor: "#72CE63",
        borderWidth: 1,
        justifyContent: "space-around",
        padding: 15,
        marginLeft: '5%',
    },
    boxNumber: {
        color:"white",
        fontSize: 24,
        fontWeight: "700",
    },
    boxText: {
        color:"#787878",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "left",
    },
});