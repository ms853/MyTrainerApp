import React,{ useState } from "react";
import { Text, View, ScrollView, TouchableHighlight, Dimensions } from "react-native";
import {  Button, Tile } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomStylesheet from "../../components/Stylesheet";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
/*******NEEDS WORK*****/

const SignupRegPhase2 = ({ route, navigation }) => {

    const { appText, appContainer, buttonStyle, authImageLogo } = CustomStylesheet;
    const { data } = route.params;
    //console.log("Check here: " +  data.firstname + " " + data.surname);
    const [roles, setRole] = useState({ personalTrainer: '', client: '', gymUser: ''});
    
     return(
        <ScrollView>
            <View style={appContainer}>
            <Text style={styles.headingStyle}
                >
                    I AM USING THIS APP AS A...
                </Text>
             <Tile imageSrc={require('../../../assets/images/personal-trainer.jpg')}
                imageContainerStyle={styles.imageStyle}
                containerStyle={{alignItems: 'center'}}
                title="PERSONAL TRAINER"
                featured
                onPress={() => {}}
                >
                </Tile>
                <Tile imageSrc={require('../../../assets/images/client.jpg')}
                imageContainerStyle={styles.imageStyle}
                containerStyle={{ alignItems: 'center'}}
                title="CLIENT"
                featured
                >
                </Tile>
                <Tile imageSrc={require('../../../assets/images/gym-user.jpg')}
                imageContainerStyle={styles.imageStyle}
                containerStyle={{ alignItems: 'center'}}
                title="GYM USER"
                featured
                >
                </Tile>
                <Button 
                    title="Continue" 
                    buttonStyle={[buttonStyle,{width: 200, alignSelf: 'center'}]} 
                    onPress={() => { navigation.push('SignupAuth')}}    
                />
            </View>
        </ScrollView>
    );
}

const styles = {

    headingStyle: {
        textAlign: 'center', fontSize: 25, 
        fontFamily: 'Roboto', color: "#f8f8ff", marginBottom: 15, marginTop: 10
    },
    touchableHighlightStyle: {
        color: "#00bfff"
    },
    imageStyle: {
        height: 140,
        width: 240,
        borderRadius: 15
    },

};

export default SignupRegPhase2;