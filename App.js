import * as React from "react";
import {AppRegistry} from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as SkyeTest } from "./app.json";
import theme from "./components/PaperProvider";
import Registration from "./screens/Registration";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // The paper provider wraps all UI components with React Native Paper
    //The Navigation Container handles app navigation
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen
          //options removes headers from screens
            options={{ header: () => null }}
            name="Registration"
            component={Registration}
          />
          <Stack.Screen
            options={{ header: () => null }} 
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(SkyeTest, () => App);

