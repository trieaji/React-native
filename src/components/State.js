import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"; //useState digunakan untuk merubah data
import { Text, TouchableOpacity, View } from "react-native";

export default function State() {
  // Init State
  const [counter, setCounter] = useState(0) //(0) sebagai data
  //counter yang bertugas sebagai penampung data, sedangkan setCounter yang bertugas sebagai pengubah data

  //Create Function Add
  function Add(){
    return setCounter(counter + 1)
  }

  //Create Function Less
  function Less(){
    if(counter < 0){
      return setCounter(counter - 1)
    }
    else {
        return setCounter(counter - 1)
    }
  }

  return (
    <View>
      {/* <StatusBar /> */}
      {/* Code Here */}
      <Text>{counter}</Text>
      <TouchableOpacity onPress={Add}><Text>Add</Text></TouchableOpacity>
      <TouchableOpacity onPress={Less}><Text>Less</Text></TouchableOpacity>
    </View>
  );
}