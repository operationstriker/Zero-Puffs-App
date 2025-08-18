import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
// import { Tabs } from "expo-router"
// import ProgressCircle from "react-native-progress-circle"
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function App() {

  const [Count, setCount] = useState(0)


    const [value, setValue] = useState(1) // create a variable
    const maxValue = 20;
  
      const fill = (value / maxValue) * 100;

  if (Count == 7) {
    console.log("True")
    console.log("R")

  }

  return (
    <View style={styles.container}>
       <Text style={{fontSize: 40, fontFamily: "Arial", bottom: "-1%", color: "gray"}}>ZeroPuffs</Text>

      <View style={styles.CircleView}>

       <Text>out of 20</Text>
      </View>

            <AnimatedCircularProgress
        size={220}
        width={15}
        fill={fill}
        tintColor="#ff0000ff"
        backgroundColor="#3d5875"
          rotation={-6}>
        {
          (fill) => (
            <Text> {value} </Text>
            // <Text>
            //   {value} / {maxValue}  {/* display actual value */}
            // </Text>
          )
        }
      </AnimatedCircularProgress>
{/* 
      <ProgressCircle percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#c06969ff">
<Text style={{ fontSize: 18 }}>{'30%'}</Text>
      </ProgressCircle> */}

      <View style={{position: "relative", top: "7%", left: "5%"}}>
        <View style={styles.vstack}>
        <Text style={{marginBottom: 20}}>20 </Text>
        <Text style={{marginBottom: 20}}>15 </Text>
        <Text style={{marginBottom: 20}}>10 </Text>
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

<View style={{position: "relative", top: "23%"}}>
<Image source={require('./Images/Plus.png')} style={{height: 50, width: 50, position: "relative", top: "-15%"}}/>
<Image source={require('./Images/bar.png')} style={{height: 50, width: 50, position: "relative", bottom: "45%", left: "35%"}}/>
<Image source={require('./Images/Profile.png')} style={{height: 50, width: 50, position: "relative", bottom: "85%", left: "-30%"}}/>
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

  vstack: {
    flexDirection: "column"
  },
  hstack: {
    flexDirection: "row"
  }
});
