import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, Image, AsyncStorage, Dimensions, ActivityIndicator } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import CustomSylesheet from "../../components/Stylesheet";

const APPHEIGHT = Dimensions.get("screen").height;
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
        return(
            <View>
                <ActivityIndicator color="white" size={15} />
            </View>
        );
    };

    checkConfirmPassword = (passwordText) => {
        //const REGEX = "";
        const { password, confirmPassword } = this.state;
        this.setState({ confirmPassword: passwordText});
        
        if(confirmPassword != password) {
            this.setState({ error: 'The password you have entered does not match the previous password, please check and re-enter them again.'});
        }else if(confirmPassword == password) {
            this.setState({error: ''});
        }
        
    };

    render() {
        const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle, cardContainerStyle } = CustomSylesheet;

        const {email, username, password, loading, visible, isValid, confirmPassword, error} = this.state;
        const { route, navigation } = this.props;
        const { formData, otherParams } = route.params;

        //console.log('LOOOK :', formData);
        //console.log('YOYO :', otherParams);
        return(
            <View style={appContainer}>
                 <ScrollView>
                  <Image source={require('../../../assets/images/AppLogo.png')} 
                    style={authImageLogo}
                    />
                <KeyboardAvoidingView behavior="padding" enabled>
                        <View style={authContainer}>
                        <Card containerStyle={cardContainerStyle}>
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='user' size={25} color='white' />}
                                placeholder="Enter Email Address" textContentType="emailAddress" 
                                value={email} 
                                onChangeText={(value) => this.setState({ email: value})}
                                errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}                            
                            />
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='user' size={25} color='white' />}
                                placeholder="Enter Username" textContentType="username" 
                                value={username} 
                                onChangeText={(value) => this.setState({ username: value})}
                                errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}
                            />
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='lock' size={25} color='white' />}
                                placeholder="Enter Password" textContentType="password" 
                                secureTextEntry
                                value={password} 
                                onChangeText={(value) => this.setState({ password: value})}
                                onEndEditing={()=> console.log("Finished Editing.")}
                                //errorMessage={error}
                                errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}
                                />
                            <Input
                                inputStyle={appText}
                                containerStyle={authContainer}
                                leftIcon={<Icon name='lock' size={25} color='white' />}
                                placeholder="Confirm Password" textContentType="newPassword"
                                secureTextEntry 
                                value={confirmPassword} 
                                onChangeText={(value) => this.checkConfirmPassword(value)}
                                errorMessage={error}
                                errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}
                                />
                             <Button title="Sign Up" buttonStyle={[buttonStyle, { width: 200, alignSelf: 'center' }]}  />
                        </Card>
                            
                        </View>

              
                   
                </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}

export default SignupAuth;