import React,{ Component } from "react";
import { Text, View, KeyboardAvoidingView} from 'react-native';
import {  Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class PassResetScreen extends Component {
    state = {
        emailReset: ''
    };

    render() {
        const { emailReset } = this.state;
        return(
            <View>
               <KeyboardAvoidingView behavior="padding" enabled>
                    <Input
                        leftIcon={<Icon name='email' size={25} color='black' />}
                        placeholder="Enter email address" textContentType="emailAddress" 
                        label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
                        value={emailReset} 
                        />
                </KeyboardAvoidingView> 
                <Button title="Reset Password" />
            </View>
        );
    }
}

export default PassResetScreen;