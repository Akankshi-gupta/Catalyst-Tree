import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "../screens/styles";

export default function Footer(){
    return(
        <View style={{backgroundColor: '#0E0E0E', paddingHorizontal: '8%', paddingTop: '7%'}}>
            <Image source={require('../assets/images/Logo.png')} style={{marginBottom: '4%'}}></Image>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%'}}>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={styles.smallText}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={styles.smallText}>Behance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={styles.smallText}>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 8, backgroundColor: '#FFFFFF40', borderColor: '#D6D6D6', borderWidth: 1, width: '20%', paddingVertical: '1%'}}>
                    <Text style={styles.smallText}>Dribble</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: '4%'}}>
                <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={{ marginBottom: '8%'}}>
                        <Text style={[styles.smallText, {color: '#808080', textAlign: 'start',}]}>For Startup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: '8%'}}>
                        <Text style={[styles.smallText, {color: '#808080', textAlign: 'start'}]}>For Investors</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[styles.smallText, {color: '#808080', textAlign: 'start',}]}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[styles.smallText, {color: '#808080', textAlign: 'start',}]}>FAQ's</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[styles.smallText, {color: '#808080', textAlign: 'start',}]}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginBottom: '8%'}}>
                        <Text style={[styles.smallText, {color: '#808080', textAlign: 'start',}]}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '45%'}}>
                    <Text style={[styles.headingText, {fontSize: 20, marginBottom: '4%'}]}>Subscribe Our Newsletter.</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TextInput style={{backgroundColor: '#FFFFFF', width: '62%', paddingVertical: '2%', borderRadius: 8}} placeholder="Email address"></TextInput>
                        <TouchableOpacity style={{backgroundColor: '#FFFFFF', borderRadius: 8,  width: '30%', alignItems: 'center', justifyContent: 'center'}} >
                            <Text style={[styles.smallText, {color: '#0E0E0E' , paddingVertical: '2%'}]}>Book a Demo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{borderTopColor: '#D6D6D6', borderTopWidth: 1, padding: '2%'}}>
                <Text style={styles.smallText}>The Catalyst Tree 2024 All right reserved.</Text>
            </View>
        </View>
    )
}