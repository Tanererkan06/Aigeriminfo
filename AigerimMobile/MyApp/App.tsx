import { YellowBox } from "react-native";
import App from "./src";

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);
/* YellowBox.ignoreWarnings(["Possible Unhandled Promise Rejection"]);
 */
export default App;
