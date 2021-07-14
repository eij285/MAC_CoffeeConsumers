import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";


//<Image source={require('./Notifi_Icon.jpg')} />
//<Image source={require('./Notifi_Logo.jpg')} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);



export const LoadingScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Image source={require('./Notifi_Icon.jpg')} />
      <Image source={require('./Notifi_Logo.jpg')} />
      <Button 
        title="Sign Up" 
        onPress={() => navigation.push("SignUp")} 
      />
    </ScreenContainer>
  );
};
  
export const SignUp = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Hello there,</Text>
      <Button 
        title="Continue" 
        onPress={() => navigation.push("MainPage")} 
      />

    </ScreenContainer>
  );
};

export const MapPage = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Map Page</Text>


    </ScreenContainer>
  );
};



export const Alerts = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Alerts</Text>


    </ScreenContainer>
  );
};



export default function FlatButton( { text, onPress } ) {
  return (
    <TouchableOpacity onPress={onPress}>

      <View style={buttonStyles.button}>
        <Text style={buttonStyles.buttonText}>{ text }</Text>
      </View>

    </TouchableOpacity>
  )
}


const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    
    backgroundColor: '#f01d71'
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }

})














export const Routes = ({ navigation }) => {
  return (
    <ScreenContainer>
      

      <FlatButton text="Day 1" onPress={() => navigation.push("Day1")} />

      <FlatButton text="Day 2" onPress={() => navigation.push("Day2")} />

      <FlatButton text="Day 3" onPress={() => navigation.push("Day3")} />

      <FlatButton text="Day 4" onPress={() => navigation.push("Day4")} />

      <FlatButton text="Day 5" onPress={() => navigation.push("Day5")} />
      
      <FlatButton text="Day 6" onPress={() => navigation.push("Day6")} />

      <FlatButton text="Day 7" onPress={() => navigation.push("Day7")} />

      <FlatButton text="Day 8" onPress={() => navigation.push("Day8")} />

      <FlatButton text="Day 9" onPress={() => navigation.push("Day9")} />

      <FlatButton text="Day 10" onPress={() => navigation.push("Day10")} />

      <FlatButton text="Day 11" onPress={() => navigation.push("Day11")} />

      <FlatButton text="Day 12" onPress={() => navigation.push("Day12")} />

      <FlatButton text="Day 13" onPress={() => navigation.push("Day13")} />

      <FlatButton text="Day 14" onPress={() => navigation.push("Day14")} />
      

    </ScreenContainer>
  );
};
































export const Day1 = () => {
  return (
    <ScreenContainer>
      <Text>Day 1</Text>
    </ScreenContainer>
  );
};

export const Day2 = () => {
  return (
    <ScreenContainer>
      <Text>Day 2</Text>
    </ScreenContainer>
  );
};

export const Day3 = () => {
  return (
    <ScreenContainer>
      <Text>Day 3</Text>
    </ScreenContainer>
  );
};

export const Day4 = () => {
  return (
    <ScreenContainer>
      <Text>Day 4</Text>
    </ScreenContainer>
  );
};

export const Day5 = () => {
  return (
    <ScreenContainer>
      <Text>Day 5</Text>
    </ScreenContainer>
  );
};
export const Day6 = () => {
  return (
    <ScreenContainer>
      <Text>Day 6</Text>
    </ScreenContainer>
  );
};
export const Day7 = () => {
  return (
    <ScreenContainer>
      <Text>Day 7</Text>
    </ScreenContainer>
  );
};
export const Day8 = () => {
  return (
    <ScreenContainer>
      <Text>Day 8</Text>
    </ScreenContainer>
  );
};
export const Day9 = () => {
  return (
    <ScreenContainer>
      <Text>Day 9</Text>
    </ScreenContainer>
  );
};
export const Day10 = () => {
  return (
    <ScreenContainer>
      <Text>Day 10</Text>
    </ScreenContainer>
  );
};
export const Day11 = () => {
  return (
    <ScreenContainer>
      <Text>Day 11</Text>
    </ScreenContainer>
  );
};
export const Day12 = () => {
  return (
    <ScreenContainer>
      <Text>Day 12</Text>
    </ScreenContainer>
  );
};
export const Day13 = () => {
  return (
    <ScreenContainer>
      <Text>Day 13</Text>
    </ScreenContainer>
  );
};
export const Day14 = () => {
  return (
    <ScreenContainer>
      <Text>Day 14</Text>
    </ScreenContainer>
  );
};






export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>

  </ScreenContainer>
);


export const Profile = ({ navigation }) => {

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>

    </ScreenContainer>
  );
};

/*


export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example " })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "React Native School" }
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

*/