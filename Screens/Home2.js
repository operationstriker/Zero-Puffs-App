import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
import ProgressCircle from "react-native-progress-circle"
//View Usage

export default function App() {

  const [Count, setCount] = useState(0)


  return (
    <View style={styles.container}>
           <ProgressCircle percent={30}
                 radius={50}
                 borderWidth={8}
                 color="#3399FF"
                 shadowColor="#999"
                 bgColor="#c06969ff">
     <Text style={{ fontSize: 18 }}>{'30%'}</Text>
           </ProgressCircle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    position: "relative",
    right: 85,
    height: 50,
    flexDirection: "row",
    width: 130,
    marginRight: 20
  }

});
