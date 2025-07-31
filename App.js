import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Zero Puffs</Text>
      <Text>0</Text>

      <TouchableOpacity>
        
      </TouchableOpacity>
      <Button style={styles.PuffButton} title='PUFF'></Button>
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
    height: 60,
    width: 200,
    backgroundColor: "#FF0000",
    color: 'gray',
  }
});


// start expo
//npx expo start
