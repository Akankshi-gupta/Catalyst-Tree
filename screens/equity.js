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

export default function Equity({navigation}){
    const { width, height } = useWindowDimensions();
    const minWidth = width<600;
    const [id, setId] = useState('');
        
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{flex: 1}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>

                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="  rgba(114, 206, 99, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    {/* Apply Radial Gradient to an Ellipse (Oval Shape) */}
                    <Ellipse cx={0} cy={'45%'} rx={'50%'} ry={"15%"} fill={`url(#radial-gradient-${id})`} />

                    <Ellipse cx={'50%'} cy={'90%'} rx={'40%'} ry={"10%"} fill={`url(#radial-gradient-${id})`} />
                </Svg>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%'}}>
                    {/* <ImageBackground source={require("../assets/images/background2.png")} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%', overflow: 'hidden'}}> */}
                    <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '10%', alignItems: 'center', borderRadius: 24, justifyContent: 'center', height: '100%', width: '100%'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <View style={{backgroundColor: '#FFFFFF1A', paddingVertical: '0.5%', paddingHorizontal: '2%', borderRadius: 66, borderColor: "#FFFFFF", borderWidth: 1, padding: '2%', alignItems: 'center', marginBottom: '1%'}}>
                            <Text style={{ color: '#FFFFFF'}}>Unlock Growth with Smart Equity Funding</Text>
                        </View>
                        <Text style={[styles.title, {lineHeight:minWidth?40: 78, textAlign: 'center', fontSize:minWidth? 35:70}]}>Connect with{'\n'} Investors Who Believe{'\n'} in Your Vision</Text>
                        <Text style={[styles.subtitle, {marginBottom: '5%', color: '#FFFFFFCC'}]}>Tailored equity funding for startups looking to scale</Text>
                        <TouchableOpacity style={styles.buttonPrimary}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Start Your Equity Journey</Text>
                        </TouchableOpacity>
                    </ExpoLinearGradient>
                    {/* </ImageBackground> */}
                </View>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center'}}>
                    <ProductExplanation why={'Why Equity Funding?'} img1={require("../assets/images/explanation1.png")} img2={require("../assets/images/explanation2.png")} img3={require("../assets/images/explanation3.png")} reason1={'A curated investor network tailored to your business stage and sector.'} reason2={'Comprehensive guidance from pitch creation to deal closure.'} reason3={'Advanced analytics to help you stand out to potential investors.'}></ProductExplanation>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%', marginTop: '5%'}}>
                    <Image source={require('../assets/images/how_equity.png')} style={{width: '100%', borderRadius: 20, aspectRatio: 1}} resizeMode="contain"></Image>
                </View> 
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%', alignItems: 'center', marginBottom: '6%'}}>
                    <Text style={[styles.headingText, {marginBottom: '5%'}]}>
                        How it <Text style={{color: '#2CA560'}}>Works</Text>
                    </Text>
                    <View style={{flexDirection:minWidth?"column": 'row', flex: 1}}>
                        {/* <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}> */}
                            <View style={{marginLeft: '2%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16 :32, fontWeight: 400, marginRight: '3%'}}>01</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600}}>Apply</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Submit your application with basic business details.</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: '2%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16: 32, fontWeight: 400, marginRight: '3%'}}>02</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600}}>Risk Scoring</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Our advanced analytics assess your eligibility and suggest funding options.</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: '2%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16: 32, fontWeight: 400, marginRight: '3%'}}>03</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600}}>Matchmaking</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Connect with our network of pre-vetted lenders.</Text>
                                </View>
                            </View>
                            <View style={{marginLeft: '2%', flex: 1,flexDirection:minWidth?"row":"column",paddingRight:minWidth?"5%":0,width:minWidth?"70%":"auto"}}>
                                <Text style={{color: '#2CA560', fontSize:minWidth?16: 32, fontWeight: 400, marginRight: '3%'}}>04</Text>
                                <View>
                                    <Text style={{color: '#FFFFFF', fontSize:minWidth?16: 32, fontWeight: 600}}>Funding Secured</Text>
                                    <Text style={[styles.smallText, {textAlign: 'left',width:minWidth?"75%":"auto"}]}>Get funds in a matter of weeks.</Text>
                                </View>
                            </View>
                        {/* </View> */}
                    </View>   
                </View>
                <View style={{flex: 1, padding: '8%', backgroundColor: 'rgba(51 51 51 / 0.64)', borderRadius: 24, alignItems: 'center',}}>
                    <Text style={[styles.headingText, {flex: 1, marginBottom: '4%'}]}>Key Features</Text>
                    <View style={{flexDirection: minWidth?"column":'row'}}>
                        <View style={{justifyContent: minWidth?"flex-start":'center', alignItems: 'center', flex: 1, marginRight: '5%',flexDirection:minWidth?"row":"column"}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <Text style={{ color:'rgba(255, 255, 255, 1)', fontSize: minWidth?15:24, fontWeight: 500, textAlign:minWidth? "left":'center'}}>Access to global investors.</Text>
                        </View>
                        <View style={{justifyContent: minWidth?"flex-start":'center', alignItems: 'center', flex: 1, marginRight: '5%',flexDirection:minWidth?"row":"column"}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
                            <Text style={{ color:'rgba(255, 255, 255, 1)', fontSize: minWidth?15: 24, fontWeight: 500, textAlign:minWidth? "left":'center'}}>Non-circumvention policies to protect fairness.</Text>
                        </View>
                        <View style={{justifyContent: minWidth?"flex-start":'center', alignItems: 'center', flex: 1, marginRight: '5%',flexDirection:minWidth?"row":"column"}}>
                            <Image source={require("../assets/images/explanation3.png")}></Image>
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