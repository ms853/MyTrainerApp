import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import CustomSylesheet from "../../components/Stylesheet";
import { render } from "react-dom";

// const passSignupAuthData = (navigationScreen, data) => {
//     this.props.navigation.navigate(navigationScreen, {authData : data});
// };

class SignupAuth extends Component{
  
    state = {
        previousData: [],
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        loading: false,
        visible: false,
        isValid: false,
        error: ''
    };

    renderForm = () => {

    };

    render() {
        const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle } = CustomSylesheet;

        const {email, username, password, loading, visible, isValid, confirmPassword, error} = this.state;
        
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
                                onChangeText={(value) => this.setState({ email: value})}
                            />
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='user' size={25} color='white' />}
                                placeholder="Enter Username" textContentType="username" 
                                value={username} 
                                onChangeText={(value) => this.setState({ username: value})}
                            />
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='lock' size={25} color='white' />}
                                placeholder="Enter Password" textContentType="password" 
                                secureTextEntry
                                value={password} 
                                onChangeText={(value) => this.setState({ password: value})}
                                />
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='lock' size={25} color='white' />}
                                placeholder="Confirm Password" textContentType="newPassword"
                                secureTextEntry 
                                value={confirmPassword} 
                                onChangeText={(value) => this.setState({ confirmPassword: value})}
                                />
                             <Button title="Sign Up" buttonStyle={[buttonStyle, { width: 200}]}  />
                        </View>

                    </ScrollView>
                   
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default SignupAuth;