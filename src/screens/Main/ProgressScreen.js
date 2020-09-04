/*
*   Show user pics and their progress.
*   Provide basic analytics 
*/
import React, { Component } from "react";
import { AsyncStorage, View, Text } from "react-native";
import CustomStylesheet from "../../components/Stylesheet"; 
class ProgressScreen extends Component {

    render() {
        const { appContainer, appText } = CustomStylesheet;
        return(
            <View style={appContainer}> 
                <Text>ProgressScreen</Text>
            </View>
        );
    }
}

export default ProgressScreen;