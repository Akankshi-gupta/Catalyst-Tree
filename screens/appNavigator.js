import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./homePage";
import Investor from "./investor";
import Debt from "./debt";
import Equity from "./equity";
import Startup from "./startup";
import MergersAcquisitions from "./ma";
import Acceleration from "./acceleration";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Default screen
        screenOptions={{ headerShown: false }} // No default app header
>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Investor" component={Investor} />
        <Stack.Screen name="Debt" component={Debt} />
        <Stack.Screen name="Equity" component={Equity} />
        <Stack.Screen name="Mergers & Acquisition" component={MergersAcquisitions}  />
        <Stack.Screen name="Acceleration" component={Acceleration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Layout from "./layout";
// import Startup from "./startup";
// import Investor from "./investor";
// import Home from "./homePage";
// import Equity from "./equity";
// import MergersAcquisitions from "./ma";
// import Acceleration from "./acceleration";
// import Debt from "./debt";

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <NavigationContainer  >
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home">
//           {props => (
//             <Layout navigation={props.navigation}>
//               <Home />
//             </Layout>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Startup"> 
//           {props => (
//             <Layout navigation={props.navigation}>
//               <Startup/>
//             </Layout>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Investor">
//           {props => (
//             <Layout navigation={props.navigation}>
//               <Investor />
//             </Layout>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Debt">
//           {props => (
//             <Layout navigation={props.navigation}>
//               <Debt/>
//             </Layout>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Equity">
//           {props => (
//             <Layout navigation={props.navigation}>
//               <Equity />
//             </Layout>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Mergers & Acquisition">
//           {props => (
//             <Layout navigation={props.navigation}>
//               <MergersAcquisitions />
//             </Layout>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="Acceleration">
//           {props => (
//             <Layout navigation={props.navigation}>
//               <Acceleration/>
//             </Layout>
//           )}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
