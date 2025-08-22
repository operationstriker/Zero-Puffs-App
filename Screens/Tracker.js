import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
// Vape Usage
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default function App() {

  const [value, setValue] = useState(1) // create a variable
  const maxValue = 20;

  const fill = (value / maxValue) * 100;


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontFamily: "Calbri", bottom: "31%", color: "#1E1E1E", textAlign: "center", margin: 0}}>ZERO PUFFS</Text>
      <Text style={{fontSize: 20, bottom: "31%"}}>PUFF Tracker</Text>


        <View style={styles.Header}>
            <TouchableOpacity style={styles.PuffButton2}>
            <Text style={{textAlign: "center", fontSize: "20", fontWeight: "semibold", marginRight: 20}}>Yesterday</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", fontSize: "20", fontWeight: "semibold", marginRight: 20}}>Week</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", fontSize: "20", fontWeight: "semibold", marginRight: 20}}>Month</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", fontSize: "20", fontWeight: "semibold"}}>All Time</Text>
        </TouchableOpacity>
        </View>

       <View style={{top: 160, right: 90}}>
       <Text style={{fontSize: 30}}>Daily Total</Text>
       <Text style={{textAlign: "center"}}>0</Text>
       </View>
       
       <View style={{top: 107, left: 90}}>
      <Text style={{textAlign: "center", fontSize: 30}}>Daily Average</Text>
      <Text style={{textAlign: "center"}}>1</Text>
       </View>
       
       
       <View style={{top: 120, right: 86}}>
        <Text style={{textAlign: "center", fontSize: 30}}>Total Puffs</Text>
        <Text style={{textAlign: "center"}}>0</Text>
       </View>

       <View style={{top: 70}}>
       <Text style={{textAlign: "center", fontSize: 30}}>Nicotine Intake</Text>
       </View>
       

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
    bottom: 230,
    flexDirection: "row",
    width: 130,
    marginRight: 20
  }

});
