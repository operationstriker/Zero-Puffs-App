import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React, { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home"
import Quit from "./QuitPlan"

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

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Quit" component={QuitScreen}/>
      <Tab.Screen name="Puff" component={HomeScreen}/>
      <Tab.Screen name="Tracker" component={HomeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


