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

export default function Debt({navigation}){
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;
    const [isHovered, setIsHovered] = useState(1);
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
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id={`radial-gradient-${id}-3`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(114, 206, 99, 0.8)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    <Ellipse cx={0} cy={'35%'} rx={'60%'} ry={"30%"} fill={`url(#radial-gradient-${id}-1)`} />

                    <Ellipse cx={'50%'} cy={'63%'} rx={'50%'} ry={"15%"} fill={`url(#radial-gradient-${id}-2)`} />

                    <Ellipse cx={'50%'} cy={'86%'} rx={'65%'} ry={"20%"} fill={`url(#radial-gradient-${id}-3)`} />
                </Svg>
                {/* <CustomPopup visible={popupVisible} onClose={() => setPopupVisible(false)}/> */}
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center'}}>
                    <ImageBackground source={require("../assets/images/background2.png")} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%', overflow: 'hidden'}}>
                        <View style={{backgroundColor: '#FFFFFF1A', paddingVertical: '1%', paddingHorizontal: '4%', borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, alignItems: 'center'}}>
                            <Text style={{ color: '#FFFFFF'}}>Flexible Debt Solutions for Founders</Text>
                        </View>
                        <Text style={[styles.title, {lineHeight: minWidth?44:78, textAlign: 'center', fontSize:minWidth?35 :70}]}>Fuel Growth Without {'\n'} Giving Up Equity</Text>
                        <Text style={[styles.subtitle, {marginBottom: '5%', color: '#FFFFFFCC'}]}>Tailored debt funding solutions for startups and businesses</Text>
                        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("Startup")}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Apply for Debt Funding</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center', flexDirection: minWidth?"column":'row', justifyContent: 'space-between'}}>
                    <View style={{justifyContent: 'center', width: '22%'}}>
                        <Text style={[styles.headingText,{textAlign:minWidth?"center":"left"}]}>Why Debt Funding?</Text>
                    </View>
                    <View style={{flexDirection: minWidth?"column":'row', justifyContent: 'space-between', width: '78%'}}>
                        <ProductExplanation img={require("../assets/images/ownership.png")} heading={'Ownership retention'} reason={'Founders maintain full ownership and control of the business, as debt financing does not involve selling equity or diluting shares. This is particularly important for founders who want to retain decision-making power.'}></ProductExplanation>
                        <ProductExplanation img={require("../assets/images/tax.png")} heading={'Tax advantages'} reason={'Interest payments on debt are often tax-deductible, reducing the effective cost of borrowing and providing an indirect financial benefit to the business.'}></ProductExplanation>
                        <ProductExplanation img={require("../assets/images/no-profit.png")} heading={'No profit sharing'} reason={'Lenders are entitled only to the repayment of the principal and interest, not a share of the company’s profits. This ensures that founders and existing shareholders retain all future earnings.'}></ProductExplanation>
                    </View>
                    
                </View>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center',height:minWidth?"auto":"auto"}}>
                    <Text style={[styles.headingText,{ marginBottom: '5%'}]}>
                        How it <Text style={{color: '#2CA560'}}>Works</Text>
                    </Text>
                    <View style={{flexDirection:minWidth?"column": 'row', width: '100%'}}>
                        <View style={{flex:minWidth?8:1 ,justifyContent: 'center'}} onMouseLeave={() => setIsHovered(1)}>
                            <View style={{flexDirection: 'row', marginBottom: '12%', opacity: isHovered === 1 ? 1: 0.5}} onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(null)}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16:32, fontWeight: 400, marginRight: '3%'}}>01</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16:32, fontWeight: 600}}>Apply</Text>
                                    <Text style={[styles.smallText,{fontSize:minWidth?14:16}]}>Submit your application with basic business details.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', opacity: isHovered === 2 ? 1: 0.5, marginBottom: '12%'}} onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(null)}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16:32, fontWeight: 400, marginRight: '3%'}}>02</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16:32, fontWeight: 600}}>Risk Scoring</Text>
                                    <Text style={[styles.smallText,{fontSize:minWidth?14:16}]}>Our advanced analytics assess your eligibility and suggest funding options.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', opacity: isHovered === 3 ? 1: 0.5, marginBottom: '12%'}} onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(null)}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16:32, fontWeight: 400, marginRight: '3%'}}>03</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16:32, fontWeight: 600}}>Matchmaking</Text>
                                    <Text style={[styles.smallText,{fontSize:minWidth?14:16}]}>Connect with our network of pre-vetted lenders.</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', opacity: isHovered === 4 ? 1: 0.5, marginBottom: '12%'}} onMouseEnter={() => setIsHovered(4)} onMouseLeave={() => setIsHovered(null)}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16:32, fontWeight: 400, marginRight: '3%'}}>04</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16:32, fontWeight: 600}}>Funding Secured</Text>
                                    <Text style={[styles.smallText,{fontSize:minWidth?14:16}]}>Get funds in a matter of weeks.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:minWidth?0:1}}>
                        <Image source={require("../assets/images/man working.png")} style={{borderRadius: 20, marginLeft:minWidth?0: '6%', flex: 1}} resizeMode="contain"></Image>
                        </View>
                    </View>   
                </View>
                <View style={{flex: 1, flexDirection:minWidth?"column": 'row', paddingHorizontal: '8%', paddingVertical: '2%', justifyContent: minWidth?"center":'space-between',}}>
                    <Text style={[styles.headingText, {flex: 1}]}>Key Features</Text>
                    <View style={{flex:minWidth?3: 1}}>
                        <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row'}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <View style={{marginBottom: '3%', justifyContent: 'center', flex: 1}}>
                                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize:minWidth? 15:24, fontWeight: 500}}>Transparent terms.</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row'}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <View style={{marginBottom: '3%', justifyContent: 'center', flex: 1}}>
                                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize:minWidth? 15:24, fontWeight: 500}}>Non-circumvention contracts ensuring a fair process.</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%', flexDirection: 'row'}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <View style={{marginBottom: '3%', justifyContent: 'center', flex: 1}}>
                                <Text style={{textAlign: 'left', color: '#FFFFFF', fontSize:minWidth? 15:24, fontWeight: 500}}>Dedicated support team for every deal.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%'}}>
                    <Image source={require('../assets/images/coins_graph.png')} style={{width: '100%', borderRadius: 20, height: 500}} resizeMode="contain"></Image>
                </View>   
            </View>
            <FounderMessage message={'The Catalyst Tree made securing debt funding effortless. We were funded in just 3 weeks!'} companyName={'TechNova'} designation={'Founder'}></FounderMessage>   
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
        
    )
}