import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import { colors, ThemeProvider } from 'react-native-elements';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup";

import useLinking from './navigation/useLinking';
import AuthStackNavigator from './navigation/StackNavigator';

const Stack = createStackNavigator();
//const INITIAL_ROUTE_NAME = "Au"

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

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
