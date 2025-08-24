import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React, { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home"

function HomeScreen() {
   return (
    <Home />
   )
}

function QuitScreen() {
   return (
    <Home />
   )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Quit" component={HomeScreen}/>
      <Tab.Screen name="Puff" component={HomeScreen}/>
      <Tab.Screen name="Tracker" component={HomeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


