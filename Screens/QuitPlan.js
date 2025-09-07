import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {

    const [value, setValue] = useState(23) // create a variable
    const maxValue = 24;
  const fill = (value / maxValue) * 100;

  //Days
  const [value2, setValue2] = useState(28) // create a variable
  const maxValue2 = 30;
  const fill2 = (value2 / maxValue2) * 100;

  //min
  const [value3, setValue3] = useState(57) // create a variable
  const maxValue3 = 60;
  const fill3 = (value2 / maxValue2) * 100;

  // const dayfill = (day / dayMax) * 100;
  // const hoursfill = (hours / hourMax) * 100;
  // const minutefill = (minute / minuteMax) * 100;

  // const dayMax = 30
  // const hourMax = 30
  // const minuteMax = 30

  // const [day, setDay] = useState(19)
  // const [hours, setHours] = useState(0)
  // const [minute, setMinute] = useState(0)


  return (
    <View style={styles.container}>
     <Text style={{fontWeight: "bold", fontSize: 30, textAlign: "center", position: "relative", bottom: "25%"}}>Quit Plan</Text>

     <View style={{backgroundColor: "rgba(239, 239, 239, 1)", width: 300, position: "relative", bottom: 30}}>

      <Image source={require('../assets/Images/Target.png')} style={{height: 50, width: 50}}></Image>

      <View>
        <Text style={{textAlign: "center"}}>Today's Limit</Text>
        <Text style={{textAlign: "center", color: "red", fontWeight: "bold"}}>10 Puffs</Text>
      </View>

      <View>
        <Text style={{textAlign: "center"}}>Puff's Today</Text>
        <Text style={{textAlign: "center", color: "rgba(0, 183, 255, 1)", fontWeight: "bold"}}>10 Puffs</Text>
      </View>
      
     </View>

    <View style={{backgroundColor: "rgba(231, 231, 231, 1)", borderRadius: 20, width: 300, height: 150}}>
        <Text style={{textAlign: "center", fontSize: 20, fontWeight: '600'}}>Countdown Timer</Text>

            <AnimatedCircularProgress
            size={70}
            width={5}
            fill={fill2}
            tintColor="#ff0000ff"
            backgroundColor="#bababaff"
            rotation={-0} style={{position: "relative", top: 20, left: 15}}>
            {
              (fill) => (
                <View>
                 <Text style={{fontSize: 25, textAlign: "center", color: "red"}}> {value2}</Text>
                 <Text>Days</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>

                 <AnimatedCircularProgress
            size={70}
            width={5}
            fill={fill}
            tintColor="#ff0000ff"
            backgroundColor="#bababaff"
            rotation={-0} style={{position: "relative", bottom: 50, left: 115}}>
            {
              (fill) => (
                <View>
                 <Text style={{fontSize: 30, textAlign: "center", color: "red"}}> {value}</Text>
                 <Text>Hours</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>

            <AnimatedCircularProgress
            size={70}
            width={5}
            fill={fill3}
            tintColor="#ff0000ff"
            backgroundColor="#bababaff"
            rotation={-0} style={{position: "relative", bottom: 120, left: 215}}>
            {
              (fill) => (
                <View>
                 <Text style={{fontSize: 30, textAlign: "center", color: "red"}}> {value3}</Text>
                 <Text>Min</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>

        {/*  */}
    </View>

    <View>
    <Text>Graph</Text>
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
    flexDirection: "row",
    width: 130,
    marginRight: 20
  }

});
