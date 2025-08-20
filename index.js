import { registerRootComponent } from 'expo';

import App from './Screens/App';
import Home2 from "./Screens/Home2.js"
import Tracker from './Screens/Tracker'
import LayoutScreen from './Screens/Layout.js'
// 

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
registerRootComponent(Home2);
// registerRootComponent(LayoutScreen);
// registerRootComponent(Tracker);
// registerRootComponent(QuitPlan);
