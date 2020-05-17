import React,{ Component } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView } from "react-native";
import {  Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Signup extends Component {

    state = {
        email: '',
        name: '',
        surname: '',
        role: '', 
        password: '',
        age: ''
    };

    render() {
        const { email, } = this.state;
        return(
            <View>
               <KeyboardAvoidingView behavior="padding" enabled>
                    <Input
                        leftIcon={<Icon name='email' size={25} color='black' />}
                        placeholder="Enter email address" textContentType="emailAddress" 
                        label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
                        value={email} 
                        />
                    <Input
                        leftIcon={<Icon name='email' size={25} color='black' />}
                        placeholder="Enter email address" textContentType="emailAddress" 
                        label="Email Address" labelStyle={{color: '#000000', marginTop: 15 }}
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