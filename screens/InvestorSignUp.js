import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Rect } from 'react-native-svg';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function InvestorSignUp({navigation}) {
    const [gender, setGender] = useState('Male');
    const [country, setCountry] = useState('India');
    const [city, setCity] = useState('Bengaluru');
    const [experience, setExperience] = useState('Serial Entrepreneur');
    const [define, setDefine] = useState('Owner');
    const [asset, setAsset] = useState('Owner');
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
                <View style={{flex:1,padding:15,margin:15}}> 
                    {/* Personal Details */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Personal Details</Text>
                        <Text style={styles.sectionSubTitle}>Enter your personal data to create your account as a Startup</Text>
                        <View style={styles.inputContainer}>
                            <InputField label={"Full Name"} placeholder={"eg. John"} ></InputField>
                            <View style={{flex:1,paddingLeft:15}}>
                                <Text style={styles.label}>Gender</Text>
                                <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} style={styles.picker}>
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <InputField label={"Email"} placeholder={"eg. johnfrans@gmail.com"}></InputField>
                            <View style={{width:15}}></View>
                            <InputField label={"Phone Number"} placeholder={"91+ xxxxxxxxxx"}></InputField>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={{flex:1}}>
                                <Text style={styles.label}>City</Text>
                                <Picker selectedValue={city} onValueChange={(itemValue) => setCity(itemValue)} style={styles.picker}>
                                    <Picker.Item label="Bengaluru" value="Bengaluru" />
                                    <Picker.Item label="Mumbai" value="Mumbai" />
                                </Picker>
                            </View>
                            <View style={{flex:1 ,paddingLeft:15}}>
                                <Text style={styles.label}>Country</Text>
                                <Picker selectedValue={country} onValueChange={(itemValue) => setCountry(itemValue)} style={styles.picker}>
                                    <Picker.Item label="India" value="India" />
                                    <Picker.Item label="USA" value="USA" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <InputField label={"PAN Number"} placeholder={"XXXXXXXXXXXX"}></InputField>
                            <View style={{width:15}}></View>
                            <InputField label={"Company"} placeholder={"Company Name"}></InputField>
                        </View>
                        <InputField label={"LinkedIn Profile"} placeholder={"LinkedIn URL"}></InputField>
                        <Text style={styles.label}>Professional Summary(100 words)</Text>
                        <TextInput style={[styles.input, styles.textarea]} placeholder="Write here.." placeholderTextColor="#808080" multiline/>
                        <View style={styles.inputContainer}>
                            <View style={{flex:1}}>
                                <Text style={styles.label}>What Defines You?</Text>
                                <Picker selectedValue={define} onValueChange={(itemValue) => setDefine(itemValue)} style={styles.picker}>
                                    <Picker.Item label="Owner" value="Owner" />
                                    <Picker.Item label="Owner" value="Owner" />
                                </Picker>
                            </View>
                            <View style={{flex:1 ,paddingLeft:15}}>
                                <Text style={styles.label}>Experience</Text>
                                <Picker selectedValue={experience} onValueChange={(itemValue) => setExperience(itemValue)} style={styles.picker}>
                                    <Picker.Item label="Serial Entrepreneur" value="Serial Entrepreneur" />
                                    <Picker.Item label="Serial Entrepreneur" value="Serial Entrepreneur" />
                                </Picker>
                                </View>
                            </View>
                    </View>
                    <View style={{flex:1 }}>
                        <Text style={styles.label}>Assets (Amount)</Text>
                        <Picker selectedValue={asset} onValueChange={(itemValue) => setAsset(itemValue)} style={styles.picker}>
                            <Picker.Item label="1 Lakh - 10 Lakh" value="1 Lakh - 10 Lakh" />
                            <Picker.Item label="11 Lakh - 20 Lakh" value="11 Lakh - 20 Lakh" />
                        </Picker>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer navigation={navigation}></Footer>
        </ScrollView>
    );
}

const InputField = ({ label, placeholder, onChangeText, value, keyboardType }) => {
    return (
        <View style={{flex:1}}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#808080" onChangeText={onChangeText} value={value} keyboardType={keyboardType || 'default'}/>
        </View>
    );
  };

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
