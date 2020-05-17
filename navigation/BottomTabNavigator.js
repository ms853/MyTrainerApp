/*
  https://react-native-elements.github.io/react-native-elements/docs/header.html
*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../src/components/TabBarIcon';
import HomeScreen from '../src/screens/Main/HomeScreen';
import ProfileScreen from '../src/screens/Main/ProfileScreen';
import SettingsScreen from '../src/screens/Main/SettingsScreen';
import ProgressScreen from "../src/screens/Main/ProgressScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
     headerTitle: getHeaderTitle(route),
    });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
       <BottomTab.Screen name="Profile" component={ProfileScreen} options={{
        title: 'Profile',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="profile" />
      }}/>
      
       <BottomTab.Screen name="Progress" component={ProgressScreen} options={{
        title: 'Progress', tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="flag" />
      }} />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}  
        options={{ 
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="setting" />,
        }}
      />
     
      </BottomTab.Navigator>
    
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Settings':
      return 'App Settings';
    case 'Profile':
      return 'My Profile';
    case 'Progress':
      return 'My Progress';
  }
}
