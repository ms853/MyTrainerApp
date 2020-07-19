import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, Image } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import CustomSylesheet from "../../components/Stylesheet";


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
        const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle, cardContainerStyle } = CustomSylesheet;

        const {email, username, password, loading, visible, isValid, confirmPassword, error} = this.state;
        const { route, navigation } = this.props;
        const { formData, otherParams } = route.params;

        console.log('LOOOK :', formData);
        console.log('YOYO :', otherParams);
        return(
            <View style={appContainer}>
                <KeyboardAvoidingView behavior="padding" enabled>
                <Image source={require('../../../assets/images/AppLogo.png')} style={authImageLogo}/>
                
                    <ScrollView>
                        <View style={authContainer}>
                        <Card containerStyle={cardContainerStyle}>
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
                        </Card>
                            
                        </View>

                    </ScrollView>
                   
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default SignupAuth;