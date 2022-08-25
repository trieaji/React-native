import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text } from "react-native";

export default function List(props) {
  return (
    <View>
      {/* <StatusBar /> */}
      {/* Code Here */}
      <Text>{props.nama}</Text>
      <Text>{props.alamat}</Text>
    </View>
  );
}

//Menyiapkan wadah supaya bisa menampung data yang dikirim oleh Props