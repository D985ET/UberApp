import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import {store} from "./store";


//1) Set up reduxj

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets Build Uber</Text>
      </View>
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
