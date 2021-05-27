import React, { Component } from "react";
import { Text, View, KeyboardAvoidingView, Image, Dimensions, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Input, Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {ScrollView} from 'react-native-gesture-handler';
import CustomSylesheet from "../../components/Stylesheet";
import firebase from "firebase";


const APPHEIGHT = Dimensions.get("screen").height;

class SignupAuth extends Component{
  
    state = {
        email: '',     
        username: '',
        password: '',
        confirmPassword: '',
        loading: false,
        visible: false,
        isValid: false,
        passwordError: '',
        emailError: '',
        error: ''
    };

    componentDidMount() {
        const { route } = this.props;
        const { formData, otherParams } = route.params;
        var authObject = Object.assign(formData, otherParams);

        
        
        if(this.getFormData('prevRegData') === null) 
        {
            await this.saveFormData(authObject); 

        }else{
            var formObj = await this.getFormData('prevRegData');
            console.log("DATA --> ", formObj);
        }
       
    }

    renderForm = () => { 
        const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle, cardContainerStyle } = CustomSylesheet;
        const {email, username, password, loading, visible, isValid, confirmPassword, emailError, passwordError, error} = this.state;

        if(this.state.loading) {
            //load a loading screen
            return(
                <View>
                    <ActivityIndicator color="white" size="large" />
                </View>
            );
        }else{
            return(
                <Card containerStyle={cardContainerStyle}>
                <Input
                    inputStyle={appText}
                    containerStyle={authContainer}
                    inputContainerStyle={[authTextInput, { marginBottom: 5, marginTop: 5 }]}
                    leftIcon={<Icon name='user' size={25} color='white' />}
                    placeholder="Enter Email Address" textContentType="emailAddress" 
                    value={email} 
                    onChangeText={(value) => this.setState({ email: value})}
                    //onBlur={this.validateEmailAddress(email)}
                    errorMessage={emailError}
                    errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}                            
                />
                <Input
                    inputStyle={appText}
                    containerStyle={authContainer}
                    inputContainerStyle={[authTextInput, { marginBottom: 5, marginTop: 5 }]}
                    leftIcon={<Icon name='user' size={25} color='white' />}
                    placeholder="Enter Username" textContentType="username" 
                    value={username} 
                    onChangeText={(value) => this.setState({ username: value})}
                />
                <Input
                    inputStyle={appText}
                    containerStyle={authContainer}
                    inputContainerStyle={[authTextInput, { marginBottom: 5, marginTop: 5 }]}
                    leftIcon={<Icon name='lock' size={25} color='white' />}
                    placeholder="Enter Password" textContentType="password" 
                    secureTextEntry
                    value={password} 
                    onChangeText={(value) => this.setState({ password: value})}
                   // onBlur={this.validatePassword(password)}
                    errorMessage={passwordError}
                    errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}
                    />
                <Input
                    inputStyle={appText}
                    containerStyle={authContainer}
                    inputContainerStyle={[authTextInput, { marginBottom: 5, marginTop: 5 }]}
                    leftIcon={<Icon name='lock' size={25} color='white' />}
                    placeholder="Confirm Password" textContentType="newPassword"
                    secureTextEntry 
                    value={confirmPassword} 
                    onChangeText={(value) => this.setState({ confirmPassword: value})}
                    //onBlur={this.validatePassword(confirmPassword)}
                    errorMessage={passwordError}
                    errorStyle={{ color: "#ff0000", fontSize: 15, fontWeight:'500', textAlign: 'center'}}
                />
               <Button title="Sign Up" 
                buttonStyle={[buttonStyle, { width: 200, alignSelf: 'center' }]} 
                onPress={this.signupNewUser.bind(this)}
                />
                 
            </Card> 
                
            );
        }
    
    };

   

    validatePassword(passwordText) {
        //Password must have eight characters, contain at least one letter and one number.
        const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
        if(PASSWORD_REGEX.test(passwordText) == false) {
            this.setState({ passwordError: 'Invalid Password! Make sure you include at least one upper case letter and number'});
        }else{
            this.setState({ passwordError: ''});
        }

        if(this.state.confirmPassword !== ""){
            this.checkConfirmPassword(this.state.confirmPassword);
        }
        //Add Password Check here....
    }

    checkConfirmPassword = (passwordText) => {
        
        const { password, confirmPassword } = this.state;
        //this.setState({ confirmPassword: passwordText});
        
        if(confirmPassword != password) {
            this.setState({ passwordError: 'The password you have entered does not match the previous password, please check and re-enter them again.'});
        }else {
            this.setState({passwordError: ''});
        }
        
    };

    validateEmailAddress(email) {
        const EMAIL_REGEX = /^(?:[a-zA-Z\d@\.]*)?$/;
        if(!EMAIL_REGEX.test(email)) {
            this.setState({emailError: 'Error! Enter a valid email address with the following format: mytrainer@domain.com'});
            return false;
        }else{
            this.setState({emailError: ''});
        } 
    }

    /**
     * Method for authenticating the new user. 
     */
    signupNewUser = async() => {
        this.setState({ loading: true });

         try{
                 

         }catch(error) {
            this.setState({
                loading: false, email: '', username: '', password: '',
                error: 'Authentication failed. Please check your credentials and try again.'
            });
         }
    }

    saveFormData = async(dataToSave) => {
        //var { formData, otherParams } = route.params;
        try{
            await AsyncStorage.setItem('prevRegData',dataToSave);

        }catch(error){
            console.log(error);
        }
    }

    getFormData = async(savedDataKey) => {

        try{
            
            var objectToReturn = await AsyncStorage.getItem(savedDataKey);      
        }catch(error){
            console.log(error);
        }

        return objectToReturn;
    }

    render() {
        const { headerSyle, authTextInput, authContainer, appContainer, appText, authImageLogo, buttonStyle, cardContainerStyle } = CustomSylesheet;

        const {email, username, password, loading, visible, isValid, confirmPassword, emailError, passwordError, error} = this.state;
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
                            {this.renderForm()}
                            </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}

export default SignupAuth;