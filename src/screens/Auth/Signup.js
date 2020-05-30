import React,{ Component } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import {  Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from "@react-navigation/native";

const SignupStack = createStackNavigator();

const SignupNav = () => {
    return (
        <SignupStack.Navigatior>
            <SignupStack.Screen name="SignupReg" component={Sig}></SignupStack.Screen>
        </SignupStack.Navigatior>

    );
}

/*******NEEDS WORK*****/
const SignupReg = () => {
    return(
        <View>
              <Input
                leftIcon={<Icon name='email' size={25} color='black' />}
                placeholder="Enter Firstname" textContentType="emailAddress" 
                label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
                value={email} 
                />
                 <Input
                    leftIcon={<Icon name='text-password' size={25} color='black' />}
                    placeholder="Enter Surname" textContentType="emailAddress" 
                    label="Surname" labelStyle={{color: '#000000', marginTop: 15 }}
                    value={email} 
                />
        </View>
    );
}


class Signup extends Component {

    state = {
        email: '',
        name: '',
        surname: '',
        role: '', 
        password: '',
        age: '',
        hideSection2: false
    };

    render() {
        var { email, hideSection2 } = this.state;

        
       
        return(
            <View>
               <KeyboardAvoidingView behavior="padding" enabled>
                    <Input
                        leftIcon={<Icon name='' size={25} color='black' />}
                        placeholder="Enter Firstname" textContentType="emailAddress" 
                        label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
                        value={email} 
                        />
                    <Input
                        leftIcon={<Icon name='' size={25} color='black' />}
                        placeholder="Enter Surname" textContentType="emailAddress" 
                        label="Surname" labelStyle={{color: '#000000', marginTop: 15 }}
                        value={email} 
                        />
                    <Input
                        leftIcon={<Icon name='email' size={25} color='black' />}
                        placeholder="Enter email address" textContentType="emailAddress" 
                        label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
                        value={email} 
                        />
                </KeyboardAvoidingView> 
            </View>
        );
    }
}

export default Signup;