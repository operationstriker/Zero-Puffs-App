import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
// Vape Usage

export default function App() {

  const [Count, setCount] = useState(0)


  return (
    <View style={styles.container}>
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


       <Text>Zero Puffs</Text>

       <Text>Daily Total</Text>
       <Text>Daily Average</Text>

        <Text>Lifetime Puffs</Text>
       <Text>Nicotine Intake</Text>
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




