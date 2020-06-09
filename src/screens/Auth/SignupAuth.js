import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import CustomSylesheet from "../../components/Stylesheet";

const SignupAuth = () => {
    /* React Hooks to update and handle the necessary states.*/
    const [email, emailChange] = useState('');
    const [password, passwordChange] = useState('');
    const [confirmPassword, confirmChange] = useState('');

    const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle } = CustomSylesheet;

    return(
        
        <View style={appContainer}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <ScrollView>
                    <View style={authContainer}>
                        <Input
                            inputStyle={appText}
                            containerStyle={authContainer}
                            leftIcon={<Icon name='user' size={25} color='white' />}
                            placeholder="Enter Email Address" textContentType="emailAddress" 
                            value={email} 
                            onChangeText={(value) => emailChange(value)}
                            />
                        <Input
                            inputStyle={appText}
                            containerStyle={authContainer}
                            leftIcon={<Icon name='lock' size={25} color='white' />}
                            placeholder="Enter Password" textContentType="password" 
                            secureTextEntry
                            value={password} 
                            onChangeText={(value) => passwordChange(value)}
                            />
                        <Input
                            inputStyle={appText}
                            containerStyle={authContainer}
                            leftIcon={<Icon name='lock' size={25} color='white' />}
                            placeholder="Confirm Password" textContentType="newPassword"
                            secureTextEntry 
                            value={confirmPassword} 
                            onChangeText={(value) => confirmChange(value)}
                            />
                        
                    </View>
                </ScrollView>
                <Button title="Sign Up" buttonStyle={buttonStyle} />
            </KeyboardAvoidingView>
        </View>
    );
}

export default SignupAuth;