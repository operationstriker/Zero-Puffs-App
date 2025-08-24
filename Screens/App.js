import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Label } from 'react-native';
import React from "react"
import { StatusBar } from 'expo-status-bar';
import { Tabs } from "expo-router"

export default function App() {


  return (
   <React.Fragment>
    <StatusBar style='auto'/>
    <Tabs>
     <Tabs.Screen name='index' />
    </Tabs>
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
