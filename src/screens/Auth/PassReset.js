import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView} from 'react-native';
import {  Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomStylesheet from "../../components/Stylesheet";

const PassResetScreen = () => {
    const [ emailReset, emailChange] = useState("");

    const { buttonStyle, appContainer, appText} = CustomStylesheet;    
    return(
            <View style={appContainer}>
               <KeyboardAvoidingView behavior="padding" enabled>
                    <Input
                        inputStyle={appText}
                        leftIcon={<Icon name='email' size={25} color='white' />}
                        placeholder="Enter email address" textContentType="emailAddress" 
                        label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
                        value={emailReset} 
                        onChangeText={(value) => emailChange(value)}
                    />
                </KeyboardAvoidingView> 
                <Button title="Reset Password" buttonStyle={buttonStyle} />
            </View>
        );
}

export default PassResetScreen;