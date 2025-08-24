import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';

export default function App() {


  return (
   <React.Fragment>
    <StatusBar style='auto'/>
   </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
