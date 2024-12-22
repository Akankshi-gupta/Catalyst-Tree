import React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import Navbar from "../components/navbar";

export default function Layout({ children, navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <Navbar navigation={navigation} />

      {/* Main Content */}
      <ScrollView >
        {children}
      </ScrollView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    height: "100%",  // Ensure the container takes full height
  },

});

