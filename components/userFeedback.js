import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../screens/styles";

export default function UserFeedback({feedback, userName, userOccupation}){
    return(
        <View style={{borderRadius: 20, borderColor: '#D6D6D6', borderWidth: 1, padding: "2%", flex: 1}}>
            <Image source={require('../assets/images/quote-left 1.png')}></Image>
            <Text style={[styles.smallText, {textAlign: 'start', marginTop: '6%'}]}>{feedback}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: '6%'}}>
                <Image source={require('../assets/images/front-view-smiley-woman-seaside.png')} style={{marginRight: '3%'}}></Image>
                <View style={{justifyContent: 'center', alignItems: 'start'}}>
                    <Text style={styles.smallText}>{userName}</Text>
                    <Text style={styles.smallText}>{userOccupation}</Text>
                </View>
            </View>
        </View>
    )
}
