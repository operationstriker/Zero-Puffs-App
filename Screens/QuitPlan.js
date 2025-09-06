import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default function App() {

  const [Count, setCount] = useState(0)
    const [value, setValue] = useState(0) // create a variable
    const maxValue = 20;
  const fill = (value / maxValue) * 100;


  return (
    <View style={styles.container}>
     <Text style={{fontWeight: "bold", fontSize: 30, textAlign: "center", position: "relative", bottom: "33%"}}>Quit Plan</Text>

     <View>
      <Text>Limit</Text>
     </View>

    <View style={{backgroundColor: "rgba(208, 208, 208, 1)", borderRadius: 20, width: 300}}>
        <Text>Countdown Timer</Text>

        <View>
          <Text>29</Text>
          <Text>days</Text>
        </View>

        <View>
          <Text>29</Text>
          <Text>days</Text>
        </View>

        <View>
          <Text>29</Text>
          <Text>days</Text>
        </View>
    </View>

    <View>
    <Text>Graph</Text>
    </View>

       <AnimatedCircularProgress
            size={220}
            width={17}
            fill={fill}
            tintColor="#ff0000ff"
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
