import React, { Component } from "react";
import {  View, Text, KeyboardAvoidingView, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
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

    renderPasswordReset = () => {}
    renderLoginForm = () => {}

    render() {
        const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle } = CustomSylesheet;

        var { error, email, password, emailReset, loading, visible } = this.state;
        const { navigation } =   this.props;

        return (
            <View style={appContainer}>
                <ScrollView>
                <KeyboardAvoidingView behavior="padding" enabled>
                        <Image source={require('../../../assets/images/AppLogo.png')} style={authImageLogo}/>
                         <View style={authContainer}>    
                         <Input
                                inputStyle={appText}
                                containerStyle={authTextInput}
                                leftIcon={<Icon name='email' size={25} color='black' style={{ color: "white"}}/>}
                                placeholder="Enter email address" textContentType="emailAddress" 
                                //labelStyle={{color: '#000000', marginTop: 15 }}
                                value={email}
                                onChangeText={value => this.setState({ email: value })}
                                />

                            <Input
                                inputStyle={appText}
                                containerStyle={[authTextInput, { marginTop: 10}]}
                                leftIcon={<Icon name='textbox-password' size={25} color='black'  style={{ color: "white"}} />}
                                placeholder="Enter Password" textContentType="password" 
                                //labelStyle={{color: '#000000', marginTop: 15 }}
                                value={password} 
                                onChangeText={value => this.setState({ password: value })}
                                secureTextEntry
                                />

                       
                   
                    </View>
                    <View style={{ marginTop: 12, marginBottom: 12 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={appText}>Click here to create a new account</Text>        
                        </TouchableOpacity>
                        </View>

                    <Button 
                        buttonStyle={buttonStyle}
                        title="Sign In" onPress={() => navigation.navigate('Home')}/>
                   
                </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}



export default LoginScreen;