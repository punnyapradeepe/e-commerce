import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './App/Navigations/TabNavigation';
import LandingScreen from './App/Screens/LandingScreen';
import SigninScreen from './App/Screens/SigninScreen';
import ShoppingScreen from './App/Screens/ShoppingScreen';




const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: true,title:'' }}/>
        <Stack.Screen name="home" component={TabNavigation} options={{ headerShown: false,title:''}}/>
        <Stack.Screen name="shopping" component={TabNavigation} options={{ headerShown: false,title:''}}/>
        <Stack.Screen name="cart" component={TabNavigation} options={{ headerShown: false,title:'' }}/>
        <Stack.Screen name="profile" component={TabNavigation} options={{ headerShown: false,title:'' }}/>
        <Stack.Screen name="signin" component={SigninScreen} options={{ headerShown: true,title:'' }}/>
        {/* <Stack.Screen name="password" component={TabNavigation} options={{ headerShown: false,title:" " }}/> */}
      </Stack.Navigator>
      <StatusBar style="auto" />

    </NavigationContainer>

  
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
