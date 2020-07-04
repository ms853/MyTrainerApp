import React,{ Component } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import {  Input, Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomStylesheet from "../../components/Stylesheet";

/*******NEEDS WORK*****/

const SignupRegPhase2 = ({ route, navigation }) => {

    const { appText, appContainer, buttonStyle, authImageLogo } = CustomStylesheet;
    const { signupData } = route.params;
    console.log("Check here: {0}", signupData);
    return(
        
        
        <View style={appContainer}>
            
            <KeyboardAvoidingView behavior="padding" enabled>
                <Text style={appText}>What kind of user are you?</Text>
                <Text>Gym User</Text>
                <Text>Personal Trainer</Text>
                <Text>Client</Text>
                <Button title="Continue" buttonStyle={buttonStyle}  />
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = {

    headingStyle: {
        color: "#f8f8ff", 
        fontSize: 20,
        fontFamily: "Roboto",
        alignSelf: 'center'
    },

};

export default SignupRegPhase2;