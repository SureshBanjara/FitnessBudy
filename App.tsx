import React from "react";
import { Text, View, SafeAreaView } from "react-native";

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignContent: 'center', marginTop: '50%' }}>
        <Text style={{ color: 'green', textAlign: "center",fontSize:25 }}>
         Welcome to FitnessBudy
        </Text>
      </View>
    </SafeAreaView>
  )
}
export default App