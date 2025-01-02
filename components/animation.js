import React, { useRef, useState } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Animation() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { title: 'Premium Card', benefits: ['Travel Insurance', 'Airport Lounge', '2% Cashback'] },
    { title: 'Gold Card', benefits: ['Purchase Protection', 'Extended Warranty', '1.5% Rewards'] },
    { title: 'Platinum Card', benefits: ['Concierge Service', 'Hotel Benefits', '3% Points'] },
    { title: 'Business Card', benefits: ['Expense Management', 'Employee Cards', 'Business Rewards'] },
  ];

  const scrollHandler = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const getCardStyle = (index) => {
    const inputRange = [
      height * (index - 1),
      height * index,
      height * (index + 1)
    ];
    
    return {
      opacity: scrollY.interpolate({
        inputRange,
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          scale: scrollY.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          }),
        },
        {
          translateX: scrollY.interpolate({
            inputRange,
            outputRange: [-width/3, 0, -width/3],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.mainTitle, {
        opacity: scrollY.interpolate({
          inputRange: [0, height/2],
          outputRange: [1, 0],
        }),
      }]}>
        Choose Your Credit
      </Animated.Text>

      <Animated.ScrollView
        pagingEnabled
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
      >
        {cards.map((card, index) => (
          <Animated.View 
            key={index}
            style={[
              styles.cardContainer,
              getCardStyle(index)
            ]}
          >
            <TouchableOpacity
              style={[
                styles.card,
                selectedCard === index && styles.selectedCard
              ]}
              onPress={() => setSelectedCard(index)}
              activeOpacity={0.9}
            >
              <Text style={styles.cardTitle}>{card.title}</Text>
              {card.benefits.map((benefit, idx) => (
                <Text key={idx} style={styles.benefit}>• {benefit}</Text>
              ))}
              <View style={styles.selectButton}>
                <Text style={styles.buttonText}>
                  {selectedCard === index ? 'Selected' : 'Select Card'}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    color: '#1a1a1a',
  },
  cardContainer: {
    height: height,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  selectedCard: {
    backgroundColor: '#f0f7ff',
    borderColor: '#2196f3',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  benefit: {
    fontSize: 18,
    marginVertical: 8,
    color: '#444',
  },
  selectButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});