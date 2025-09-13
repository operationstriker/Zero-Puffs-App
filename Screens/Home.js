
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TextInput } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import LineChart from 'react-native-simple-line-chart'

export default function App() {

    const [value, setValue] = useState(0) // create a variable
    const maxValue = 20;
    const fill = (value / maxValue) * 100;

    const maxvalcolor = maxValue > maxValue 

    // make the text say text to configure then, change
    // how long they've gone without it days, add section, high medium low none - how many puffs - from lachlan

  function pufffunc() {
    setValue(value + 1)
  }

    const [VisibleView1, setVisibility1] = useState(false);
    const [VisibleDaily, setVisibilityDaily] = useState(false)

    function changeMaxvalue() {
       maxValue = 30
    }

  return (
    <View style={styles.container}>
       <Text style={{fontSize: 30, fontFamily: "Calbri", bottom: "9%", color: "#1E1E1E", textAlign: "center"}}>ZERO PUFFS </Text>

        <AnimatedCircularProgress
        size={220}
        width={17}
        fill={fill}
        tintColor="#ff0000ff"
        // tintColor="#7a0000ff"
        backgroundColor="#bababaff"
        rotation={-0} style={{position: "relative", bottom: 53}}>
        {
          (fill) => (
            <View>
             <Text style={{fontSize: 40, textAlign: "center"}}> {value}</Text>
             <Text style={{fontSize: 20}} id='MaxText'>out of { maxValue }</Text>
             <TouchableOpacity onPress={() => setVisibilityDaily(!VisibleDaily)}>
             <FontAwesome5 name="pen" size={20} color="black" style={{position: "relative", bottom: 24, left: 90}} />  
             </TouchableOpacity>
            </View>
          )
        }
      </AnimatedCircularProgress>

      {/* if it goes over */}

      {/* 1. Graph
      2. Update puffs, set confirm daily limit
      3. quit plan
      
      */}

   {VisibleDaily && (
              <View style={{backgroundColor: "rgba(217, 217, 217, 1)", height: 140, width: 230, borderRadius: 20}}>
        <Text style={{textAlign: "center", fontSize: 20}}>Set Daily Limit</Text>

        <TextInput style={{borderBottomWidth: 5, borderBottomColor: "red", top: 30}}></TextInput>

        <TouchableOpacity style={{backgroundColor: "red", width: 160, height: 30, borderRadius: 20, top: 60, left: 35}} onPress={() => {
          setVisibilityDaily();
          changeMaxvalue();
        }}>
          <Text style={{textAlign: "center", color: "white", fontSize: 20}}>Confirm</Text>
        </TouchableOpacity>
      </View>
      )}


  {VisibleView1 && (
      <View style={{backgroundColor: "rgba(239, 239, 239, 1)", height: 200, width: 250, borderRadius: 20,}}>
        <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Update Puffs</Text>
         <TouchableOpacity style={{backgroundColor: "gray", height: 30, width: 100, borderRadius: 5, left: 20}}>
          <Text style={{color: "white", textAlign: "center", fontSize: 20}}>Add</Text>
         </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: "gray", height: 30, width: 100, borderRadius: 5, bottom: 30, left: 125}}>
          <Text style={{color: "white", textAlign: "center", fontSize: 20}}>Overwrite</Text>
         </TouchableOpacity>

         <TextInput placeholder='Enter Puff Amount' style={{borderBottomWidth: 3, borderBottomColor: "red"}}></TextInput>

         <TouchableOpacity style={{backgroundColor: "red", height: 30, borderRadius: 10, width: 150, position: "relative", top: 60, left: 50}}>
          <Text style={{color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold"}} onPress={() => setVisibility1(!VisibleView1)}>Update</Text>
         </TouchableOpacity>
      </View>
        )}

      {/* firebase store variables */}

      
       {/* Graph */}

             <View style={{position: "relative", top: "0%", left: "5%"}}>
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

              


        <TouchableOpacity style={styles.PuffButton2} onPress={() => setVisibility1(!VisibleView1)}>
        <Text style={{textAlign: "center", color: "red", fontSize: "30", fontWeight: 400}}>UPDATE  PUFFS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PuffButton} onPress={(() => setValue(value + 1))}>
        <Text style={{textAlign: "center", color: "white", fontSize: "30", fontWeight: "semibold"}} onPress={pufffunc}>PUFF</Text>
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
    top: "10%",
    height: 57,
    width: "85%",
    borderRadius: 27,
    backgroundColor: "#FF0000",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  PuffButton2: {
    position: "relative",
    top: "9%",
    height: 57,
    width: "85%",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 27,
    backgroundColor: "white",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
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
