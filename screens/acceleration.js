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

export default function Acceleration({navigation}) {
    const { width, height } = useWindowDimensions();
    const [id, setId] = useState('');
        
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Svg style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', }}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={0} cy={'45%'} rx={'50%'} ry={"15%"} fill={`url(#radial-gradient-${id})`} />
                </Svg>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center' }}>
                    <ImageBackground source={require("../assets/images/background2.png")} style={{ flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%', overflow: 'hidden' }}>
                        {/* <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}> */}
                        <View style={{ backgroundColor: '#FFFFFF1A', paddingVertical: '0.5%', paddingHorizontal: '2%', borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%', alignItems: 'center' }}>
                            <Text style={{ color: '#FFFFFF' }}>Accelerate Your Startup’s Success</Text>
                        </View>
                        <Text style={[styles.title, { lineHeight: 78, textAlign: 'center', fontSize: 70 }]}>The Boost Your {'\n'} Startup Deserves.</Text>
                        <Text style={[styles.subtitle, { marginBottom: '5%', color: '#FFFFFFCC' }]}>Access funding, mentorship, and resources to grow exponentially.</Text>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={[styles.buttonText1, { color: '#0E0E0E' }]}>Apply for Acceleration Now</Text>
                        </TouchableOpacity>
                        {/* </ExpoLinearGradient> */}
                    </ImageBackground>
                </View>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center' }}>

                    <ProductExplanation why={'Why Choose Accelaration'} img1={require("../assets/images/acceleration1.png")} img2={require("../assets/images/acceleration2.png")} img3={require("../assets/images/acceleration3.png")} reason1={'Proven track record in scaling startups.'} reason2={'Personalized mentorship tailored to your needs.'} reason3={'Support from application to program graduation.'}></ProductExplanation>
                </View>
            </View>
            <View style={{ justifyContent: "center", alignContent: "center", marginBottom: 80 }}>
                <Text style={[styles.title, { textAlign: "center", marginBottom: 25 }]}>What we Offer</Text>
                <View style={{ padding: 20, width: "30%", height: 116, borderWidth: 1, borderColor: "#72CE63", borderRadius: 20, alignSelf: "center", marginVertical: 15 }}>
                    <Text style={{ color: "white", fontSize: 23, fontWeight: "400", paddingBottom: 10 }}>01</Text>
                    <Text style={{ color: "white", fontSize: 22, fontWeight: "400" }}>Tailored mentorship programs with industry experts.</Text>
                </View>
                <Svg style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', }}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={'50%'} cy={'50%'} rx={'50%'} ry={"50%"} fill={`url(#radial-gradient-${id})`}/>
                </Svg>
                <View style={{ padding: 20, width: "30%", height: 116, borderWidth: 1, borderColor: "#72CE63", borderRadius: 20, alignSelf: "center", marginVertical: 15 }}>
                    <Text style={{ color: "white", fontSize: 23, fontWeight: "400", paddingBottom: 10 }}>02</Text>
                    <Text style={{ color: "white", fontSize: 22, fontWeight: "300" }}>Access to exclusive investor networks.</Text>
                </View>
                <View style={{ padding: 20, width: "30%", height: 116, borderWidth: 1, borderColor: "#72CE63", borderRadius: 20, alignSelf: "center", marginVertical: 15 }}>
                    <Text style={{ color: "white", fontSize: 23, fontWeight: "400", paddingBottom: 10 }}>03</Text>
                    <Text style={{ color: "white", fontSize: 22, fontWeight: "400" }}>Workshops, boot camps, and demo days.</Text>
                </View>
            </View>

            <View>
                <Svg style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', }}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={'50%'} cy={'50%'} rx={'50%'} ry={"50%"} fill={`url(#radial-gradient-${id})`} />
                </Svg>
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
            </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: '12%', paddingVertical: '2%' }}>
                    <Image source={require('../assets/images/accelerationBig.png')} style={{ width: '100%', borderRadius: 20, aspectRatio: 1 }} resizeMode="contain"></Image>
                </View>
            <FounderMessage message={'Thanks to The Catalyst Tree, we secured funding and mentorship that accelerated our growth.'} companyName={'EduWave'} designation={'Founder'}></FounderMessage>
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>

    )
}