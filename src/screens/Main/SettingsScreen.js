import React,{ Component } from "react";
import { View, Text } from "react-native";
import LinksScreen from "./LinksScreen";
import { Button } from "react-native-elements";
import  CustomSylesheet from "../../components/Stylesheet";

class Settings extends Component{

    render() {
        //const { appContainer, appText } = CustomStylesheet;
        const { appContainer, appText } = CustomSylesheet;
       return(
        <View style={appContainer}>
            
            <Text style={appText}>Avatar with name of user</Text>
            <Text style={appText}>Subheadings - height details, additional health details, membership details, edit personal trainer details. </Text>
            
            
            <Button title="Sign Out" />
        </View>
       );
    }
}

export default Settings;