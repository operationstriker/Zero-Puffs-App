
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TextInput } from 'react-native';

export default function App() {

    const [value, setValue] = useState(0) // create a variable
    const maxValue = 20;
    const fill = (value / maxValue) * 100;

  function pufffunc() {
    setValue(value + 1)
  }

  const [isVisible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  }

  const CloseDiv = () => {
    setVisibility(false)
  }


  return (
    <View style={styles.container}>
       <Text style={{fontSize: 30, fontFamily: "Calbri", bottom: "13%", color: "#1E1E1E", textAlign: "center"}}>ZERO PUFFS </Text>

        <AnimatedCircularProgress
        size={220}
        width={17}
        fill={fill}
        tintColor="#ff0000ff"
        backgroundColor="#bababaff"
          rotation={-0}>
        {
          (fill) => (
            <View>
             <Text style={{fontSize: 40, textAlign: "center"}}> {value}</Text>
             <Text style={{fontSize: 20}}>out of 25</Text>
            </View>
            
          )
        }
      </AnimatedCircularProgress>

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

        <TouchableOpacity style={styles.PuffButton2} onPress={toggleVisibility}>
        <Text style={{textAlign: "center", color: "red", fontSize: "28", fontWeight: "semibold"}}>UPDATE  PUFFS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PuffButton} onPress={(() => setValue(value + 1))}>
        <Text style={{textAlign: "center", color: "white", fontSize: "28", fontWeight: "semibold"}} onPress={pufffunc}>PUFF</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />


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
  },
  UpdateDivElement: {
    backgroundColor: "rgba(220, 220, 220, 1)",
    borderRadius: 20,
    height: 240,
    width: 280
  }
});
