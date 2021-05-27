import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import { colors, ThemeProvider } from 'react-native-elements';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import useLinking from './navigation/useLinking';
import AuthStackNavigator from './navigation/StackNavigator';
import firebase from "firebase";


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  //Firebase Config
  var config = {
    apiKey: "AIzaSyADMIVkRVub-JmfE4wR50bu11_ohfLVpIk",
    authDomain: "mytrainer-testapp.firebaseapp.com",
    projectId: "mytrainer-testapp",
    storageBucket: "mytrainer-testapp.appspot.com",
    messagingSenderId: "998250210107",
    appId: "1:998250210107:web:dd4c912ab5169e91004d1e",
    measurementId: "G-57NY15FYY4"
  };

  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


  
  firebase.analytics();

  const themeObj = {
    colors: {
      ...Platform.select({
        default: colors.platform.android,
        ios: colors.platform.ios
      })
    }
  };
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // // Load fonts
        // await Font.loadAsync({
        //   ...Ionicons.font,
        //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        // });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  

//screen name was Root.       
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {

    return (
      <ThemeProvider theme={themeObj}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <AuthStackNavigator />
          </NavigationContainer>
        </View>
      </ThemeProvider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
