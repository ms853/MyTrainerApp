import React, { Component } from "react";
import {  View, Text, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import {  Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomSylesheet from "../../components/Stylesheet";

class LoginScreen extends Component {

    //add navigation options

    state = {
        email: '',
        password: '',
        emailReset: '', //email state for resetting password.
        loading: false, //state for handling the loading screen.
        error: '',
        visible: false //modal state
    };

    render() {
        const { headerSyle, authTextInput, authContainer, appText } = CustomSylesheet;

        var { error, email, password, emailReset, loading, visible } = this.state;
        const { navigation } =   this.props;
        return (
            <View style={[authContainer, appText]}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <Input
                        containerStyle={authTextInput}
                        leftIcon={<Icon name='email' size={25} color='black' />}
                        placeholder="Enter email address" textContentType="emailAddress" 
                        labelStyle={{color: '#000000', marginTop: 15 }}
                        value={email}
                        onChangeText={value => this.setState({ email: value })}
                        />

                    <Input
                        containerStyle={[authTextInput, { marginTop: 10}]}
                        leftIcon={<Icon name='textbox-password' size={25} color='black' />}
                        placeholder="Enter Password" textContentType="password" 
                        labelStyle={{color: '#000000', marginTop: 15 }}
                        value={password} 
                        onChangeText={value => this.setState({ password: value })}
                        secureTextEntry
                        />

                <View style={{ marginTop: 12, marginBottom: 12 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text>Click here to create a new account</Text>        
                </TouchableOpacity>
                </View>

                <Button title="Sign In" onPress={() => navigation.navigate('Home')}/>
                </KeyboardAvoidingView>
                
            </View>
        );
    }
}

export default LoginScreen;