import { registerRootComponent } from 'expo';
import { AppRegistry, Platform } from 'react-native';
import App from './App';

const appName = "The-Catalyst-Tree";

// Register the app for both web and native platforms
if (Platform.OS === 'web') {
  if (window.document) {
    AppRegistry.registerComponent(appName, () => App);
    AppRegistry.runApplication(appName, {
      initialProps: {},
      rootTag: document.getElementById('root')
    });
  }
} else {
  // For iOS and Android
  registerRootComponent(App);
}

export default App;