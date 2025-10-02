import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
// Vape Usage
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LineChart from "react-native-responsive-linechart";


export default function App() {

  const [value, setValue] = useState(1) // create a variable
  const maxValue = 20;

  const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
  const fill = (value / maxValue) * 100;
  

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontFamily: "Calbri", bottom: "21%", color: "#1E1E1E", textAlign: "center", margin: 0}}>ZERO PUFFS</Text>
      <Text style={{fontSize: 20, bottom: "21%"}}>PUFF Tracker</Text>


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




       <View style={{top: 100}}>
       <View style={{top: 160, right: 60}}>
       <Text style={{fontSize: 30}}>Daily Total</Text>
       <Text style={{textAlign: "center", fontSize: 20, right: 27}}>0</Text>
       </View>
       
       <View style={{top: 100, left: 90}}>
      <Text style={{textAlign: "center", fontSize: 30}}>Daily Average</Text>
      <Text style={{textAlign: "center", fontSize: 20}}>1</Text>
       </View>
       
       
       <View style={{top: 120, right: 86}}>
        <Text style={{textAlign: "center", fontSize: 30}}>Total Puffs</Text>
        <Text style={{textAlign: "center", fontSize: 20}}>0</Text>
       </View>

       <View style={{top: 60, left: 94}}>
       <Text style={{textAlign: "center", fontSize: 30}}>Nicotine Intake</Text>
       <Text style={{textAlign: "center", fontSize: 20}}>0</Text>
       </View>
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
    bottom: 150,
    flexDirection: "row",
    width: 130,
    marginRight: 20
  },
    vstack: {
    flexDirection: "column"
  },
  hstack: {
    flexDirection: "row"
  },
});
