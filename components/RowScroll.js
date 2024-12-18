import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        <View style={{ marginTop: 50, marginHorizontal: 25 }}>
            <Text style={[styles.title, { textAlign: 'center' }]}>
                {title}
            </Text>

            {/* Scroll buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    style={{
                        width: 25,
                        alignItems: 'center',
                        height: 25,
                        borderRadius: 13,
                        marginRight: 30,
                        borderColor: 'white',
                        borderWidth: 2,
                        padding: 5,
                        boxShadow: '#343434',
                    }}
                    onPress={() => handleScroll('left')} // Scroll left on button press
                >
                    <Icon name={'arrow-back'} color='white' />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 25,
                        alignItems: 'center',
                        height: 25,
                        borderRadius: 13,
                        marginRight: 15,
                        borderColor: 'white',
                        borderWidth: 2,
                        padding: 5,
                        boxShadow: '#343434',
                    }}
                    onPress={() => handleScroll('right')} // Scroll right on button press
                >
                    <Icon name={'arrow-forward'} color='white' />
                </TouchableOpacity>
            </View>

            {/* RowScrollProcessInvestor component with items prop */}
            <RowScrollProcessInvestor
                ref={scrollViewRef} // Pass the scrollViewRef to RowScrollProcessInvestor
                items={items}// Pass this to RowScrollProcessInvestor to get content width
            />
        </View>
    );
};

// RowScrollProcessInvestor component
const RowScrollProcessInvestor = React.forwardRef(({ items, onContentSizeChange }, ref) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row' }}
            ref={ref} // Use the forwarded ref here
            onContentSizeChange={onContentSizeChange} // Track content size change
        >
            {items.map((item, index) => (
                <View key={index} style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View style={{ width: 350, height: 200 }}>
                        {/* Conditionally render either Image or Icon */}
                        {item.img ? (
                            <Image source={item.img} style={{ height: 60, width: 60 }} />
                        ) : item.icon ? (
                            <Icon name={item.icon} color='#44B92C' size={60} />
                        ) : null}

                        <Text
                            style={[
                                styles.subtitle,
                                { fontSize: 16, textAlign: 'left', marginTop: 48, width: 250 },
                            ]}
                        >
                            {item.text}
                        </Text>
                    </View>
                    <View style={{ borderColor: '#FFFFFF', borderWidth: 1 }} />
                </View>
            ))}
        </ScrollView>
    );
});

export default InvestorProcessScreen;
