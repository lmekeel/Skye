import * as React from "react";
import { TextInput } from "react-native-paper";

const TextInputBox = ({ label, isPassword }) => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      secureTextEntry={isPassword}
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
      mode="outlined"
      style={{ marginVertical: 8, fontSize: 18, height: 40, width: "75%" }}
      theme={{
        colors: {
          primary: "#D58212", // Outline color when focused
          background: "white", // Background color
        },
      }}
    />
  );
};

export default TextInputBox;
