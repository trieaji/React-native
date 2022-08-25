import React from "react";
import { Text, Box,  NativeBaseProvider, extendTheme } from "native-base";
import { View } from "react-native";

// Import Screen
import Hello from "./native-base/Hello";
import NativeBase from "./native-base/NativeBase";
import Login from "./modals/Login";
import Form from "./styleinReact-Native/Form";
import Register from "./modals/Register";
import Index from "../pages/Index";
import AddCategory from "../pages/AddCategory";

export default function Container() {
  return (
    <NativeBaseProvider>
      <AddCategory />
    </NativeBaseProvider>
  )
}