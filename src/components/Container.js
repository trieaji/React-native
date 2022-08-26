import React from "react";
import { Text, Box,  NativeBaseProvider, extendTheme } from "native-base";
import { View } from "react-native";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

//Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Theme Native Base
import { useTheme } from "native-base";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';


// Import Screen
import Hello from "./native-base/Hello";
import NativeBase from "./native-base/NativeBase";
import Login from "./modals/Login";
import Form from "./styleinReact-Native/Form";
import Register from "./modals/Register";
import Index from "../pages/Index";
import AddCategory from "../pages/AddCategory";

//Create Stack Navigation
const Stack = createStackNavigator()

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator()

//Create Component Bottom Tab Navigation
function MyBottom() {
  const theme = useTheme()

  return(
    <Tab.Navigator
      initialRouteName="Sukida-yo"
      screenOptions={({route}) => ({
        headerMode: "screen",
        headerTintColor: {backgroundColor: theme.colors.yellow["300"]},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let icon;
          let octi;

          if(route.name === "Index") {
            iconName = focused ? "ios-home" : "ios-home-outline"
            return <Ionicons name={iconName} size={size} color={color} />
          } else if(route.name === "Register") {
            octi = focused ? "sign-in-alt" : "sign-out-alt"
            return <FontAwesome5 name={octi} size={size} color={color} />
          } else if(route.name === "Login") {
            icon = focused ? "ios-log-in" : "ios-log-in"
            return <Ionicons name={icon} size={size} color={color} />
          }

          //return <Ionicons name={iconName} size={size} color={color} />
          //return <AntDesign name={icon} size={size} color={color} />
          
        },
        tabBarActiveTintColor: theme.colors.yellow["300"],
        tabBarInActiveTintColor: "black"
      })}
    >
      <Tab.Screen name="Index" component={Index}/>
      <Tab.Screen name="Register" component={Register}/>
      <Tab.Screen name="Login" component={Login}/>
    </Tab.Navigator>
  )
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={MyBottom} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}