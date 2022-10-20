import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {Provider} from "react-redux";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import SignInScreen from './screens/AuthenticationScreens/SignInScreen';
import SignUpScreen from './screens/AuthenticationScreens/SignUpScreen';
import {store} from './store/store';



const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <>
    {
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
          
        <Stack.Navigator  >
        <Stack.Screen name="Stack" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="EatsScreen" component={EatsScreen} />
      </Stack.Navigator>
    </KeyboardAvoidingView>}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Home" component={StackNavigator}
            options={{
              headerShown:false, 
              tabBarHideOnKeyboard: (Platform.OS == "ios" ? false : true)}} />
            <Tabs.Screen name="Account" component={AccountScreen} />
          </Tabs.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;