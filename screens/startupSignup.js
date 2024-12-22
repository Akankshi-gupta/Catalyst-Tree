import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import { AiOutlineUpload } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import { Rect } from 'react-native-svg';
import Svg, { Defs, RadialGradient, Stop, Ellipse, LinearGradient as SvgLinearGradient ,Text as SvgText } from "react-native-svg";

export default function StartupSignUp() {
    const [gender, setGender] = useState('Male');
    const [country, setCountry] = useState('India');
    const [city, setCity] = useState('Bengaluru');
    const [coFounderGender, setCoFounderGender] = useState('Male');
    const [businessSector, setBusinessSector] = useState('Finance');
    const [isSingleFounder, setIsSingleFounder] = useState(false);
    const [stage, setStage] = useState('Beta');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    // const [isSingleFounder, setIsSingleFounder] = useState('Yes');
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 1024, width: 812, justifyContent: "center", alignContent: "center" ,flex:1,borderRadius:32,margin:15}}>
                <Svg height="100%" width="100%" style={{position:'absolute',borderRadius:32}}>
                    <Defs>
                    <RadialGradient
                        id="grad"
                        cx="50%" // Center X
                        cy="50%" // Center Y
                        rx="50%" // Radius X
                        ry="50%" // Radius Y
                        fx="50%" // Focal point X
                        fy="50%" // Focal point Y
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(114, 206, 99, 1)" stopOpacity="1" /> {/* Outer Color */}
                        <Stop offset="100%" stopColor="rgba(44, 165, 96, 1)" stopOpacity="1" /> {/* Inner Color */}
                    </RadialGradient>
                    </Defs>
                    <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
                </Svg>
                    <Text style={styles.header}>Get Started with Us</Text>
                    <Text style={styles.subHeader}>Complete these easy steps to register your account.</Text>
                    <View style={{backgroundColor:"white",borderRadius:12,flexDirection:'row',paddingVertical:20,paddingHorizontal:24,height:64,width:380,alignSelf:'center'}}>
                        <View style={{backgroundColor:"black",height:24,width:24,borderRadius:12,justifyContent:'center',marginRight:16}}>
                            <Text style={{color:"white",fontSize:14,fontWeight:500,textAlign:'center'}}>1</Text>
                        </View>
                        <Text style={{color:"black",fontSize:16,fontWeight:"400",textAlign:'center'}}>Personal Detail</Text>
                    </View>
                    <View style={{backgroundColor:"rgba(255, 255, 255, 0.12)",borderRadius:12,flexDirection:'row',paddingVertical:20,paddingHorizontal:24,height:64,width:380,alignSelf:'center',marginTop:12}}>
                        <View style={{backgroundColor:"rgba(255, 255, 255, 0.16)",height:24,width:24,borderRadius:12,justifyContent:'center',marginRight:16}}>
                            <Text style={{color:"black ",fontSize:14,fontWeight:500,textAlign:'center'}}>2</Text>
                        </View>
                        <Text style={{color:"black",fontSize:16,fontWeight:"400",textAlign:'center'}}>Business Detail</Text>
                    </View>
                </View>
                <View style={{flex:1,padding:15,margin:15}}> 
                    {/* Personal Details */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Personal Details</Text>
                        <Text style={styles.sectionSubTitle}>Enter your personal data to create your account as a Startup</Text>
                        <View style={styles.inputContainer}>
                            {/* <View style={{flex:1,paddingRight:15}}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#808080" />
                            </View> */}
                            <InputField label={"Full Name"} placeholder={"eg. John"} ></InputField>
                            <View style={{flex:1,paddingLeft:15}}>
                                <Text style={styles.label}>Gender</Text>
                            <Picker
                                selectedValue={gender}
                                onValueChange={(itemValue) => setGender(itemValue)}
                                style={styles.picker}>
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
                        <InputField label={"LinkedIn Profile"} placeholder={"LinkedIn URL"}></InputField>

                        <View style={styles.inputContainer}>
                            <View style={{flex:1}}>
                                <Text style={styles.label}>City</Text>
                                <Picker
                                    selectedValue={city}
                                    onValueChange={(itemValue) => setCity(itemValue)}
                                    style={styles.picker}
                                    >
                                    <Picker.Item label="Bengaluru" value="Bengaluru" />
                                    <Picker.Item label="Mumbai" value="Mumbai" />
                                </Picker>
                            </View>
                            <View style={{flex:1 ,paddingLeft:15}}>
                                <Text style={styles.label}>Country</Text>
                                <Picker
                                    selectedValue={country}
                                    onValueChange={(itemValue) => setCountry(itemValue)}
                                    style={styles.picker}
                                    >
                                    <Picker.Item label="India" value="India" />
                                    <Picker.Item label="USA" value="USA" />
                                </Picker>
                                </View>
                            </View>

                        {/* Single Founder */}
                        <View style={[styles.inputContainer,{justifyContent:"flex-start"}]}>
                        <Text style={[styles.label,{marginTop:17}]}>Are you a single Founder?</Text>
                        <View style={[styles.radioContainer,{alignContent:"center"}]}>
                        <RadioButton
                            color='rgba(114, 206, 99, 1)'
                            value="Yes"
                            status={isSingleFounder ? 'checked' : 'unchecked'}
                            onPress={() => setIsSingleFounder(true)}

                            />
                        <Text style={{color: '#FFF', fontSize: 16,alignSelf:"center"}}> Yes</Text>
                        <RadioButton
                            value="No"
                            status={!isSingleFounder ? 'checked' : 'unchecked'}
                            onPress={() => setIsSingleFounder(false)}
                            color='rgba(114, 206, 99, 1)'
                            />
                        <Text style={{color: '#FFF', fontSize: 16,alignSelf:"center"}}> No</Text>
                        </View>
                        </View>

                        {!isSingleFounder && (
                            <>
                            <View style={styles.inputContainer}>
                                <InputField label={"Co-Founder Full Name"} placeholder={"eg. John"}></InputField>
                                <View style={{flex:1,paddingLeft:15}}> 
                                <Text style={styles.label}>Co-Founder Gender</Text>
                                <Picker
                                    selectedValue={coFounderGender}
                                    onValueChange={(itemValue) => setCoFounderGender(itemValue)}
                                    style={styles.picker}
                                >
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
                                <InputField label={"LinkedIn Profile"} placeholder={"LinkedIn URL"}></InputField>

                        <View style={styles.inputContainer}>
                            <View style={{flex:1}}>
                                <Text style={styles.label}>City</Text>
                                <Picker
                                    selectedValue={city}
                                    onValueChange={(itemValue) => setCity(itemValue)}
                                    style={styles.picker}
                                    >
                                    <Picker.Item label="Bengaluru" value="Bengaluru" />
                                    <Picker.Item label="Mumbai" value="Mumbai" />
                                </Picker>
                            </View>
                            <View style={{flex:1 ,paddingLeft:15}}>
                                <Text style={styles.label}>Country</Text>
                                <Picker
                                    selectedValue={country}
                                    onValueChange={(itemValue) => setCountry(itemValue)}
                                    style={styles.picker}
                                    >
                                    <Picker.Item label="India" value="India" />
                                    <Picker.Item label="USA" value="USA" />
                                </Picker>
                                </View>      
                            </View>
                            <TouchableOpacity>
                                <View style={{borderColor:"rgba(44, 165, 96, 0.5)", borderWidth:1,justifyContent:"center",padding:12,borderRadius:8 ,marginVertical:10}}>
                                    <Text style={{color:"rgba(44, 165, 96, 1)", fontSize:16,fontWeight:"500",textAlign:'center'}}>+ Add Co-Founder</Text>
                                </View>
                            </TouchableOpacity>
                            </>
                        )}
                    </View>

                    {/* Business Details */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Business Details</Text>
                        <Text style={styles.sectionSubTitle}>Enter your Business data to create your account.</Text>
                        {/* <TextInput style={styles.input} placeholder="Name of Business" placeholderTextColor="#808080" /> */}
                        <View style={styles.inputContainer}>
                            <InputField label={"Name of Business"} placeholder={"Catalyst Tree"}></InputField>
                            <View style={{width:15}}></View>
                            <InputField label={"Registered Name"} placeholder={"Catalyst Tree"}></InputField>
                        </View>
                        <View style={styles.inputContainer}>
                                <InputField label={"Website URL"} placeholder={"eg. www.catalysttree.com"}></InputField>
                                <View style={{flex:1,paddingLeft:15}}> 
                                <Text style={styles.label}>Sector of Business</Text>
                                <Picker
                                    selectedValue={businessSector}
                                    onValueChange={(itemValue) => setBusinessSector(itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Finance" value="Finance" />
                                    <Picker.Item label="Tech" value="Tech" />
                                </Picker>
                                </View>
                            </View> 


                        <View style={styles.inputContainer}>
                            <View style={{flex:1}}>
                            <Text style={styles.label}>Stage of Startup</Text>
                            <Picker
                                selectedValue={stage}
                                onValueChange={(itemValue) => setStage(itemValue)}
                                style={styles.picker}
                                >
                                <Picker.Item label="Beta" value="Beta" />
                                <Picker.Item label="Alpha" value="Alpha" />
                                <Picker.Item label="Growth" value="Growth" />
                            </Picker>
                            </View>
                            <View style={{flex:1,marginLeft:15}}>
                                <InputField label={"Date of Incorporation"} placeholder={"DD-MM-YYYY"}></InputField>
                                {/* Add Date Picker */}
                                <TouchableOpacity style={styles.inputContainer} onPress={() => setOpen(true)}>
                                    <Text style={styles.dateText}>
                                    {date.toLocaleDateString()} 
                                    </Text>
                                </TouchableOpacity>

                                {/* Date Picker Modal */}
                                <DatePicker
                                    modal
                                    mode="date"
                                    open={open}
                                    date={date}
                                    onConfirm={(selectedDate) => {
                                    setOpen(false); // Close modal
                                    setDate(selectedDate); // Update date
                                    }}
                                    onCancel={() => setOpen(false)}
                                />
                            </View>
                        </View>
                        <Text style={styles.label}>Details about the company</Text>
                        <TextInput
                            style={[styles.input, styles.textarea]}
                            placeholder="Write here.."
                            placeholderTextColor="#808080"
                            multiline
                        />

                        <Text style={styles.label}>Upload Pitch Deck</Text>
                        <View style={styles.uploadBox}>
                            <TouchableOpacity   >
                            <AiOutlineUpload name={"upload"} color='rgba(114, 206, 99, 1)' size={20}></AiOutlineUpload>
                            </TouchableOpacity>
                            <Text style={styles.uploadText}>Drag & Drop or <Text style={{color:"rgba(114, 206, 99, 1)"}}>Browse</Text> to Upload Pitch Deck</Text>
                            <Text style={styles.uploadText}>Upload PDF 50MB</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const InputField = ({ label, placeholder, onChangeText, value, keyboardType }) => {
    return (
      <View style={{flex:1}}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#808080"
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType || 'default'}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', padding: 20 },
    header: { fontSize: 28, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginVertical: 20 },
    subHeader: { fontSize: 16, color: '#FFF', textAlign: 'center', marginBottom: 20 },
    section: {},
    sectionTitle: { fontSize: 28, fontWeight: '500', color: '#FFF', marginBottom: 10 },
    sectionSubTitle: { fontSize: 16, fontWeight: '400', color: 'rgba(255, 255, 255, 0.8)', marginBottom: 10 },
    
    input: {
        backgroundColor: '#333',
        color: '#FFF',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        fontSize: 14,
    },
    textarea: { height: 100, textAlignVertical: 'top' },
    picker: { color: '#FFF', backgroundColor: '#333', borderRadius: 8,marginVertical: 10,fontSize: 14,padding:12 },
    inputContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    label: { color: '#FFF', fontSize: 16, marginTop: 10 },
    radioContainer: { flexDirection: 'row', marginVertical: 10 },
    radioButton: { marginRight: 20 },
    radioText: { color: '#888', fontSize: 14 },
    radioTextActive: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
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
    uploadText: { color: '#888', fontSize: 14 },
    button: { backgroundColor: '#fff', padding: 20, borderRadius: 50, alignItems: 'center', marginTop: 20 },
    buttonText: { color: '#000', fontSize: 16, fontWeight: '500' },
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
