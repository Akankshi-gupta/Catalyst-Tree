import React, {useState, useEffect, useRef} from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { Text, View, TouchableOpacity, ImageBackground, ScrollView, useWindowDimensions, Image, Easing, Animated , StyleSheet} from "react-native";
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import Counts from "../components/counts";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FaCheckCircle, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText, Rect, Mask, ClipPath  } from "react-native-svg";
import FrequentlyAsked from "../components/frequentlyAskedQuestions";
import StartFunding from "../components/startFundingSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CustomPopup from "./Modal";

export default function AboutUs({navigation}){
    const { width, height } = useWindowDimensions();
    const [id, setId] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);

    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);

    const animationHeight1 = useRef(new Animated.Value(0)).current;
    const animationHeight2 = useRef(new Animated.Value(0)).current;
    const animationHeight3 = useRef(new Animated.Value(0)).current;

    const toggleExpansion = (section) => {
        let animationHeight;
        let isExpandedSetter;
    
        switch (section) {
          case 1:
            animationHeight = animationHeight1;
            isExpandedSetter = setIsExpanded1;
            break;
          case 2:
            animationHeight = animationHeight2;
            isExpandedSetter = setIsExpanded2;
            break;
          case 3:
            animationHeight = animationHeight3;
            isExpandedSetter = setIsExpanded3;
            break;
          default:
            return;
        }
    
        isExpandedSetter((prev) => {
          const isExpanding = !prev;
          Animated.timing(animationHeight, {
            toValue: isExpanding ? 120 : 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
          return isExpanding;
        });
    };

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
    
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
            <View style={{flex: 1}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backgroundColor: 'transparent',}}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}-2`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.4)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    <Ellipse cx={0} cy={'45%'} rx={'80%'} ry={"30%"} fill={`url(#radial-gradient-${id}-2)`} />
                </Svg>
                <CustomPopup visible={popupVisible} onClose={() => setPopupVisible(false)}/>
                <Navbar navigation={navigation}></Navbar>
                <View style={{ paddingHorizontal: '5%', paddingTop: '3%', paddingBottom: '5%',}}>
                    <ExpoLinearGradient colors={["#26976B" ,"#72CE63"]} style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '8%', alignItems: 'center', borderRadius: 24, justifyContent: 'center'}} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1  }}>
                        <Text style={[styles.title, {lineHeight: 78, textAlign: 'center', fontSize: 70}]}>Connecting {'\n'}Innovators with the {'\n'}Capital to Grow.</Text>
                        <Text style={[styles.subtitle, {marginBottom: '5%', color: '#FFFFFFCC'}]}>Get a car wherever and whenever you need it with your iOS or Android device.</Text>
                        <TouchableOpacity style={styles.buttonPrimary}  onPress={() => setPopupVisible(true)}>
                            <Text style={[styles.buttonText1, {color: '#0E0E0E'}]}>Get Started</Text>
                        </TouchableOpacity>
                    </ExpoLinearGradient>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%', marginBottom: '7%'}}>
                    <Image source={require("../assets/images/Frame 1272636721.png")} style={{width: '40%', height: '100%', borderRadius: 20, marginRight: '6%', flex: 1}}></Image>
                    <View style={{flex: 1, justifyContent: 'center', padding: '2%'}}>
                        <Text style={[styles.headingText, {lineHeight: 58,}]}>
                            Connecting Innovators with the Capital to Grow
                        </Text>
                        <Text style={{color: '#FFFFFF', fontWeight: 400, fontSize: 16, marginTop: '4%'}}>
                            The Catalyst Tree is a platform built to fuel innovation, accelerate growth, and bridge the gap between businesses and lenders/investors. Whether you're a startup seeking seed funding or an established business looking for capital to expand, we offer the flexibility and options you need—debt financing for expansion or equity funding for long-term growth.
                        </Text>
                        <Text style={{color: '#FFFFFF', fontWeight: 400, fontSize: 16, marginTop: '4%'}}>
                            We believe that great businesses deserve the right resources to succeed. Our platform provides customized solutions to match startups, small businesses, and growth-stage companies with the perfect investors who share their vision.
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: '8%', paddingVertical: '2%', justifyContent: 'space-between'}}>
                        <Text style={[styles.headingText, {lineHeight: 58, flex: 1}]}>We've been helping customer globally.</Text>
                        <View style={{flex: 1}}>
                            <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', alignItems: "center"}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Who we are?</Text>
                                    <TouchableOpacity onPress={() => toggleExpansion(1)}>
                                        {isExpanded1 ? (
                                            <FaAngleUp name="angle-up" size={24} color="white" />
                                        ) : (
                                            <FaAngleDown name="angle-down" size={24} color="white" />
                                        )}
                                    </TouchableOpacity>
                                </View>
                                <Animated.View style={{ height: animationHeight1 , overflow: 'hidden', }}>
                                    <Text style={[styles.smallText, {marginBottom: '3%', textAlign: 'left'}]}>We empower startups and investors through a seamless platform that fosters collaboration, delivers data-driven insights, and unlocks unmatched growth opportunities. With tailored support, transparent processes, and access to exclusive service, we drive success for every stakeholder in the ecosystem.</Text>
                                </Animated.View>
                                
                            </View>
                            <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', alignItems: "center"}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Our Mission</Text>
                                    <TouchableOpacity onPress={() => toggleExpansion(2)}>
                                        {isExpanded2 ? (
                                            <FaAngleUp name="angle-up" size={24} color="white" />
                                        ) : (
                                            <FaAngleDown name="angle-down" size={24} color="white" />
                                        )}
                                    </TouchableOpacity>
                                </View>
                                <Animated.View style={{ height: animationHeight2 , overflow: 'hidden',}}>
                                    <Text style={[styles.smallText, {marginBottom: '3%', textAlign: 'left'}]}>Our mission is to empower startups and investors globally by creating a transparent, collaborative, and innovative ecosystem. We aim to simplify the fundraising journey, accelerate startup growth, and enable strategic partnerships through cutting-edge technology and personalized support, driving impactful and sustainable success across industries.</Text>
                                </Animated.View>
                            </View>
                            <View style={{borderBottomColor: '#D6D6D6', borderBottomWidth: 1, marginBottom: '4%'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '2%', alignItems: "center"}}>
                                    <Text style={{color: 'white', fontSize: 24, fontWeight: 500}}>Our Vision</Text>
                                    <TouchableOpacity onPress={() => toggleExpansion(3)}>
                                        {isExpanded3 ? (
                                            <FaAngleUp name="angle-up" size={24} color="white" />
                                        ) : (
                                            <FaAngleDown name="angle-down" size={24} color="white" />
                                        )}
                                    </TouchableOpacity>
                                </View>
                                <Animated.View style={ { height: animationHeight3, overflow: 'hidden', }}>
                                    <Text style={[styles.smallText, {marginBottom: '3%', textAlign: 'left'}]}>To become the most trusted and comprehensive platform for startups, investors, and partners, fostering innovation, growth, and success. We envision a future where every promising idea finds the right support, every investor makes impactful decisions, and the global ecosystem thrives through seamless collaboration and technological advancement.</Text>
                                </Animated.View>
                            </View>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: '8%', paddingVertical: '2%', height: 500}}>
                        <Image source={require('../assets/images/Frame 1.png')} style={{width: '100%', borderRadius: 20, height: '100%'}}></Image>
                    </View>
                    <Counts></Counts>
                </View>        
            </View>
            <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginTop: '5%'}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.2)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="black" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    <Ellipse cx={'50%'} cy={'50%'} rx={'50%'} ry={"50%"} fill={`url(#radial-gradient-${id})`} />
                </Svg>
                <View style={{alignItems: 'center', marginBottom: '2%'}}>
                    <Text style={[styles.headingText,{ textAlign: 'center', marginBottom: '2%'}]}>Why Choose Us</Text>
                    <Text style={[styles.smallText, {width: '50%'}]}>At the heart of our offering are a set of innovative features that have been meticulously designed to address the specific needs.</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Tailore Funding Solutions</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>Choose the financing option that fits your goals, whether it's debt for predictable cash flow or equity to bring on investors who can add value beyond just capital.</Text>
                    </View>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Diverse Investment Opportunities</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>From startups looking to disrupt industries to established businesses seeking to scale, our platform offers investors access to a wide variety of opportunities.</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Investor-Ready Startups</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>We carefully vet each business and ensure that they are ready for investment, providing investors with high-quality opportunities to invest in.</Text>
                    </View>
                    <View style={{backgroundColor: '#FFFFFF0D', borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, flex: 1, paddingHorizontal: '3%', paddingVertical: '4%', margin: '2%'}}>
                        <Text style={{fontWeight: 400, fontSize: 24, color: '#FFFFFF', letterSpacing: 1, marginBottom: '2%'}}><FaCheckCircle name="check-circle" size={30} color="white" /> Global Network, Local Impact</Text>
                        <Text style={[styles.smallText,{ textAlign: 'start'}]}>With an expansive network of investors and businesses, The Catalyst Tree facilitates connections that can drive both local success and global impact.</Text>
                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginTop: '5%', alignItems: 'center'}}>
                <Svg style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%',}}>
                    <Defs>
                        <RadialGradient id={`radial-gradient-${id}-1`} cx="50%" cy="50%" fx="50%" fy="50%" rx="90%" ry="20%">
                            <Stop offset="0%" stopColor="rgba(44, 165, 96, 0.4)" stopOpacity="1" />
                            <Stop offset="100%" stopColor="rgba(0, 0, 0, 0)" stopOpacity="1" />
                        </RadialGradient>
                    </Defs>

                    <Ellipse cx={'50%'} cy={'50%'} rx={'49%'} ry={"47%"} fill={`url(#radial-gradient-${id}-1    )`} />
                </Svg>
                <TouchableOpacity style={[styles.buttonSecondary,{borderColor: '#2CA560', marginTop: '4%', width: '14%'}]}>
                    <Text style={[styles.buttonText1, {color: '#2CA560'}]}>Product</Text>
                </TouchableOpacity>
                <Text style={[styles.headingText, {marginBottom: '3%'}]}>Explore Our Products</Text>
                <View style={{width: '100%', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity style={{flex: 1, margin: '2%', justifyContent: 'right', alignItems: 'flex-end'}} onPress={() => navigation.navigate("Debt")}>
                            <Image source={require('../assets/images/Debt Funding2.png')} style={{ borderRadius: 12, height: 350, width: 350}} resizeMode="contain"></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, margin: '2%', alignItems: 'flex-start' }} onPress={() => navigation.navigate("Equity")}>
                            <Image source={require('../assets/images/Equity Funding2.png')} style={{ borderRadius: 12, height: 350, width: 350 }} resizeMode="contain"></Image>
                        </TouchableOpacity>
                        {/* <ShinyImage source={require('../assets/images/Debt Funding2.png')} onPress={() => navigation.navigate("Debt")}></ShinyImage> */}
                        {/* <ShinyImage source={require('../assets/images/Equity Funding2.png')} onPress={() => navigation.navigate("Debt")}></ShinyImage> */}
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <TouchableOpacity style={{flex: 1, margin: '2%', alignItems: 'flex-end'}} onPress={() => navigation.navigate("Mergers & Acquisition")}>
                            <Image source={require('../assets/images/Mergers2.png')} style={{ borderRadius: 12, height: 350, width: 350}} resizeMode="contain"></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, margin: '2%', alignItems: 'flex-start' }} onPress={() => navigation.navigate("Acceleration")}>
                            <Image source={require('../assets/images/Acceleration Programs.png')} style={{  borderRadius: 12, height: 350, width: 350, }} resizeMode="contain"></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginVertical: '5%', alignItems: 'center'}}>
                <View style={{alignItems: 'flex-end',}}>
                    <View style={{width: '38%', marginBottom: '4%'}}>
                        <Text style={[styles.headingText, {textAlign: 'left'}]}>Our Leadership team</Text>
                        <Text style={[styles.smallText, {textAlign: 'left'}]}>Empowering digital disruptors to achieve the extraordinary, Axel Capital brings together capital, creativity, and connectivity to turn groundbreaking ideas into global solutions.</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '1%'}}>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')}  ></Image>
                    <Image style={{flex: 2, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction men.png')} resizeMode="cover"></Image>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')} resizeMode="cover"></Image>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: '1%'}}>
                    <Image style={{flex: 2, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction men.png')}  ></Image>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')} resizeMode="cover"></Image>
                    <Image style={{flex: 1, marginHorizontal: '1%', borderRadius: 20}} source={require('../assets/images/adventure junction women.png')} resizeMode="cover"></Image>
                </View>
            </View> */}
            {/* <View style={{paddingHorizontal: '8%', paddingVertical: '2%', marginBottom: '5%'}}>
                <Text style={[styles.headingText, {marginBottom: '4%',}]}>Frequently Asked Questions</Text>
                <FrequentlyAsked Question='What is a Bounce?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='What is the difference between the Free and Paid versions?' Answer={'Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.'}></FrequentlyAsked>
                <FrequentlyAsked Question='What if I decide to change a plan from monthly to annually and back?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='How do I add personalised data to messages?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='How do I re-subscribe a contact who opted out or was accidentally removed?' Answer={''}></FrequentlyAsked>
                <FrequentlyAsked Question='Do you plan on adding more features in the future?' Answer={''}></FrequentlyAsked>
            </View> */}
            <StartFunding navigation={navigation}></StartFunding>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
        
    )
}



const ShinyImage = ({ source, onPress }) => {
    const [shineAnim] = useState(new Animated.Value(0));
    const [id, setId] = useState('');
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);
  
    const startShine = () => {
        shineAnim.setValue(0);
        Animated.timing(shineAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
    };

    const stopShine = () => {
        Animated.timing(shineAnim, {
          toValue: 0,
          duration: 500,  // Make the shine fade out smoothly (1 second)
          easing: Easing.ease,  // Apply easing to make it smooth
          useNativeDriver: true,
        }).start();
      };
    
    const translate = shineAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-1 * Math.max(imageDimensions.width, imageDimensions.height), Math.max(imageDimensions.width, imageDimensions.height)],
    });
    
  
    // const stopShine = () => {
    //   shineAnim.stopAnimation();
    //   shineAnim.setValue(0);
    // };
  
    // const translateX = shineAnim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['-100%', '200%'],
    // });
  
    return (
      <TouchableOpacity
        style={{flex: 1, margin: '2%', overflow: 'hidden'}}
        onPress={onPress}
        onMouseEnter={startShine}
        onMouseLeave={stopShine}
      >
        <View
            style={{ position: 'relative' }}
            onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                setImageDimensions({ width, height });
            }}
        >
        <Image source={source} style={{ width: '100%', aspectRatio: 1, borderRadius: 12 }} />
        <Animated.View
          style={[
            insiedestyles.shinyOverlay,
            {
                width: imageDimensions.width * 2,
                height: imageDimensions.height * 2,

                transform: [{ translateX: translate }, { translateY: translate }],
                backgroundColor: 'transparent'
            },
          ]}
        >
          <Svg height="50%" width="50%">
            <Defs>
                <SvgLinearGradient id={`shine-${id}`} x1="0" y1="0" x2="1" y2="1">
                    <Stop offset="43%" stopColor="rgba(255, 255, 255, 0)" />
                    <Stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                    <Stop offset="58%" stopColor="rgba(255, 255, 255, 0)" />
                </SvgLinearGradient>
                <ClipPath id={`clip-${id}`}>
                    <Rect
                        x="0"
                        y="0"
                        width={imageDimensions.width}
                        height={imageDimensions.height}
                        rx={12} // Rounded corners
                        ry={12}
                    />
                </ClipPath>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" fill={`url(#shine-${id})`}  clipPath={`url(#clip-${id})`} />
          </Svg>
        </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };
  

  const insiedestyles = StyleSheet.create({
    container: {
      width: '50%',
    //   flex: 1
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      margin: '2%',
      borderRadius: 12,
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 12,
    },
    shinyOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  