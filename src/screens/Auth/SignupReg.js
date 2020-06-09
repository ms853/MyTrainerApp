import React, { useState } from "react";
import { View, Text, Animated } from "react-native";
import {  Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";




export default function SignupReg() {
    
    const [ firstname, newFirstName ] = useState("");
    const [surname, newSurname] = useState("");

    return(

        <View>
            <Input 
                leftIcon={<Icon name='user' size={25} color='black' />}
                placeholder="Enter Firstname" textContentType="emailAddress"  
                value={firstname} 
                onChangeText={newFirstName(firstname => firstname)}
            />
            <Input
                leftIcon={<Icon name='user' size={25} color='black' />}
                placeholder="Enter Surname" textContentType="emailAddress" 
                label="Surname" labelStyle={{color: '#000000', marginTop: 15 }}
                value={surname} 
                onChangeText={newSurname( surname => surname)}
            />
            <Button title="Continue"/>
        </View>
    );

}