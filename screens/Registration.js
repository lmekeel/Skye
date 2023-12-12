import * as React from "react";
import TextInputBox from "../components/TextInput";
import {Alert, Text, View, ImageBackground, TouchableOpacity} from "react-native";
import styles from "../components/Styles";

const Registration = () => {

   //Need to include a validate email method and password rules

   const handleRegisterPress = () => {
     // Your logic or action when the "Register" button is pressed
     Alert.alert("Button Pressed", "You pressed the register button!");
     // Additional logic, such as navigating to another screen:
     // navigation.navigate('YourScreenName');
   };

   const handleLoginPress = () => {
     // Your logic or action when the "Login" link is pressed
     Alert.alert("Link Pressed", "You pressed the login link!");
     // Additional logic, such as navigating to another screen:
     // navigation.navigate('LoginScreen');
   };

  return (
    <ImageBackground
      source={require("/Users/lilymekeel/Skye/assets/mobile-pet-graphic.webp")}
      style={styles.regBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.skyeLogo}>SKYE</Text>
        <Text style={styles.title}>create account</Text>
        <TextInputBox label="Name" />
        <TextInputBox label="Email" />
        <TextInputBox label="Password" isPassword={true} />
        <TextInputBox label="Confirm password" isPassword={true} />
        <TouchableOpacity onPress={handleRegisterPress} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Registration;
