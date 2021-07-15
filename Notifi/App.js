import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlatButton from './Screens';
//import MapView from 'react-native-maps';




import { LoadingScreen, SignUp, MapPage, Routes, Alerts, addressScreen,
   Day1Route1,
} from "./Screens";



const Stack = createStackNavigator();

const IntroPage = () => (
  <Stack.Navigator headerMode="none" >
    <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="addressScreen" component={addressScreen} />
    <Stack.Screen name="MainPage" component={MainPageTabs} />
  </Stack.Navigator>
);

const Tabs = createMaterialBottomTabNavigator();

const MainPageTabs = () => (
  <Tabs.Navigator  
    
    
    screenOptions={({route}) => ({
    tabBarIcon: ({color}) => screenOptions(route, color),
    })}
  
  >
    <Tabs.Screen name="Map" component={MapPage} />
    <Tabs.Screen name="DaysList" component={DaysList} options={{ title: "Past Trips" }}/>
    {/* <Tabs.Screen name="Alerts" component={Alerts} /> */}
  </Tabs.Navigator>
); 







const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Map':
      iconName = 'enviroment';
      break;
    case 'DaysList':
      iconName = 'calendar';
      break;
    case 'Alerts':
      iconName = 'flag';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};





const DaysList = () => (
  <Stack.Navigator headerMode="none" >
    <Stack.Screen name="Routes" component={Routes} />

    <Stack.Screen name="Day1Route1" component={Day1Route1} />

  </Stack.Navigator>
);



export default () => (
  <NavigationContainer>
    <IntroPage />
  </NavigationContainer>
);





