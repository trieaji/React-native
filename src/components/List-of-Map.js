import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Map() {
  // Create Dummy Data With Array
  const socialMedia = ["Instagram","Tiktok","Tinder","Facebook","Discord"]

  return (
    <View>
      <StatusBar />
      {socialMedia.map((item, index) => { //item berguna untuk menampung data dari socilMedia
        return(
          <Text key={index}>{item}</Text> //menggunakan key untuk mencegah terjadinya error
          //<Text>{item}</Text>
        )
      })}

      {/* {socialMedia.map((item, index)=> (
        <Text key={index}>{item}</Text>
      ))} */}

    </View>
  );
}