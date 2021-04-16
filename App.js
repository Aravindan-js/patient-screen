import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./screens/Landing";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Landing />
    </SafeAreaProvider>
  )
}

export default App;
