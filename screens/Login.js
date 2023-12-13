import React from "react";
import {Pressable, Text, View} from "react-native";
import styles from "../components/Styles";

//Just a screen template to test out the navigation

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Registration")}>
        <Text>Return to Registration page</Text>
      </Pressable>
    </View>
  );
};

export default Login;