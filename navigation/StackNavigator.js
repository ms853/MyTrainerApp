import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from './BottomTabNavigator';
import Login from "../src/screens/Auth/Login";
import SignupAuth  from "../src/screens/Auth/SignupAuth";
import SignupReg  from "../src/screens/Auth/SignupReg";
import SignupRegPhase2 from "../src/screens/Auth/SignupRegPhase2";
import PassResetScreen from "../src/screens/Auth/PassReset";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Root"; 

/**
 * Functional Component that handles the navigation for the authentication flow. 
 */
const AuthStackNavigator = () => {

    return(
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={SignupReg} />
            <Stack.Screen name="SignupReg" component={SignupReg} />
            <Stack.Screen name="SignupAuth" component={SignupAuth} />
            <Stack.Screen name="SignupRegPhase2" component={SignupRegPhase2} />
            <Stack.Screen name="PassReset" component={PassResetScreen} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default AuthStackNavigator;