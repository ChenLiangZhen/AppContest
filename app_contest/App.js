import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import {store} from "./src/redux/store";

const NativeStack = createNativeStackNavigator()



const StackNavigator = () => {
   return(
      <NativeStack.Navigator>
         <NativeStack.Screen name={"HomeScreen"} component={HomeScreen}/>
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