import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function JustFlatList() {
  // Make Dummy Data with Array
  const socialMedia = [
    {
      title: 'Instagram',
      hp: 'samsung'
    },
    {
      title: 'Facebook',
      hp: 'oppo'
    },
    {
      title: 'Tiktok',
      hp: 'LG'
    },
    {
      title: 'Tinder',
      hp: 'Xiaomi'
    },
  ]

  // const renderItem = ({item}) => (
  //   <Text>{item.title}</Text>
  // )

  return (
    <View>
      {/* <StatusBar /> */}
      {/* Code Here */}
      <FlatList   
        data={socialMedia}
        keyExtractor={item => item.title } //menggunakan keyExtractor untuk mencegah terjadinya error
        renderItem={({item}) => (<Text>{item.title},{item.hp}</Text>)}
      />
    
    </View>
  );
}