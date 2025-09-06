import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {

  const [Count, setCount] = useState(0)
    const [value, setValue] = useState(4) // create a variable
    const maxValue = 20;
  const fill = (value / maxValue) * 100;


  return (
    <View style={styles.container}>
     <Text style={{fontWeight: "bold", fontSize: 30, textAlign: "center", position: "relative", bottom: "25%"}}>Quit Plan</Text>

     <View>
      <Text>Limit</Text>
     </View>

    <View style={{backgroundColor: "rgba(231, 231, 231, 1)", borderRadius: 20, width: 300, height: 150}}>
        <Text style={{textAlign: "center", fontSize: 20, fontWeight: '600'}}>Countdown Timer</Text>



            <AnimatedCircularProgress
            size={70}
            width={5}
            fill={fill}
            tintColor="#ff0000ff"
            backgroundColor="#bababaff"
            rotation={-0} style={{position: "relative", top: 20, left: 5}}>
            {
              (fill) => (
                <View>
                 <Text style={{fontSize: 25, textAlign: "center", color: "red"}}> {value}</Text>
                 <Text>Hour</Text>
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
            rotation={-0} style={{position: "relative", bottom: 50, left: 100}}>
            {
              (fill) => (
                <View>
                 <Text style={{fontSize: 30, textAlign: "center", color: "red"}}> {value}</Text>
                 <Text>Day</Text>
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
            rotation={-0} style={{position: "relative", bottom: 120, left: 200}}>
            {
              (fill) => (
                <View>
                 <Text style={{fontSize: 30, textAlign: "center", color: "red"}}> {value}</Text>
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
