import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React, { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Screen name="Home" component={Home2}>
       <Tab.Screen/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

