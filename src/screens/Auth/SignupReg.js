import React, { useState, Component } from "react";
import { View, Text, KeyboardAvoidingView, Image, StyleSheet, Alert } from "react-native";
import {  Input, Button, CheckBox, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomSytlesheet from "../../components/Stylesheet";
import { ScrollView } from "react-native-gesture-handler";


// const reducer = (state, action) => {
//     switch(action.valueChanged) {
//         case 'firstname':
//             return { ...state, firstname: state.firstname }
//         case 'surname': 
//             return {...state, surname: state.surname }
//         case 'phoneNumber': 
//             return {...state, phoneNumber: state.phoneNumber }
//         default:  
//             return state;
//     }
// };
//Make sure you have a method for validating the screen before you proceed to the following screen.

class SignupReg extends Component {

     
    state = {
        firstname: '',
        surname: '',
        phoneNumber: '', 
        firstnameError: '',
        surnameError: '',
        phonenumberError: ''
    };

    validateFirstname() {
        var { firstname } = this.state;
        if(firstname == "") {
            this.setState({ firstnameError: 'Firstname field cannot be empty!'});
            return false;
        }else{
            this.setState({ firstnameError: ''});
            return true;
        }
        
    }

    validateSurname() {
       var {surname} = this.state;

        if(surname == "") {
            this.setState({ surnameError: 'Surname field cannot be empty!'});
            return false;
        }else{
            this.setState({ surnameError: ''});
            return true;
        } 
        
    }
   
    validatePhoneNumber() {
        const PHONE_REGEX = /\d/;
        var isValid = PHONE_REGEX.test(this.state.phoneNumber);
        if(isValid == false) {
            this.setState({ phonenumberError: 'You need to enter a valid phone number!'});
            return false;
        }
        this.setState({ phonenumberError: ''});
        return true;
    }

    proceedToNextScreen = (screenName, data) => {
        const { navigation } = this.props;
        
        if(this.validateFirstname() === false || this.validateSurname() === false || this.validatePhoneNumber() === false) {
            //Alert.alert("My Trainer", "Warning! There are still errors on this page.\n\nCheck that the data you have provided is correct before you continue.");
            //console.log("HIT ME!!!!!");
            Alert.alert("My Trainer", "Required fields need to be filled in before you can proceed.");
            return;
        }else{
            navigation.navigate(screenName, {data: data}); 
        }
             
        
    };

    render() {

        const { appContainer, appText, cardContainerStyle, authTextInput, buttonStyle, authImageLogo } = CustomSytlesheet;
        const {firstname, surname, phoneNumber, firstnameError, surnameError, phonenumberError} = this.state;
        var dataToSend = {};
        dataToSend.firstName = firstname;
        dataToSend.surname = surname;
        dataToSend.phone = phoneNumber;

        return(
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
                        placeholder="Enter Firstname" textContentType="givenName"  
                        value={firstname} 
                        onChangeText={(value) => this.setState({ firstname: value})}
                        onBlur={()=> this.validateFirstname()}
                        errorMessage={firstnameError}
                        errorStyle={{ color: "red", fontSize: 14, fontWeight: "500", marginBottom: 10,}}
                    />
                    <Input
                        inputStyle={appText}
                        containerStyle={authTextInput}
                        leftIcon={<Icon name='user' size={25} color='white' />}
                        placeholder="Enter Surname" textContentType="familyName" 
                        value={surname} 
                        onChangeText={(value) => this.setState({ surname: value})}
                        onBlur={() => this.validateSurname()}
                        errorMessage={surnameError}
                        errorStyle={{ color: "red", fontSize: 14, fontWeight: "500", marginBottom: 10}}
                    />
                    <Input
                        underlineColorAndroid="rgba(0,0,0,0)"
                        inputStyle={appText}
                        containerStyle={authTextInput}
                        leftIcon={<Icon name="mobile-phone" size={25} color='white' />}
                        placeholder="Enter Your Mobile Number" textContentType="telephoneNumber" 
                        keyboardType="phone-pad"
                        value={phoneNumber} 
                        onChangeText={(value) => this.setState({phoneNumber: value})}
                        onBlur={() => this.validatePhoneNumber()}
                        errorMessage={phonenumberError}
                        errorStyle={{ color: "red", fontSize: 14, fontWeight: "500", marginBottom: 10}}
                    />
                    {/* <Text style={[appText, {marginTop: 10, textAlign: 'center', textDecorationLine: 'underline'}]}>What is your gender?</Text> */}
                    </View>
    
                    <View style={{ marginTop: 12, marginBottom: 12 }}>
                        <Button title="Continue"  buttonStyle={buttonStyle} onPress={() => this.proceedToNextScreen("SignupRegPhase2", dataToSend)}/>
                    </View>
                      
                    </Card>
                </KeyboardAvoidingView>
                </ScrollView>
                
            </View>
        );
    }

    

}

const styles = {
    cardContainerStyle: {
        alignItems: 'center',
        backgroundColor: "#000000",
        //shadowColor: "#000",
        shadowOpacity: 0.50,
        elevation: 15,
        borderRadius: 10
    }
}

export default SignupReg;