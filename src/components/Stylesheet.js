import React from 'react';
import { StyleSheet, Dimensions } from "react-native";


const APPHEIGHT = Dimensions.get("window").height;

const CustomSylesheet = StyleSheet.create({
    headerSyle: {},
    buttonStyle: {
    },
    authTextInput: {
        borderRadius: 14,
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    appContainer: {
        backgroundColor: "#000000",
        fontSize: 15,
        color: "#f8f8ff",
        flex: 1
    },
    authContainer: {
        marginTop: APPHEIGHT / 4,
        alignItems: "center",
        flex: 1,
    
    },
    appText: {
        color: "#f8f8ff", 
    }

    
    
});

export default CustomSylesheet