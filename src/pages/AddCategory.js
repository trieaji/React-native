import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function AddCategory() {
  return (
    <View style={style.countainer}>
      <StatusBar />
      {/* Code Here */}
      <Text style={style.header}>Add Category</Text>

      <Text style={style.labelText}>Name</Text>
      <TextInput style={style.textInput}/>

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Add Category</Text>
      </TouchableOpacity>
    

    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  countainer: {
    flex: 1,
    padding: 20
  },
  header: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  labelText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom:12,
    color: 'grey',
    padding: 10,
    borderColor: 'grey'
  },
  button: {
    backgroundColor: 'red',
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center'
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    borderRadius: 5,
    textAlign: 'center',
  }

})