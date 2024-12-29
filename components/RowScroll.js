import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MdArrowBack , MdArrowForward } from 'react-icons/md';;
import styles from '../screens/styles';
import { useWindowDimensions } from 'react-native-web';
const InvestorProcessScreen = ({ items ,title}) => {
    const scrollViewRef = useRef(null); // Create a reference for ScrollView
    const {height,width} = useWindowDimensions();

    // Handle the scroll to left or right when buttons are clicked
    const handleScroll = (direction) => {
        if (scrollViewRef.current) {
            // Check the direction and scroll accordingly
            scrollViewRef.current.scrollTo({
                x: direction === 'left'?-width:width, // Scroll right
                animated: true,
            });
        }
    };

   
    return (
        <View style={{ margin: '2%'}}>
            <Text style={[styles.title, { textAlign: 'center' , fontSize: 48, fontWeight: 500}]}>
                {title}
            </Text>

            {/* Scroll buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: '2%', marginBottom: '3%', marginHorizontal: '4%' }}>
                <TouchableOpacity style={{ width: 33, alignItems: 'center', height: 33, borderRadius: 18, marginRight: 30, borderColor: 'white', borderWidth: 2, padding: 5, boxShadow: '#343434', justifyContent: 'center'}} onPress={() => handleScroll('left')} >
                    <MdArrowBack  name={'arrow-back'} color='white' />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 33, alignItems: 'center', height: 33, borderRadius: 18, marginRight: 15, borderColor: 'white', borderWidth: 2, padding: 5, boxShadow: '#343434', justifyContent: 'center'}} onPress={() => handleScroll('right')}>
                    <MdArrowForward name={'arrow-forward'} color='white' />
                </TouchableOpacity>
            </View>

            <RowScrollProcessInvestor ref={scrollViewRef}  items={items}/>
        </View>
    );
};

// RowScrollProcessInvestor component
const RowScrollProcessInvestor = React.forwardRef(({ items, onContentSizeChange }, ref) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }} ref={ref} onContentSizeChange={onContentSizeChange} >
            {items.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row', borderRightColor: '#FFFFFF', borderRightWidth: 1, padding: '1%' }}>
                    <View style={{ width: 350, height: 200,}}>
                        {item.img ? (
                            <Image source={item.img} style={{ height: 60, width: 60 }} />
                        ) : item.icon ? (
                            <Icon name={item.icon} color='#44B92C' size={60} />
                        ) : null}

                        <Text
                            style={[
                                styles.subtitle,
                                { fontSize: 24, textAlign: 'left', marginTop: 48, fontWeight: 400, lineHeight: 28, color: 'rgba(255, 255, 255, 1)'},
                            ]}
                        >
                            {item.text}
                        </Text>
                    </View>
                    {/* <View style={{ borderColor: '#FFFFFF', borderWidth: 1 }} /> */}
                </View>
            ))}
        </ScrollView>
    );
});

export default InvestorProcessScreen;
