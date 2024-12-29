import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image } from "react-native";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import Counts from "../components/counts";
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductExplanation from "../components/productExplaination";
import FounderMessage from "../components/founderMessage";
import CustomPopup from "./Modal";

export default function Equity({navigation}){
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
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{flex: 1}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}-1`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.5)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id={`radial-gradient-${id}-2`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="  rgba(114, 206, 99, 0.9)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id={`radial-gradient-${id}-3`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={'5%'} cy={'37%'} rx={'80%'} ry={"30%"} fill={`url(#radial-gradient-${id}-1)`} />

                    <Ellipse cx={'50%'} cy={'94%'} rx={'50%'} ry={"18%"} fill={`url(#radial-gradient-${id}-2)`} />

                    <Ellipse cx={'50%'} cy={'75%'} rx={'50%'} ry={"20%"} fill={`url(#radial-gradient-${id}-3)`} />
                </Svg>
                <CustomPopup visible={popupVisible} onClose={() => setPopupVisible(false)}/>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%'}}>
                    {/* <ImageBackground source={require("../assets/images/background2.png")} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%', overflow: 'hidden'}}> */}
                    <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '10%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <View style={{backgroundColor: '#FFFFFF1A', paddingVertical: '0.5%', paddingHorizontal: '2%', borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%', alignItems: 'center', marginBottom: '1%'}}>
                            <Text style={{ color: '#FFFFFF'}}>Unlock Growth with Smart Equity Funding</Text>
                        </View>
                        <Text style={[styles.title, {lineHeight:minWidth?40: 78, textAlign: 'center', fontSize:minWidth? 35:70}]}>Connect with{'\n'} Investors Who Believe{'\n'} in Your Vision</Text>
                        <Text style={[styles.subtitle, {marginBottom: '5%', color: '#FFFFFFCC'}]}>Tailored equity funding for startups looking to scale</Text>
                        <TouchableOpacity style={styles.buttonPrimary} onPress={() => setPopupVisible(true)}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Start Your Equity Journey</Text>
                        </TouchableOpacity>
                    </ExpoLinearGradient>
                    {/* </ImageBackground> */}
                </View>
                <View style={{ paddingHorizontal: '14%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center', flexDirection: minWidth?"column":'row', justifyContent: 'space-between'}}>
                    <View style={{justifyContent: 'center', width: '40%', padding: '4%'}}>
                        <Text style={[styles.headingText,{textAlign:minWidth?"center":"left", fontSize: 48}]}>Why Equity Funding?</Text>
                    </View>
                    <View style={{ width: '60%'}}>
                        <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between', marginBottom: '2%'}}>
                            <ProductExplanation img={require("../assets/images/explanation3.png")} reason={'Equity financing eliminates regular repayment obligations, allowing startups to preserve cash flow and allocate funds toward growth, product development, and operations.'}></ProductExplanation>
                            <ProductExplanation img={require("../assets/images/explanation2.png")} reason={'Equity investors, including venture capitalists and angel investors, offer industry expertise, strategic mentorship, and valuable networks, playing a crucial role in scaling businesses, addressing challenges, and driving market expansion.'}></ProductExplanation>
                        </View>
                        <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between',}}>
                            <ProductExplanation img={require("../assets/images/explanation1.png")} reason={'Founders can secure substantial funding without requiring asset collateral, which is especially advantageous for early-stage startups with limited physical or financial resources.'}></ProductExplanation>
                            <ProductExplanation img={require("../assets/images/equityPageIcon.png")} reason={'Equity financing is ideal for long-term projects, providing capital for sustained growth without the pressure of immediate repayment.'}></ProductExplanation>
                        </View>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%', marginTop: '5%'}}>
                    <Image source={require('../assets/images/how_equity.png')} style={{width: '100%', borderRadius: 20, height: 500}} resizeMode="contain"></Image>
                </View> 
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center', marginBottom: '6%'}}>
                    <Text style={[styles.headingText, {marginBottom: '5%'}]}>
                        How it <Text style={{color: '#2CA560'}}>Works</Text>
                    </Text>
                    <View style={{flexDirection:minWidth?"column": 'row', flex: 1}}>
                        {/* <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}> */}
                            <View style={{marginLeft: '3%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16 :32, fontWeight: 700, marginRight: '3%', marginBottom: '2%'}}>01</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600, marginBottom: '2%'}}>Build Your Profile</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Create a detailed startup profile with key metrics.</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: '3%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16: 32, fontWeight: 700, marginRight: '3%', marginBottom: '2%'}}>02</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600, marginBottom: '2%'}}>Get Scored</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Risk analysis powered by advanced APIs evaluates your potential.</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: '3%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16: 32, fontWeight: 700, marginRight: '3%', marginBottom: '2%'}}>03</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600, marginBottom: '2%'}}>Connect</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Receive proposals from aligned investors.</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: '3%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16: 32, fontWeight: 700, marginRight: '3%', marginBottom: '2%'}}>04</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600, marginBottom: '2%'}}>Close The Deal</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Transparent and secure negotiations facilitated by The Catalyst Tree.</Text>
                                </View>
                            </View>
                        {/* </View> */}
                    </View>   
                </View>
                <View style={{flex: 1, padding: '8%', backgroundColor: 'rgba(51 51 51 / 0.64)', borderRadius: 24, alignItems: 'center',}}>
                    <Text style={[styles.headingText, {flex: 1, marginBottom: '4%'}]}>Key Features</Text>
                    <View style={{flexDirection: minWidth?"column":'row'}}>
                        <View style={{justifyContent: minWidth?"flex-start":'center', alignItems: 'center', flex: 1, marginRight: '5%',flexDirection:minWidth?"row":"column", justifyContent: 'flex-start'}}>
                            <Image source={require("../assets/images/arrow.png")} style={{height:40, width: 40, marginBottom: '2%'}}></Image>
                            <Text style={{ color:'rgba(255, 255, 255, 1)', fontSize: minWidth?15:24, fontWeight: 500, textAlign:minWidth? "left":'center'}}>Access to global investors.</Text>
                        </View>
                        <View style={{justifyContent: minWidth?"flex-start":'center', alignItems: 'center', flex: 1, marginRight: '5%',flexDirection:minWidth?"row":"column", justifyContent: 'flex-start'}}>
                            <Image source={require("../assets/images/arrow.png")} style={{height:40, width: 40, marginBottom: '2%'}}></Image>
                            <Text style={{ color:'rgba(255, 255, 255, 1)', fontSize: minWidth?15: 24, fontWeight: 500, textAlign:minWidth? "left":'center'}}>Non-circumvention policies to protect fairness.</Text>
                        </View>
                        <View style={{justifyContent: minWidth?"flex-start":'center', alignItems: 'center', flex: 1, marginRight: '5%',flexDirection:minWidth?"row":"column", justifyContent: 'flex-start'}}>
                            <Image source={require("../assets/images/arrow.png")} style={{height:40, width: 40, marginBottom: '2%'}}></Image>
                            <Text style={{ color:'rgba(255, 255, 255, 1)', fontSize: minWidth?15:24, fontWeight: 500, textAlign:minWidth? "left":'center'}}>Real-time tracking of your fundraising progress.</Text>
                        </View>
                    </View>
                </View>  
            </View>
            <FounderMessage message={'The Catalyst Tree made securing debt funding effortless. We were funded in just 3 weeks!'} companyName={'TechNova'} designation={'Founder'}></FounderMessage>   
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
        
    )
}