import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from "react"

export default function App() {

  const [Count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>ZeroPuffs</Text>

      <View style={styles.CircleView}>
       <Text style={{color: "black", fontSize: 50, fontWeight: "semibold"}}>{Count}</Text>
       <Text>out of 20</Text>
      </View>


          <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", color: "red", fontSize: "28", fontWeight: "semibold"}}>UPDATE  PUFFS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PuffButton} onPress={(() => setCount(Count + 1))}>
        <Text style={{textAlign: "center", color: "white", fontSize: "30", fontWeight: "semibold"}}>PUFF</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PuffButton: {
    position: "relative",
    top: "25%",
    height: 50,
    width: "80%",
    borderRadius: 23,
    backgroundColor: "#FF0000",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  PuffButton2: {
        position: "relative",
    top: "24%",
    height: 50,
    width: "80%",
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 23,
    backgroundColor: "white",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  CircleView: {
     width: 200, // Set desired width
    height: 200, // Set desired height (must be equal to width)
    borderRadius: 100, // Half of the width/height
    borderWidth: 15,
    borderColor: "red",
    backgroundColor: 'transparent', // Example background color
    justifyContent: "center",
    alignItems: "center",
  }
});


// start expo
//npx expo start

