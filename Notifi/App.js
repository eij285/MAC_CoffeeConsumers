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
  Day1, Day1Route1,
  Day2,
  Day3,
  Day4,
  Day5,
  Day6,
  Day7,
  Day8,
  Day9,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14


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

/*
screenOptions={({route}) => ({
  tabBarIcon: ({color}) => screenOptions(route, color),
  })}
*/




const DaysList = () => (
  <Stack.Navigator headerMode="none" >
    <Stack.Screen name="Routes" component={Routes} />

    <Stack.Screen name="Day1" component={Day1} />

    <Stack.Screen name="Day1Route1" component={Day1Route1} />

    <Stack.Screen name="Day2" component={Day2} />
    <Stack.Screen name="Day3" component={Day3} />
    <Stack.Screen name="Day4" component={Day4} />
    <Stack.Screen name="Day5" component={Day5} />
    <Stack.Screen name="Day6" component={Day6} />
    <Stack.Screen name="Day7" component={Day7} />
    <Stack.Screen name="Day8" component={Day8} />
    <Stack.Screen name="Day9" component={Day9} />
    <Stack.Screen name="Day10" component={Day10} />
    <Stack.Screen name="Day11" component={Day11} />
    <Stack.Screen name="Day12" component={Day12} />
    <Stack.Screen name="Day13" component={Day13} />
    <Stack.Screen name="Day14" component={Day14} />




  </Stack.Navigator>
);



export default () => (
  <NavigationContainer>
    <IntroPage />
  </NavigationContainer>
);






/*
<Stack.Navigator>
<Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ title: "Loading Screen"}} />
<Stack.Screen name="SignUp" component={SignUp} />
<Stack.Screen name="MainPage" component={MainPage} />
</Stack.Navigator>
*/

/*
<Tabs.Navigator>
<Tabs.Screen name="LoadingScreen" component={LoadingScreen} />
<Tabs.Screen name="SignUp" component={SignUp} />
<Tabs.Screen name="MainPage" component={MainPage} />
</Tabs.Navigator>
*/
/*



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
*/




