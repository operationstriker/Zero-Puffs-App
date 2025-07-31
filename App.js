import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Zero Puffs</Text>
      <Text>0</Text>

      <TouchableOpacity style={styles.PuffButton}>
        <Text style={{textAlign: "center", color: "white", fontSize: "20", fontWeight: "bold"}}>PUFF</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PuffButton: {
    height: 48,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#FF0000",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  }
});


// start expo
//npx expo start
