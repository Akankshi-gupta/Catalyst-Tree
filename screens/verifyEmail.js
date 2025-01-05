import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, InputField } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Rect } from 'react-native-svg';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function VerifyEmail({navigation}) {
    // const [gender, setGender] = useState('Male');
    // const [country, setCountry] = useState('India');
    // const [city, setCity] = useState('Bengaluru');
    // const [experience, setExperience] = useState('Serial Entrepreneur');
    // const [define, setDefine] = useState('Owner');
    // const [asset, setAsset] = useState('Owner');
    const [id, setId] = useState('');
    
    useEffect(() => {
        setId(uuidv4().toString());
    }, []);  

    return (
        <ScrollView style={styles.container}>
            <Navbar navigation={navigation}></Navbar>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 1024, width: 812, justifyContent: "center", alignContent: "center" ,flex:1,borderRadius:32,margin:15}}>
                    <Svg height="100%" width="100%" style={{position:'absolute',borderRadius:32}}>
                        <Defs>
                        <RadialGradient id={`radial-gradient-${id}`} cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
                            <Stop offset="0%" stopColor="rgba(114, 206, 99, 1)" stopOpacity="1" /> {/* Outer Color */}
                            <Stop offset="100%" stopColor="rgba(44, 165, 96, 1)" stopOpacity="1" /> {/* Inner Color */}
                        </RadialGradient>
                        </Defs>
                        <Rect x="0" y="0" width="100%" height="100%" fill={`url(#radial-gradient-${id})`} />
                    </Svg>
                    <Text style={styles.header}>Get Started with Us</Text>
                    <Text style={styles.subHeader}>Complete these easy steps to register your account.</Text>
                </View>
                <View style={{width: '40%', padding:'4%', marginHorizontal: '5%', marginVertical: '8%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 24, borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1}}> 
                    <Text style={{fontSize: 12.8, fontWeight: 400, color: 'rgba(255, 255, 255, 1)', letterSpacing: 0.8, marginBottom: '2%'}}>LET'S GET YOU STARTED</Text>
                    <Text style={{fontSize: 25, fontWeight: 500, color: 'rgba(255, 255, 255, 1)', marginBottom: '2%'}}>Verify your email</Text>
                    <Text style={{fontSize: 16, fontWeight: 400, color: 'rgba(255, 255, 255, 1)', marginBottom: '3%'}}>Email</Text>
                    <TextInput placeholderTextColor={"rgba(255, 255, 255, 0.72)"} placeholder={"eg. johnfrans@gmail.com"} style={{height: 48, borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, padding: '3%', color: 'white',  marginBottom: '3%', fontSize: 16,}}></TextInput>
                    <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 99, height: 56, alignItems: 'center', justifyContent: 'center', marginBottom: '20%'}}>
                        <Text style={{fontSize: 15, fontWeight: 700, color: 'rgba(14, 14, 14, 1)'}}>GET OTP</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 16, fontWeight: 400, color: 'rgba(255, 255, 255, 1)', marginBottom: '4%'}}>Enter OTP</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%'}}>
                        <TextInput style={{borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', height: 50, width: '12%', borderRadius: 8, fontSize: 28, textAlign: 'center'}}></TextInput>
                        <TextInput style={{borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', height: 50, width: '12%', borderRadius: 8, fontSize: 28, textAlign: 'center'}}></TextInput>
                        <TextInput style={{borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', height: 50, width: '12%', borderRadius: 8, fontSize: 28, textAlign: 'center'}}></TextInput>
                        <TextInput style={{borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', height: 50, width: '12%', borderRadius: 8, fontSize: 28, textAlign: 'center'}}></TextInput>
                        <TextInput style={{borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', height: 50, width: '12%', borderRadius: 8, fontSize: 28, textAlign: 'center'}}></TextInput>
                        <TextInput style={{borderColor: 'rgba(214, 214, 214, 0.5)', borderWidth: 1, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'white', height: 50, width: '12%', borderRadius: 8, fontSize: 28, textAlign: 'center'}}></TextInput>
                    </View>
                    <TouchableOpacity style={{backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 99, height: 56, alignItems: 'center', justifyContent: 'center', marginBottom: '38%'}}>
                        <Text style={{fontSize: 15, fontWeight: 700, color: 'rgba(14, 14, 14, 1)'}}>Verify Now</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 15, fontWeight: 400, color: 'rgba(255, 255, 255, 1)', textAlign: 'center'}}>Already have an account? LOGIN HERE</Text>
                </View>
            </View>        
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#000', 
        padding: 20 
    },

    header: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#FFF', 
        textAlign: 'center', 
        marginVertical: 20 
    },

    subHeader: { 
        fontSize: 16, 
        color: '#FFF', 
        textAlign: 'center', 
        marginBottom: 20 
    },

    section: {},

    sectionTitle: { 
        fontSize: 28, 
        fontWeight: '500', 
        color: '#FFF', 
        marginBottom: 10 
    },

    sectionSubTitle: { 
        fontSize: 16, 
        fontWeight: '400', 
        color: 'rgba(255, 255, 255, 0.8)', 
        marginBottom: 10 
    },
    
    input: {
        backgroundColor: '#333',
        color: '#FFF',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        fontSize: 14,
    },

    textarea: { 
        height: 100, 
        textAlignVertical: 'top' 
    },

    picker: { 
        color: '#FFF', 
        backgroundColor: '#333', 
        borderRadius: 8,
        marginVertical: 10,
        fontSize: 14,
        padding:12 
    },

    inputContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },

    label: { 
        color: '#FFF', 
        fontSize: 16, 
        marginTop: 10 
    },

    radioContainer: { 
        flexDirection: 'row', 
        marginVertical: 10 
    },

    radioButton: { 
        marginRight: 20 
    },

    radioText: { 
        color: '#888', 
        fontSize: 14 
    },

    radioTextActive: { 
        color: '#FFF', 
        fontSize: 14, 
        fontWeight: 'bold' 
    },

    uploadBox: {
        height: 100,
        borderWidth: 1,
        borderColor: '#FFF',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 8,
    },

    uploadText: { 
        color: '#888', 
        fontSize: 14 
    },

    button: { 
        backgroundColor: '#fff', 
        padding: 20, 
        borderRadius: 50, 
        alignItems: 'center', 
        marginTop: 20 
    },

    buttonText: { 
        color: '#000', 
        fontSize: 16, 
        fontWeight: '500' 
    },

    dateContainer: {
        backgroundColor: '#2A2A2A',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },

    dateText: {
        color: '#FFF',
        fontSize: 16,
    },
});
