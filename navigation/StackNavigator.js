import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomTabNavigator';
import Login from "../src/screens/Auth/Login";
//import Signup from "../src/screens/Auth/Signup";
//import Signup  from "../src/screens/Auth/Signup";
import SignupAuth  from "../src/screens/Auth/SignupAuth";
import SignupReg  from "../src/screens/Auth/SignupReg";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Root"; 

const AuthStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={SignupReg} />
            <Stack.Screen name="Signup" component={SignupAuth} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;