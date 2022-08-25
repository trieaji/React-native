import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function EmbedExpression() {
  // Create Function Here
  function Hello(){
    /* alert("Selamat Datang") */
    return "Huraaa"
  }

  // Create a variable Here
  const dumbways = "Batch 37"

  return (
    <View>
      {/* <StatusBar /> */}
      {/* Code Here */}
      <Text>Hello {dumbways} {Hello()}</Text>
      {/* <Text>{Hello()}</Text> */}
    </View>
  );
}