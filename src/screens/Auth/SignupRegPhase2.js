import React,{ useState, useReducer } from "react";
import { Text, View, ScrollView, TouchableOpacity, Dimensions, ImageBackground, Image } from "react-native";
import {  Button, Tile } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomStylesheet from "../../components/Stylesheet";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;        
/**NEEDS WORK*/
function heighlightColor(isPressed) {
    if(isPressed == true) {
        return { color: "blue" };
    }else{
        return {color: null};
    }
  
}

/*
Create a validation Boolean method on each screen
Create an error field for each input (errorEmail, errorPassword)
Make sure validateUser passes before passing to the next screen



function setColor () {
    switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
}

*/
const SignupRegPhase2 = ({ route, navigation }) => {

    const { appText, appContainer, buttonStyle, authImageLogo } = CustomStylesheet;
    const { data } = route.params;
    console.log("Object Received ----> ", data);
    //console.log("Check here: " +  data.firstname + " " + data.surname);
    const [roles, setRole] = useState({ role: '' });
    console.log("role: ", roles); 

     return(
        <View style={appContainer}>
        <ScrollView>
           
            <Image source={require('../../../assets/images/AppLogo.png')} style={authImageLogo}/>
            <Text style={styles.headingStyle}>
                    I AM USING THIS APP AS A...
                </Text>
                <View style={{marginBottom: 20, marginTop: 20}}>
                    <TouchableOpacity onPress={() =>  setRole({ role: 'Personal-Trainer' })}
                    onPressIn={() => heighlightColor(true)}
                    style={heighlightColor}
                    >
                        <ImageBackground source={require('../../../assets/images/personal-trainer.jpg')} style={[styles.imageStyle, { alignSelf: "center"}]}> 
                            <Text style={styles.imageText}>Personal Trainer</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom: 20, marginTop: 20}}>
                    <TouchableOpacity onPress={() =>  setRole({ role: 'Client' })}>
                        <ImageBackground source={require('../../../assets/images/client.jpg')} style={[styles.imageStyle, { alignSelf: "center"}]}> 
                            <Text style={styles.imageText}>Client</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom: 20, marginTop: 20}}>
                    <TouchableOpacity onPress={() =>  setRole({ role: 'Gym-User' })}>
                        <ImageBackground source={require('../../../assets/images/gym-user.jpg')} style={[styles.imageStyle, { alignSelf: "center"}]}> 
                            <Text style={styles.imageText}>Gym User</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
               
                <Button 
                    title="Continue" 
                    buttonStyle={[buttonStyle, {width: 200, alignSelf: 'center'}]} 
                    onPress={() => { navigation.push('SignupAuth', { formData: data, otherParams : roles })}}    
                />
        </ScrollView>
        </View>
    );
}

const styles = {

    headingStyle: {
        textAlign: 'center', fontSize: 20, 
        fontFamily: 'Roboto', color: "#f8f8ff", marginBottom: 15, marginTop: 10
    },
    touchableHighlightStyle: {
        color: "#00bfff"
    },
    imageText: {
        fontFamily: 'Roboto',
        color: "white",  
        fontSize: 20, 
        textAlign: "center", 
        marginTop: 50
    },
    imageStyle: {
        height: 100,
        width: 240,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: 'white',
        shadowOffset: {
          width: 0,
          height: 3
        },
       
    },

};

export default SignupRegPhase2;