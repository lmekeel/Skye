import * as React from "react";
import { View, AppRegistry, Text} from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as SkyeTest } from "./app.json";
import theme from "./components/PaperProvider";
import styles from "./components/Styles";
import Registration from "./screens/Registration";

export default function App() {
  return (
    // The paper provider wraps all UI components with React Native Paper
    <PaperProvider theme={theme}> 
      
        <Registration />
      
    </PaperProvider>
  );
}

AppRegistry.registerComponent(SkyeTest, () => App);

