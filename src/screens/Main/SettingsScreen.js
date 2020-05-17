import React,{ Component } from "react";
import { View, Text } from "react-native";
import LinksScreen from "./LinksScreen";
import { Button } from "react-native-elements";
import  CustomSylesheet from "../../components/Stylesheet";

class Settings extends Component{

    render() {
       return(
        <View>
            <Text>Settings Screen</Text>
            <Text>Avatar with name of user</Text>
            <Text>Subheadings - height details, additional health details, membership details, edit personal trainer details. </Text>
            <LinksScreen />
            <Text>user sign out</Text>
            <Button title="Sign Out" />
        </View>
       );
    }
}

export default Settings;