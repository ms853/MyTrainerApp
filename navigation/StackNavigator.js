import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomTabNavigator';
import Login from "../src/screens/Auth/Login";
import Signup from "../src/screens/Auth/Signup";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Root"; 

const AuthStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;