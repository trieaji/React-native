import React from "react";


// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import Container
import Container from "./src/components/Container";
//import AppLoading from "expo-app-loading";


// Import Component
import Content from './src/components/Content';
import Header from './src/components/Header';
import EmbedExpression from './src/components/EmbedExpression';
import Event from './src/components/Event';
import Props from './src/components/screens/props';
import State from './src/components/State';
import Form from './src/components/styleinReact-Native/Form';
import Map from './src/components/List-of-Map';
import JustFlatList from './src/components/List-of-Flatlist';


export default function App() {
  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  )
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* return ( */
    {/* <View style={styles.container}> */}
    {/* <StatusBar /> */}
      {/* <Content />
      <Header /> //Taruh di container
      <EmbedExpression /> //Taruh di container
      <Event /> //Taruh di container
      <Props /> //Taruh di container
    <Form /> //Taruh di container
      <Map /> //Taruh di container
      <JustFlatList /> //Taruh di container
      <State /> */} 
      {/* <NativeBase /> */}
    {/* </View> */}
  {/* ); */}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
