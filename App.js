import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {Provider} from "react-redux";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//to ignore logs of async storage even though it's not used
import { LogBox } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import MapScreen from './screens/MapScreen';
import SignInScreen from './screens/AuthenticationScreens/SignInScreen';
import SignUpScreen from './screens/AuthenticationScreens/SignUpScreen';
import {store} from './store/store';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

//to ignore logs of async storage even though it's not used
LogBox.ignoreLogs(["Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

const StackNavigator = () => {

  return (
    <>
    {
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
          
        <Stack.Navigator  >
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}  />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name="Stack" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </KeyboardAvoidingView>}
    </>
  )
}

const App = () => {

  const getTabBarStyle = (route) => {  
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    let display = (routeName === 'SignInScreen') ? 'none':'flex';
    return {display}
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider >
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen name="Anasayfa" component={StackNavigator} 
            options={{ 
              style: {
              backgroundColor: 'blue',//color you want to change
            },
              headerShown:false,
              tabBarIcon: ({ focused }) => {
                return (
                    <Ionicons name={focused ? "ios-home-sharp": "ios-home-outline"} size={24} color="black" />
                );
                
              },
              tabBarHideOnKeyboard: (Platform.OS == "ios" ? false : true)}} />
            <Tabs.Screen name="Ayarlar" component={AccountScreen} options={{
              tabBarIcon: ({ focused }) => {
                return (
                    <Ionicons name="options" size={24} color="black"
                    style={{color: focused ? "black" : "grey"}} />
                );
              },
            }} />
          </Tabs.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;