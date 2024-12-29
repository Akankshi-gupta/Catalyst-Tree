import React, {useState, useEffect}   from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import Counts from "../components/counts";
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient, Text as SvgText } from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductExplanation from "../components/productExplaination";
import FounderMessage from "../components/founderMessage";
import CustomPopup from "./Modal";

export default function Acceleration({navigation}) {
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
                <Svg style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', }}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}-1`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.5)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id={`radial-gradient-${id}-2`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    <Ellipse cx={'5%'} cy={'40%'} rx={'80%'} ry={"18%"} fill={`url(#radial-gradient-${id}-1)`} />
                    <Ellipse cx={'50%'} cy={'69%'} rx={'50%'} ry={"10%"} fill={`url(#radial-gradient-${id}-2)`} />
                </Svg>
                <CustomPopup visible={popupVisible} onClose={() => setPopupVisible(false)}/>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%'}}>
                    {/* <ImageBackground source={require("../assets/images/background2.png")} style={{ flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%', overflow: 'hidden' }}> */}
                    <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '10%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <View style={{ backgroundColor: '#FFFFFF1A', paddingVertical: '0.5%', paddingHorizontal: '2%', borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%', alignItems: 'center', marginBottom: '1%'}}>
                            <Text style={{ color: '#FFFFFF' }}>Accelerate Your Startup's Success</Text>
                        </View>
                        <Text style={[styles.title, { lineHeight: 78, textAlign: 'center', fontSize: 70 }]}>The Boost Your {'\n'} Startup Deserves.</Text>
                        <Text style={[styles.subtitle, { marginBottom: '5%', color: '#FFFFFFCC' }]}>Access funding, mentorship, and resources to grow exponentially.</Text>
                        <TouchableOpacity style={styles.buttonPrimary} onPress={() => setPopupVisible(true)}>
                            <Text style={[styles.buttonText1, { color: '#0E0E0E' }]}>Apply for Acceleration Now</Text>
                        </TouchableOpacity>
                    </ExpoLinearGradient>
                    {/* </ImageBackground> */}
                </View>
                <View style={{ paddingHorizontal: '14%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center', flexDirection: minWidth?"column":'row', justifyContent: 'space-between'}}>
                    <View style={{justifyContent: 'center', width: '40%', padding: '4%'}}>
                        <Text style={[styles.headingText,{textAlign:minWidth?"center":"left", fontSize: 48}]}>Why Choose Acceleration?</Text>
                    </View>
                    <View style={{ width: '60%'}}>
                        <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between', marginBottom: '2%'}}>
                            <ProductExplanation img={require("../assets/images/acceleration-icon1.png")} reason={'Startups gain valuable mentorship, offering insights on strategy, product development, and market positioning, which can significantly improve their chances of success.'}></ProductExplanation>
                            <ProductExplanation img={require("../assets/images/acceleration-icon2.png")} reason={'Accelerators provide startups with access to a vast network of industry professionals, investors, and potential partners, opening opportunities for valuable collaborations and partnerships.'}></ProductExplanation>
                        </View>
                        <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between',}}>
                            <ProductExplanation img={require("../assets/images/acceleration-icon3.png")} reason={'Through mentorship, workshops, and market exposure, startups can refine their value propositions and validate product-market fit, reducing the risk of misaligned offerings.'}></ProductExplanation>
                            <ProductExplanation img={require("../assets/images/acceleration-icon4.png")} reason={'Accelerators provide access to shared resources, including office space, technology, and business services, significantly lowering operational costs for startups in their early stages.'}></ProductExplanation>
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
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: '8%', paddingVertical: '2%', justifyContent: 'space-between' }}>
                    <Text style={[styles.headingText, { flex: 1 }]}>Program Highlights</Text>
                    <View style={{ flex: 1 }}>
                        <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row' }}>
                            <View style={{ marginBottom: '3%', justifyContent: 'center', flex: 1 }}>
                                <Text style={{ textAlign: 'left', color: '#FFFFFF', fontSize: 24, fontWeight: 500 }}>Expert-Led Workshops</Text>
                                <Text style={{ color: "white", fontSize: 16 }}>Covering scaling strategies, operations, and more</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row' }}>
                            <View style={{ marginBottom: '3%', justifyContent: 'center', flex: 1 }}>
                                <Text style={{ textAlign: 'left', color: '#FFFFFF', fontSize: 24, fontWeight: 500 }}>Market Readiness Bootcamps</Text>
                                <Text style={{ color: "white", fontSize: 16 }}>Prepare your product for rapid adoption.</Text>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row' }}>
                            <View style={{ marginBottom: '3%', justifyContent: 'center', flex: 1 }}>
                                <Text style={{ textAlign: 'left', color: '#FFFFFF', fontSize: 24, fontWeight: 500 }}>Investor Demo Days</Text>
                                <Text style={{ color: "white", fontSize: 16 }}>Pitch directly to a panel of pre-vetted investors.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: '12%', paddingVertical: '2%' }}>
                    <Image source={require('../assets/images/accelerationBig.png')} style={{ width: '100%', borderRadius: 20, height: 500 }} resizeMode="contain"></Image>
                </View>
            </View>
            <FounderMessage message={'Thanks to The Catalyst Tree, we secured funding and mentorship that accelerated our growth.'} companyName={'EduWave'} designation={'Founder'}></FounderMessage>
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>

    )
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