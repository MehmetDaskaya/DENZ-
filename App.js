import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider, useSelector } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LogBox } from "react-native";
import HomeScreen from "./screens/Home";
import AccountScreen from "./screens/Account";
import MapScreen from "./screens/Map";
import SignInScreen from "./screens/AuthenticationScreens/SignIn";
import SignUpScreen from "./screens/AuthenticationScreens/SignUp";
import { store } from "./store/store";
import { selectSignedIn } from "./store/slices/navSlice";

import Splash from "./screens/Splash";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

//to ignore logs of async storage even though it's not used
LogBox.ignoreAllLogs();

const StackNavigator = () => {
  const signedIn = useSelector(selectSignedIn);
  // if (signedIn) {
  //   return <Splash />;
  // }

  return (
    <>
      {
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack.Navigator>
            {signedIn == null ? (
              <>
                <Stack.Screen
                  name="SignInScreen"
                  component={SignInScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SignUpScreen"
                  component={SignUpScreen}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Stack"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Account" component={AccountScreen} />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </KeyboardAvoidingView>
      }
    </>
  );
};

const App = () => {
  const getTabBarStyle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    let display = routeName === "SignInScreen" ? "none" : "flex";
    return { display };
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tabs.Navigator>
            <Tabs.Screen
              name="Anasayfa"
              component={StackNavigator}
              options={{
                style: {
                  backgroundColor: "blue", //color you want to change
                },
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                  return (
                    <Ionicons
                      name={focused ? "ios-home-sharp" : "ios-home-outline"}
                      size={24}
                      color="black"
                    />
                  );
                },
                tabBarHideOnKeyboard: Platform.OS == "ios" ? false : true,
              }}
            />
            <Tabs.Screen
              name="Ayarlar"
              component={AccountScreen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Ionicons
                      name="options"
                      size={24}
                      color="black"
                      style={{ color: focused ? "black" : "grey" }}
                    />
                  );
                },
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
