/*
*   This component will hold information on the membership type of the user.
*   Give them an option to upgrade their membership.
*   Upload pics on progress.
*/
import React, { Component } from "react";
import { AsyncStorage, View, Text, SectionList } from "react-native";
import CustomStylesheet from "../../components/Stylesheet";
import { Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from "react-native-safe-area-context";
class ProfileScreen extends Component {
    
    render() {
        const { appContainer, appText, sectionListStyle } = CustomStylesheet;
        return(
            <View style={appContainer}>
               
                <Avatar rounded size="large"
                containerStyle={{ 
                    backgroundColor: "white", 
                    alignSelf: 'center',
                    marginTop: 10   
                }} 
                />
                 <Text style={[appText, { textAlign: "center", marginTop: 10}]}>Name: USER</Text>
                <Text style={[appText, { textAlign: "center", marginTop: 10}]}>Member since ...date</Text>
                <SafeAreaView>
                <SectionList style={sectionListStyle} />
                
                </SafeAreaView>
            </View>
        );
    }
}



export default ProfileScreen;