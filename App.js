import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"


export default function App() {

  const [Count, setCount] = useState(0)


  if (Count == 7) {
    console.log("True")
    console.log("R")

  }

  return (
    <View style={styles.container}>
      {/* <Image source={require('./Images/Font.png')} style={{height: 50, width: 200, position: "relative", top: "-5%"}}/>
       */}
       <Text style={{fontSize: 40, fontFamily: "Arial", bottom: "-1%", color: "gray"}}>ZeroPuffs</Text>

      <View style={styles.CircleView}>
       <Text style={{color: "red", fontSize: 50, fontWeight: "semibold"}}>{Count}</Text>

       <Text>out of 20</Text>
       {/* <Text style={{color: "#FFBD36"}}>1.23 mg</Text>
       <Text style={{color: "#67ff49ff"}}>Nicotine</Text> */}
      </View>

      <View style={{position: "relative", top: "7%", left: "5%"}}>
        <View style={styles.vstack}>
        <Text style={{marginBottom: 20}}>20</Text>
        <Text style={{marginBottom: 20}}>15</Text>
        <Text style={{marginBottom: 20}}>10</Text>
        <Text style={{marginBottom: 20}}>5</Text>
        </View>

      <View style={styles.hstack}>
        <Text style={{marginRight: 35}}>0</Text>
        <Text style={{marginRight: 35}}>5</Text>
        <Text style={{marginRight: 35}}>10</Text>
        <Text style={{marginRight: 35}}>15</Text>
        <Text style={{marginRight: 35}}>20</Text>
        <Text style={{marginRight: 35}}>25</Text>
        </View>

      </View>

        <TouchableOpacity style={styles.PuffButton2}>
        <Text style={{textAlign: "center", color: "red", fontSize: "28", fontWeight: "semibold"}}>UPDATE  PUFFS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PuffButton} onPress={(() => setCount(Count + 1))}>
        <Text style={{textAlign: "center", color: "white", fontSize: "28", fontWeight: "semibold"}}>PUFF</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

    {/* <img src={PlusImage}></img> */}


<View style={{position: "relative", top: "23%"}}>


<Image source={require('./Images/Plus.png')} style={{height: 50, width: 50, position: "relative", top: "5%"}}/>
<Image source={require('./Images/quit.png')} style={{height: 50, width: 50, position: "relative", top: "-14%", right: "18%"}}/>
<Image source={require('./Images/bar.png')} style={{height: 50, width: 50, position: "relative", bottom: "35%", left: "35%"}}/>
<Image source={require('./Images/settings.png')} style={{height: 50, width: 50, position: "relative", top: "-55%", right: "35%"}}/>
<Image source={require('./Images/profile.png')} style={{height: 50, width: 50, position: "relative", bottom: "75%", left: "20%"}}/>
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
    top: "16%",
    height: 55,
    width: "85%",
    borderRadius: 27,
    backgroundColor: "#FF0000",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  PuffButton2: {
        position: "relative",
    top: "15%",
    height: 55,
    width: "85%",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 27,
    backgroundColor: "white",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    boxshadow: "0 0 0 5px rgba(255, 10, 10, 1);"
  },
  CircleView: {
    position: "relative",
    bottom: "-5%",
     width: 220, // Set desired width
    height: 220, // Set desired height (must be equal to width)
    borderRadius: 130, // Half of the width/height
    borderWidth: 15,
    borderColor: "lightgray",
    backgroundColor: 'transparent', // Example background color
    justifyContent: "center",
    alignItems: "center",
  },
  vstack: {
    flexDirection: "column"
  },
  hstack: {
    flexDirection: "row"
  }
});


// start expo
//npx expo start

