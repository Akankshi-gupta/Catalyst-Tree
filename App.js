import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import Home from "./screens/homePage";
import AboutUs from "./screens/aboutUs";
import Debt from "./screens/debt";
import Equity from "./screens/equity";
import Startup from "./screens/startup";
import Investor from "./screens/investor";
import MergersAcquisitions from "./screens/ma";
import Acceleration from "./screens/acceleration";
import ContactUs from "./screens/contactus";
import FAQ from "./screens/faq";
import StartupSignUp from "./screens/startupSignup";
import InvestorSignUp from "./screens/InvestorSignUp";
import CustomPopup from "./screens/Modal";
import Animation from "./components/animation"

// Use different navigator based on platform
const Stack = Platform.select({
  web: createStackNavigator(),
  default: createNativeStackNavigator(),
});

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer
        linking={{
          prefixes: ["http://localhost:19006", "https://myapp.com"], 
          config: {
            screens: {
              Animation: " ",
              Home: "home",
              AboutUs: "about",
              Debt: "debt",
              Equity: "equity",
              Startup: "startup",
              Investor: "investor",
              MergersAcquisitions: "mergers-acquisitions",
              Acceleration: "acceleration",
              StartupSignUp: "startup-signup",
              InvestorSignUp: "investor-signup",
              ContactUs: "contact-us",
              FAQ: "faq",
             
            },
          },
        }}
      >
        <Stack.Navigator 
          // initialRouteName="Home" 
          screenOptions={{ 
            headerShown: false,
            ...(Platform.OS === 'web' && {
              animationEnabled: true // Disable animations on web
            }),
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen name="Animation" component={Animation} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Debt" component={Debt} />
          <Stack.Screen name="Equity" component={Equity} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Investor" component={Investor} />
          {/* <Stack.Screen name="Animation" component={Animation} /> */}
          <Stack.Screen
            name="Mergers & Acquisition"
            component={MergersAcquisitions}
          />
          <Stack.Screen name="Acceleration" component={Acceleration} />
          <Stack.Screen name="StartupSignUp" component={StartupSignUp} />
          <Stack.Screen name="InvestorSignUp" component={InvestorSignUp} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="FAQ" component={FAQ} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}