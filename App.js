import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import {store} from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; //stackhez kell, visszalépés meg ilyenek
import EatsScreen from "./screens/EatsScreen";


//1) Set up redux

export default function App() {
  const Stack = createStackNavigator();
 

  return (
    <Provider store={store}>
        <NavigationContainer>
            <SafeAreaProvider>
              <Stack.Navigator>
              {/*ide dobjuk be azokat a dolgokat/Screeneket ahova visszatudunk lépni a stack miatt*/}
                <Stack.Screen 
                name='HomeScreen' 
                component={HomeScreen} 
                options=
                {
                  {
                      headerShown:false,
                  }
                }/>  
                <Stack.Screen 
                name='MapScreen' 
                component={MapScreen} 
                options=
                {
                  {
                      headerShown:false,
                  }
                }/> 
                 <Stack.Screen 
                name='EatsScreen' 
                component={EatsScreen} 
                options=
                {
                  {
                      headerShown:false,
                  }
                }/>  
                {/*hol található a projektben ez a component*/}
              </Stack.Navigator>
              {/*<HomeScreen/>*/}
            </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
