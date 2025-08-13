import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"


export default function App() {

  const [Count, setCount] = useState(0)

  console.log("f")

  console.log("$")
  console.log("$3")

  if (Count === 7) {
    console.log("True")
    print("true")
    print("R")

  }

  return (
    <View style={styles.container}>
      <Image source={require('./Images/Font.png')} style={{height: 50, width: 200, position: "relative", top: "-7%"}}/>
      

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

      {/* Graph */}


        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", color: "red", fontSize: "28", fontWeight: "semibold"}}>UPDATE  PUFFS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PuffButton} onPress={(() => setCount(Count + 1))}>
        <Text style={{textAlign: "center", color: "white", fontSize: "28", fontWeight: "semibold"}}>PUFF</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

    {/* <img src={PlusImage}></img> */}


<View style={{position: "relative", top: "23%"}}>


 <Image source={require('./Images/Plus.png')} style={{height: 50, width: 50, position: "relative", top: "30%"}}/>
<Image source={require('./Images/settings.png')} style={{height: 50, width: 50, position: "relative", top: "10%", right: "18%"}}/>
<Image source={require('./Images/bar.png')} style={{height: 50, width: 50, position: "relative", bottom: "10%", left: "35%"}}/>
<Image source={require('./Images/settings.png')} style={{height: 50, width: 50, position: "relative", top: "-30%", right: "35%"}}/>
<Image source={require('./Images/bar.png')} style={{height: 50, width: 50, position: "relative", bottom: "50%", left: "20%"}}/>
              </View>

           
      

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
    borderRadius: 27,
    backgroundColor: "white",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  CircleView: {
    position: "relative",
    bottom: "0%",
     width: 220, // Set desired width
    height: 220, // Set desired height (must be equal to width)
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

