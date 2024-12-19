import React from "react";
import { SafeAreaView, ScrollView, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/homePage";
import AboutUs from "./screens/aboutUs";
import Debt from "./screens/debt";
import Equity from "./screens/equity";
import Startup from "./screens/startup";
import Investor from "./screens/investor";
import MergersAcquisitions from "./screens/ma";
import Acceleration from "./screens/acceleration";

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
          config: {
            screens: {
              Home: '',
              AboutUs: 'about-us',
              Debt: 'debt',
              Equity: 'equity',
              Startup: 'startup',
              Investor: 'investor',
              MergersAcquisitions: 'mergers-acquisitions',
              Acceleration: 'acceleration',
            },
          },
        }}
      >
        <Stack.Navigator 
          initialRouteName="Home" 
          screenOptions={{ 
            headerShown: false,
            ...(Platform.OS === 'web' && {
              animationEnabled: true // Disable animations on web
            })
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Debt" component={Debt} />
          <Stack.Screen name="Equity" component={Equity} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Investor" component={Investor} />
          <Stack.Screen name="MergersAcquisitions" component={MergersAcquisitions} />
          <Stack.Screen name="Acceleration" component={Acceleration} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}