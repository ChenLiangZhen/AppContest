import React, {useEffect, useState} from "react";
import {ViroScene, ViroText, ViroARScene, ViroTrackingStateConstants, ViroNode, Viro360Image, ViroARSceneNavigator} from "@viro-community/react-viro";
import {View, StyleSheet} from "react-native";
import {PERMISSIONS, request} from "react-native-permissions";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import ARScreen from "./src/screens/ARScreen";

const NativeStack = createNativeStackNavigator()



const StackNavigator = () => {
   return(
      <NativeStack.Navigator>
         <NativeStack.Screen name={"Home"} component={HomeScreen}/>
         <NativeStack.Screen name={"ARScreen"} component={ARScreen}/>
      </NativeStack.Navigator>
   )
}

const App = () => {
   return(
      <Provider store={store}>
         <NavigationContainer>
            <StackNavigator/>
         </NavigationContainer>
      </Provider>
   )
};


export default App