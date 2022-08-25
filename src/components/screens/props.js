import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text } from "react-native";
import List from "../List";

export default function Props() {
  // Create variable to insert link Image

  return (
    <View>
     {/*  <StatusBar /> */}
      {/* Code Here */}
      <List nama="Dandi" alamat="Bekasi"/>
      <Image source={{ uri: "https://play-lh.googleusercontent.com/proxy/bqpbXejtqoLRKtu2PBwZIRU-0LYQkDCxZ1PSzoXheXrfksxMoTXeFJACt9PnQqn30MCbylEzOZM76lejnEGglYjlxl7gVKmMzRPtk2ZejNcB_iNkw-Mf6gaymWf6kqScqfjwvdui3MuYqEqL2Y0VNhe9kQ_D8sfDmN3oig=s3840-w3840-h2160" }} style={{ width: 305, height: 159 }} />
    </View>
  );
}

//Props ini bertugas mengirim data. Contohnya saat ini Props mengirim data ke List(List.js)