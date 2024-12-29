import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'; 
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
import CustomPopup from "./Modal";

export default function MergersAcquisitions({navigation}) {
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;

    const [popupVisible, setPopupVisible] = useState(false);
    
    useEffect(() => {
        const checkPopupStatus = async () => {
        const hasShownPopup = await AsyncStorage.getItem("hasShownPopup");
        if (!hasShownPopup) {
            setPopupVisible(true);
            await AsyncStorage.setItem("hasShownPopup", "false");
        }
        };
        checkPopupStatus();
    }, []);

    const [id, setId] = useState('');
        
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Svg style={{position: "absolute", zIndex: -1, top: 0, left: 0, width: "100%", height: "100%", }}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}-1`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.5)" stopOpacity="1"/>
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id={`radial-gradient-${id}-2`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="  rgba(44, 165, 96, 0.4)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={'5%'} cy={"24%"} rx={"80%"} ry={"18%"} fill={`url(#radial-gradient-${id}-1)`} />
                    <Ellipse cx={'50%'} cy={'48%'} rx={'50%'} ry={"30%"} fill={`url(#radial-gradient-${id}-2)`} />
                </Svg>
                <CustomPopup visible={popupVisible} onClose={() => setPopupVisible(false)}/>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: "5%", paddingTop: "3%", paddingBottom: "5%"}}>
                    {/* <ImageBackground source={require("../assets/images/background2.png")} style={{ flex: 1, paddingHorizontal: "5%", paddingVertical: "8%", alignItems: "center", borderRadius: 24, justifyContent: "center", height: "100%", width: "100%", overflow: "hidden",}}> */}
                    <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '10%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <View style={{ backgroundColor: "#FFFFFF1A", paddingVertical: "0.5%", paddingHorizontal: "2%", borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: "2%", alignItems: "center", marginBottom: '1%'}}>
                            <Text style={{ color: "#FFFFFF" }}> Navigate M&A with Confidence </Text>
                        </View>
                        <Text style={[styles.title, { lineHeight: minWidth? 40:78, textAlign: "center", fontSize:minWidth? 35: 70 }, ]}> Strategic Partnerships {"\n"}Made Simple. </Text>
                        <Text style={[ styles.subtitle, { marginBottom: "5%", color: "#FFFFFFCC" }]}> Explore mergers, acquisitions, and partnerships with data-driven precision. </Text>
                        <TouchableOpacity style={styles.buttonPrimary} onPress={() => setPopupVisible(true)}>
                            <Text style={[styles.buttonText1, { color: "#0E0E0E" }]}>
                                Explore M&A Opportunities
                            </Text>
                        </TouchableOpacity>
                    </ExpoLinearGradient>
                    {/* </ImageBackground> */}
                </View>
                <View style={{ paddingHorizontal: "14%", paddingTop: "3%", paddingBottom: "5%", alignItems: "center", flexDirection: minWidth?"column":'row', justifyContent: 'space-between'}}>
                    <View style={{justifyContent: 'center', width: '40%', padding: '4%'}}>
                        <Text style={[styles.headingText,{textAlign:minWidth?"center":"left", fontSize: 48}]}>Why Choose M&A?</Text>
                    </View>
                    <View style={{ width: '60%'}}>
                        <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between', marginBottom: '2%'}}>
                            <ProductExplanation img={require("../assets/images/m&a-icon1.png")} reason={'Equity financing eliminates regular repayment obligations, allowing startups to preserve cash flow and allocate funds toward growth, product development, and operations.'}></ProductExplanation>
                            <ProductExplanation img={require("../assets/images/m&a-icon2.png")} reason={'Equity investors, including venture capitalists and angel investors, offer industry expertise, strategic mentorship, and valuable networks, playing a crucial role in scaling businesses, addressing challenges, and driving market expansion.'}></ProductExplanation>
                        </View>
                        <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between',}}>
                            <ProductExplanation img={require("../assets/images/m&a-icon3.png")} reason={'Founders can secure substantial funding without requiring asset collateral, which is especially advantageous for early-stage startups with limited physical or financial resources.'}></ProductExplanation>
                            <ProductExplanation img={require("../assets/images/m&a-icon4.png")} reason={'Equity financing is ideal for long-term projects, providing capital for sustained growth without the pressure of immediate repayment.'}></ProductExplanation>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignContent: "center", marginHorizontal: '5%', marginVertical: '5%' }}>
                    <Text style={[styles.title, {fontSize:minWidth?42:48, textAlign: "center", marginBottom: 25, fontWeight: 500 }]}>
                        What we Offer
                    </Text>
                    <View style={{ flexDirection: minWidth?"column":"row", justifyContent: "space-evenly", marginVertical:minWidth? 20:50 }}>
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
                <View style={{flexDirection:minWidth?"column":"row",marginVertical:'5%',marginHorizontal:"9%"}}>
                    <View style={{flex:minWidth?"auto":1,justifyContent:"center"}}>
                        <Text style={[styles.headingText, {marginBottom: '6%'}]}>Process</Text>
                        <Image source={require("../assets/images/ma-process.png")} style={{width:'100%',height:436, borderRadius: 20}}></Image>
                    </View>
                    <View style={{flex:minWidth?"auto":1}}>
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

            </View>

           

        </ScrollView>
    );
}

const InfoCard = ({ title, description }) => {
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;
    return (
        <View style={{justifyContent: "flex-start",alignContent: "space-between",width:minWidth?"auto": 352,height:minWidth?"50%": 151,}}>
            <View style={{flexDirection:minWidth?"row":"column",justifyContent:minWidth?"flex-start":"flex-start"}}>
            <Image source={require("../assets/images/tickma.png")} style={{ height: minWidth?22:44, width:minWidth?22: 44 }}/>
            <Text style={[styles.headingText,{fontSize: minWidth?18:24, textAlign: "left", paddingVertical:minWidth?0: 15,paddingHorizontal:minWidth?10:0 },]}>
                {title}
            </Text>
            </View>
            <Text style={[ styles.smallText,{ textAlign: "left", color: "#898989", fontSize: 18 },]}>
                {description}
            </Text>
        </View>
);};

const Box = ({ no, text ,imageSource}) => {
    const {height,width} = useWindowDimensions();
    const minWidth = width<600;
    return(<View style={[style.box,{height:"auto",width:"auto"}]}>
        <View style={{flexDirection:minWidth?"row":"column"}}>
            <Image source={imageSource} style={{height:minWidth?30:60,width:minWidth?30:60, marginBottom: '4%'}}></Image>
            <Text style={[style.boxNumber,{fontSize:minWidth?18:24}]}>{no}</Text>
        </View>
        <Text style={[style.boxText,{fontSize:minWidth?15:20}]}>{text}</Text>
    </View>
);}

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