import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, StyleSheet } from "react-native";
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

function SignupReg({ navigation }) {

    const [state, stateChanged] = useState({ firstname: '', surname: '', phoneNumber: ''}); 

    const [ firstname, firstnameChange ] = useState("");
    const [surname, surnameChange] = useState("");
    const [phoneNumber, phoneChange] = useState("");
    const [genderMale, mcheckBoxChange] = useState(false);
    const [genderFemale, fcheckBoxChange] = useState(false);


    const { appContainer, appText,  authTextInput, buttonStyle, checkBoxContainer, authImageLogo } = CustomSytlesheet;
    var { cardContainerStyle } = styles;

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
                    value={state.firstname} 
                    onChangeText={(value) => stateChanged({...state, firstname: value})}
                />
                <Input
                    inputStyle={appText}
                    containerStyle={authTextInput}
                    leftIcon={<Icon name='user' size={25} color='white' />}
                    placeholder="Enter Surname" textContentType="familyName" 
                    value={state.surname} 
                    onChangeText={(value) => stateChanged({...state, surname: value})}
                  
                />
                <Input
                    underlineColorAndroid="rgba(0,0,0,0)"
                    inputStyle={appText}
                    containerStyle={authTextInput}
                    leftIcon={<Icon name="mobile-phone" size={25} color='white' />}
                    placeholder="Enter Your Mobile Number" textContentType="telephoneNumber" 
                    value={state.phoneNumber} 
                    onChangeText={(value) => stateChanged({...state, phoneNumber: value})}
            
                />
                {/* <Text style={[appText, {marginTop: 10, textAlign: 'center', textDecorationLine: 'underline'}]}>What is your gender?</Text> */}
                </View>

                <View style={{ marginTop: 12, marginBottom: 12 }}>
                    <Button title="Continue" buttonStyle={buttonStyle} onPress={() => navigation.push("SignupRegPhase2", {data: state})}/>
                </View>
                  
                </Card>
            </KeyboardAvoidingView>
            </ScrollView>
            
        </View>
    );

    

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