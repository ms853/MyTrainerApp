import React from 'react';
import { StyleSheet, Dimensions } from "react-native";

const APPHEIGHT = Dimensions.get("screen").height;
const APPWIDTH = Dimensions.get("screen").width
//{ marginTop: APPHEIGHT / 2}]

const CustomSylesheet = StyleSheet.create({
    headerSyle: {},
    authImageLogo: {
        flex: 1,
        width: "100%",
        height: APPHEIGHT / 2,
        resizeMode: "contain",
        alignSelf: "center"
    },
    buttonStyle: {
        marginTop: 10,
        borderRadius: 14,
        shadowColor: "#f8f8ff",
        backgroundColor: "#6495ed"
    },
    authTextInput: {
        borderRadius: 14,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderColor: "grey",
        borderWidth: 1,
        marginTop: 10,
        height: 40
    },
    appContainer: {
        backgroundColor: "#000000",
        //color: "#f8f8ff",
        flex: 1
      
    },
    authContainer: {
        alignItems: "center",
        marginTop: APPHEIGHT / 20,
        //flexDirection: "row"
    },
    appText: {
        color: "#f8f8ff", 
        fontSize: 14,
        fontFamily: "Roboto"
    }

    
    
});

export default CustomSylesheet;