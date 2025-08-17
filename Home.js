import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"


export default function App() {

  const [Count, setCount] = useState(0)


  return (
    <View style={styles.container}>
        <View style={styles.Header}>
            <TouchableOpacity style={styles.PuffButton2}>
            <Text style={{fontSize: "20", fontWeight: "semibold"}}>Yesterday</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{fontSize: "20", fontWeight: "semibold"}}>Week</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.PuffButton2}>
        <Text>Month</Text>
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
    height: 50,
    flexDirection: "row",
    width: 100,
    marginRight: 20
  }

});
