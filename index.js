import { registerRootComponent } from 'expo';

import App from './App';
import App2 from './Screens/Home.js'
import QuitPlan from './Screens/QuitPlan'


// import { LayoutScreen } from './Screens/Layout.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// registerRootComponent(App2);
// registerRootComponent(QuitPlan);
