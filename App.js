import React, {useState} from 'react';
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import SignInScreen from './screens/AuthenticationScreens/SignInScreen';
import SignUpScreen from './screens/AuthenticationScreens/SignUpScreen';
import {store} from './store/store';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <>
    {<Stack.Navigator>
      <Stack.Screen name="Stack" component={HomeScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={StackNavigator}
          options={{headerShown:false}} />
          <Tabs.Screen name="Account" component={AccountScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;