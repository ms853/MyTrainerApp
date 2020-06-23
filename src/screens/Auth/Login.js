import React, { Component } from "react";
import {  View, Text, KeyboardAvoidingView, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import {  Input, Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
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

    renderLoginForm = () => {}

    render() {
        const { headerSyle, authTextInput, appContainer, appText, authImageLogo, buttonStyle, cardContainerStyle } = CustomSylesheet;

        var { error, email, password, emailReset, loading, visible } = this.state;
        const { navigation } =   this.props;

        return (
            <View style={appContainer}>
                <ScrollView>
                <Image source={require('../../../assets/images/AppLogo.png')} style={authImageLogo}/>
                <KeyboardAvoidingView behavior="padding" enabled>
                        
                        <Card containerStyle={cardContainerStyle}>
                            <View>    
                                <Input
                                    inputStyle={appText}
                                    containerStyle={authTextInput}
                                    leftIcon={<Icon name='user' size={25} color='white' />}
                                    placeholder="Enter Username" textContentType="emailAddress" 
                                    //labelStyle={{color: '#000000', marginTop: 15 }}
                                    value={email}
                                    onChangeText={value => this.setState({ email: value })}
                                    />

                                <Input
                                    inputStyle={appText}
                                    containerStyle={authTextInput}
                                    leftIcon={<Icon name='lock' size={25} color='white' />}
                                    placeholder="Enter Password" textContentType="password" 
                                    //labelStyle={{color: '#000000', marginTop: 15 }}
                                    value={password} 
                                    onChangeText={value => this.setState({ password: value })}
                                    secureTextEntry
                                    />
                            </View>

                            <View style={{ marginTop: 12, marginBottom: 12 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupReg')}>
                                    <Text style={appText}>Click here to create a new account</Text>        
                                </TouchableOpacity>
                            </View>

                            <Button 
                                buttonStyle={buttonStyle}
                                title="Sign In" onPress={() => navigation.navigate('Home')}/>
                                
                            <View style={{ marginTop: 12, marginBottom: 12 }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PassReset')}>
                                    <Text style={[appText, {textAlign: 'center'}]}>Reset Password</Text>        
                                </TouchableOpacity>
                            </View>
                        </Card>
                         
                </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}



export default LoginScreen;