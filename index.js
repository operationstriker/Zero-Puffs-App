import { registerRootComponent } from 'expo';

import App from './App';
import Tracker from './Screens/Tracker'
import LayoutScreen from './Screens/Layout'
// 

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// registerRootComponent(Tracker);
// registerRootComponent(QuitPlan);
