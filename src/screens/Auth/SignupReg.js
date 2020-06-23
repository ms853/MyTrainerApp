import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image } from "react-native";
import {  Input, Button, CheckBox, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomSytlesheet from "../../components/Stylesheet";
import { ScrollView } from "react-native-gesture-handler";

export default function SignupReg() {
    
    const [ firstname, firstnameChange ] = useState("");
    const [surname, surnameChange] = useState("");
    const [phoneNumber, phoneChange] = useState("");
    const [genderMale, mcheckBoxChange] = useState(false);
    const [genderFemale, fcheckBoxChange] = useState(false);
    const [dataArray, setArray] = useState([]);

    const { appContainer, appText, cardContainerStyle, authTextInput, buttonStyle, checkBoxContainer, authImageLogo } = CustomSytlesheet;
    
    return(
        <View style={appContainer}>
            <ScrollView>
            <Image source={require('../../../assets/images/AppLogo.png')} style={authImageLogo}/>
            <KeyboardAvoidingView behavior="padding" enabled>   

            <Card containerStyle={cardContainerStyle}>
                <View style={{ marginTop: 20}}>
                <Input 
                    underlineColorAndroid="rgba(0,0,0,0)"
                    inputStyle={appText}
                    containerStyle={authTextInput}
                    leftIcon={<Icon name='user' size={25} color='white' />}
                    placeholder="Enter Firstname" textContentType="givenName"  
                    value={firstname} 
                    onChangeText={(value) => firstnameChange(value)}
                />
                <Input
                    underlineColorAndroid="rgba(0,0,0,0)"
                    inputStyle={appText}
                    containerStyle={authTextInput}
                    leftIcon={<Icon name='user' size={25} color='white' />}
                    placeholder="Enter Surname" textContentType="familyName" 
                    value={surname} 
                    onChangeText={(value) => surnameChange(value)}
                />
                <Input
                    underlineColorAndroid="rgba(0,0,0,0)"
                    inputStyle={appText}
                    containerStyle={authTextInput}
                    leftIcon={<Icon name="mobile-phone" size={25} color='white' />}
                    placeholder="Enter Your Mobile Number" textContentType="telephoneNumber" 
                    value={phoneNumber} 
                    onChangeText={(value) => phoneChange(value)}
                    onEndEditing={(value) => setArray([...dataArray, value])}
                />
                <Text style={[appText, {marginTop: 10, textAlign: 'center', textDecorationLine: 'underline'}]}>What is your gender?</Text>
            
                <CheckBox 
                    center
                    textStyle={appText}
                    containerStyle={checkBoxContainer}
                    title="Male"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={genderMale}
                    onPress={() => mcheckBoxChange(!genderMale)}
                />
                <CheckBox
                    center
                    textStyle={appText}
                    containerStyle={checkBoxContainer}
                    title='Female'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={genderFemale}
                    onPress={() => fcheckBoxChange(!genderFemale)}
                />
                </View>
                    <Button title="Continue" buttonStyle={buttonStyle}/>
                </Card>
            </KeyboardAvoidingView>
            </ScrollView>
            
        </View>
    );

}