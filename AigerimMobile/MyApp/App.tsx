import { LogBox  } from "react-native";
import { Provider } from 'react-redux';
import { createStore,combineReducers } from "redux";
import {name as appName} from './app.json';
import App from "./src";
 LogBox.ignoreLogs(['Warning: ...']); 
 LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
/* import configureStore from './src/store';
 */  /*

  LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
  LogBox.ignoreLogs(["md-more  is not a valid icon name for family  ionicons"]);
 
 
  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]); 
  
  
  
  */
 
 
export default App;
