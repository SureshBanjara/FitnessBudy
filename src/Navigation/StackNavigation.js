// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../SplaceScreen/Splacescreen';
import StartingScreen from '../Components/Screens/StartingScreens/StartingScreen';


function SecondScreen() {
  return (

    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <View>
        <Text style={{ color: "green", fontSize: 25 }}>
          Welcome To FitnessBudy
        </Text>
      </View>
    </View>
  )

}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SplaceScreen' component={SplashScreen} />
        <Stack.Screen name="StartingScreen" component={StartingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;