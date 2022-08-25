import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import Header from "./Header";

export default function Event() {
  // Create Function Here
  function Greeting(){
    return alert("Ohayougozaimasu")
  }

  return (
    <View>
      {/* <StatusBar /> */}
      {/* Code Here */}
      {/* <Text>This is really <Header /></Text> */}
      <TouchableOpacity onPress={Greeting}><Text>Klik</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=> alert("Hello Guys")}><Text>Guys</Text></TouchableOpacity>
    </View>
  );
}

//Note :
// Untuk pembuatan button menggunakan TouchableOpacity, sedangkan untuk OnClick menggunakan onPress