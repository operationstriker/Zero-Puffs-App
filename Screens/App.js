import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React, { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home"
import Quit from "./QuitPlan"
import Tracker from "./Tracker"
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Feather } from 'react-native-vector-icons';

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
         backgroundColor: "rgba(243, 243, 243, 1)"
        },
           tabBarIconStyle: {
      marginTop: 0, // tweak to center
      width: 50, // make room
      height: 50,
    }
      }}>
      <Tab.Screen name="-" component={QuitScreen} options={{headerShown: false, color: "black", tabBarIcon: () => (
         <FontAwesome
              size={40} // Example: larger when focused
              name="close"
              color={"black"}
             
            />
          )}}
          />
      <Tab.Screen name="[" component={HomeScreen} options={{headerShown: false, tabBarIcon: () => (
         <FontAwesome
              size={40} // Example: larger when focused
              name="plus-circle"
              color={"black"}
            />
      )}}
      />

      <Tab.Screen name="'" component={TrackerScreen} options={{headerShown: false, tabBarIcon: () => (
               <FontAwesome
              size={40} 
              name="bar-chart"
              color={"black"}
            />
      )}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
