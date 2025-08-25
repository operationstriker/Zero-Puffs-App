import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React, { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home"
import Quit from "./QuitPlan"
import Tracker from "./Tracker"
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function HomeScreen() {
   return (
    <Home />
   )
}

function QuitScreen() {
   return (
    <Quit />
   )
}

function TrackerScreen() {
   return (
    <Tracker />
   )
}


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'relative',
          bottom: 30,
         borderTopWidth: 0,
         height: 60,
         borderRadius: 20,
         backgroundColor: "rgba(224, 224, 224, 1)"
        },
        // tabBarLabelStyle: {
        //   height: 20,
        //   borderTopWidth: 0,
        //   fontSize: 20,
        // },
      }}>
      <Tab.Screen name="2" component={QuitScreen} options={{headerShown: false, color: "black", tabBarIcon: () => (
         <FontAwesome
              size={30} // Example: larger when focused
              name="close"
              color={"black"}
             
            />
          )}}
          />
      <Tab.Screen name="f" component={HomeScreen} options={{headerShown: false, tabBarIcon: () => (
         <FontAwesome
              size={30} // Example: larger when focused
              name="plus-circle"
              color={"black"}
            />
      )}}
      />

      <Tab.Screen name="4" component={TrackerScreen} options={{headerShown: false, tabBarIcon: () => (
               <FontAwesome
              size={30} 
              name="bar-chart"
              color={"black"}
            />
      )}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}


      // <Tab.Screen name="Quit" component={QuitScreen} options={{headerShown: false, color: "black", tabBarIcon: () => (
      //    <FontAwesome
      //         size={30} // Example: larger when focused
      //         name="close"
      //         color={"black"}
             
      //       />
      //     )}}
      //     />
