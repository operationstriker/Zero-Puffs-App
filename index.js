import { registerRootComponent } from 'expo';
import App from './Screens/App';
import Home2 from "./Screens/Home2.js"
import QuitPlan from './Screens/QuitPlan'
import Tracker from './Screens/Tracker.js'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// registerRootComponent(Home2);
// registerRootComponent(Tracker);
