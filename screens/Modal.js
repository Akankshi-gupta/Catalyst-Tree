import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FaBriefcase, FaUser  } from 'react-icons/fa';  
import { useNavigation } from '@react-navigation/native';

const CustomPopup = ({ visible, title, message, onClose }) => {
  const navigation = useNavigation(); // Access navigation

  return (
    <Modal animationType="none" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>
            Investors & Startups Platform{'\n'}to Fund & Raise Capital
          </Text>
          <Text style={styles.message}>Select the option that best describes your need.</Text>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => {onClose(); navigation.navigate('Startup');}}>
              <FaBriefcase name="briefcase" size={40} color="rgba(114, 206, 99, 1)" />
              <Text style={styles.optionText}>I'm a Startup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => { onClose(); navigation.navigate('Investor');}}>
              <FaUser  name="user" size={40} color="rgba(114, 206, 99, 1)" />
              <Text style={styles.optionText}>I'm an Investor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '60%', 
    height:'50%',
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent:"space-around"
  },
  title: {
    fontSize: 30, // Adjusted font size
    fontWeight: '700',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    height: 150,
    width: '30%', // Adjusted for responsiveness
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CustomPopup;
