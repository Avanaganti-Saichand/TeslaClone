import { Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === "primary" ? "#171A2BCC" : "#FFFFFFFA";
  const textColor = type === "primary" ? "#FFFFFFFA" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={([styles.text], { color: textColor })}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
