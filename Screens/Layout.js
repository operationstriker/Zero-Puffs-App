import { Tabs } from 'expo-router';
import { Stack } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
    <Tabs.Screen name='Quit' options={{
      tabBarLabel: "Home"
    }}/>
    <Tabs.Screen name='Puffs' options={{
      tabBarLabel: "Home"
    }}/>
    <Tabs.Screen name='Profile' options={{
      tabBarLabel: "Home"
    }}/>
    </Tabs>
  );
}
