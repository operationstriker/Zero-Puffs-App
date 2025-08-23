import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react"
import { Tabs } from "expo-router"


export default function App() {

  const [Count, setCount] = useState(0)


  return (
    <View style={styles.container}>
     <Text style={{fontWeight: "bold", fontSize: 30, textAlign: "center", position: "relative", bottom: "40%"}}>Quit Plan</Text>

     <View>
      <Text>Limit</Text>
     </View>

    <View>
        <Text>Countdown Timer</Text>

        <View>
          <Text>29</Text>
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
    flexDirection: "row",
    width: 130,
    marginRight: 20
  }

});
