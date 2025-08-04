import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from "react"
import PlusImage from "./Images/Plus.png"
import { Tabs } from "expo-router"

export default function App() {

  const [Count, setCount] = useState(0)

  // if (Count == 0) {
  //   print("true")
  //   print("R")

  // if count 
  // }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: "35", position: "relative", bottom: "22%"}}>Zero Puffs</Text>
      


      <View style={styles.CircleView}>
       <Text style={{color: "red", fontSize: 50, fontWeight: "semibold"}}>{Count}</Text>
       <Text>out of 20</Text>
       {/* <Text style={{color: "#FFBD36"}}>1.23 mg</Text>
       <Text style={{color: "#67ff49ff"}}>Nicotine</Text> */}
      </View>

      {/* <View style={styles.ViewUsage}>
        <Text style={{textAlign: "center"}}>Usage today</Text>

        <Text>NO PUFFS RECORDED</Text>
      </View> */}


        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", color: "red", fontSize: "28", fontWeight: "semibold"}}>UPDATE  PUFFS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PuffButton} onPress={(() => setCount(Count + 1))}>
        <Text style={{textAlign: "center", color: "white", fontSize: "25", fontWeight: "semibold"}}>PUFF</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      {/* images, plus, graph, settings */}
{/* 
      <Tabs>
        <Tabs.Screen></Tabs.Screen>
      </Tabs> */}
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
  PuffButton: {
    position: "relative",
    top: "25%",
    height: 55,
    width: "80%",
    borderRadius: 27,
    backgroundColor: "#FF0000",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  PuffButton2: {
        position: "relative",
    top: "24%",
    height: 55,
    width: "80%",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 23,
    backgroundColor: "white",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  CircleView: {
    position: "relative",
    bottom: "15%",
     width: 230, // Set desired width
    height: 230, // Set desired height (must be equal to width)
    borderRadius: 130, // Half of the width/height
    borderWidth: 15,
    borderColor: "lightgray",
    backgroundColor: 'transparent', // Example background color
    justifyContent: "center",
    alignItems: "center",
  },
  ViewUsage: {

  }
});


// start expo
//npx expo start
