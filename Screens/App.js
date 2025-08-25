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
        tabBarStyle: {
          position: 'relative',
          bottom: 30,
         borderTopWidth: 0,
         height: 50,
         borderRadius: 10,
         backgroundColor: "gray"
        },
        tabBarLabelStyle: {
          height: 20,
          borderTopWidth: 0,
          fontSize: 20,
        },
      }}>
      <Tab.Screen name="Quit" component={QuitScreen} options={{headerShown: false, color: "black", tabBarIcon: () => (
         <FontAwesome
              size={30} // Example: larger when focused
              name="close"
              color={"black"}
             
            />
          )}}
          />
      <Tab.Screen name="Puff" component={HomeScreen} options={{headerShown: false, tabBarIcon: () => (
         <FontAwesome
              size={30} // Example: larger when focused
              name="plus-circle"
              color={"black"}
            />
      )}}
      />

      <Tab.Screen name="Tracker" component={TrackerScreen} options={{headerShown: false, tabBarIcon: () => (
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
