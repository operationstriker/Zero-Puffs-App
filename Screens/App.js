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
        tabBarLabelStyle: {
          // borderTopWidth: 0,
          fontSize: 20,
          borderTopWidth: 0,
          elevation: 0, 
      
        }
      }}>
      <Tab.Screen name="Quit" component={QuitScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Puff" component={HomeScreen} options={{headerShown: false, tabBarIcon: () => (
         <FontAwesome
              size={ 26} // Example: larger when focused
              name="plus"
              color={"gray"}
            />
      )}}
      />

      <Tab.Screen name="Tracker" component={TrackerScreen} options={{headerShown: false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
