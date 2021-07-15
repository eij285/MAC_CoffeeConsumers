import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity, Dimensions, FlatList } from "react-native";
import Geocoder from 'react-native-geocoder';
import { set } from "react-native-reanimated";
import geocoder from "react-native-geocoder/js/geocoder";


const axios = require('axios').default;



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
  },
  registerTextStyle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);



export const LoadingScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => { navigation.push("SignUp"); }, 2000);
  }, []);

  return (
    <ScreenContainer>
      <Image source={require('./Notifi_Icon.jpg')} />
      <Image source={require('./Notifi_Logo.jpg')} />
    </ScreenContainer>
  );
};

  
export const SignUp = ({ navigation }) => {



  const [name, setName] = React.useState('');

  console.log(name)

  return (
    <ScreenContainer>
      <View style={[styles.container, {
        flexDirection: "column",
        alignItems: 'flex-start'
      }]}>
        <View>
          <Text style={styles.registerTextStyle}>Hello there,</Text>
          <Text style={styles.registerTextStyle}>what's your name?</Text>
          <TextInput
            style={{height: 40, fontSize: 18}}
            placeholder="Tap to start typing"
            onChangeText={ text => setName(text) }


            onSubmitEditing={() => {
              // alert(`Your name is: ${name}`)

              navigation.navigate('addressScreen', {
                    name: name,
                  });
            }}
            
          />
        </View>

        {/* <View>
          <Text>Response data '{responseData.text1} + {responseData.text2}'</Text>
        </View> */}

          <View>
          {/* <Button 
              title="Continue" 
              onPress={() => navigation.push("MainPage")} 
          /> */}
        </View>
      </View>  

    </ScreenContainer>
  );
};


export const addressScreen = ({ route, navigation }) => {
  const { name } = route.params;

  const registerInData = (dataName) => {
    
    data = {
      name: dataName,
      lat: -33.8352145,
      lon: 151.0581797,
    }

    console.log('use Effect wiughseoiru')
    // Giving data
    fetch('http://192.168.0.10:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <ScreenContainer>
        <View style={{paddingVertical: 10}}>
          <Text style={styles.registerTextStyle}>Hi { name },</Text>
          <Text style={styles.registerTextStyle}>what's your address?</Text>
          <TextInput
            style={{height: 40, fontSize: 18}}
            placeholder="Tap to start typing"
            onSubmitEditing={() => {
              registerInData(name);
              navigation.push("MainPage")
            }}



          />
        </View>
    </ScreenContainer>
  );
};


export const MapPage = ({ navigation }) => {

  return (
    <ScreenContainer>
      <Text>Map Page</Text>
      <View style={mapStyles.container}>
        <MapView 
          style={mapStyles.map}
          initialRegion={{
            latitude: -33.865143,
            longitude: 151.209900,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          provider={"google"}
          mapPadding={{top:0, right:0, left:0, bottom:50}}
        >


          <Marker 
            coordinate={{ latitude: -33.8332929, longitude: 151.0571947 }} 
          >
            <Callout>
              <View>
                <Text>
                  Venue: Newington Marketplace 
                  {"\n"}
                  Address: 1 Ave of Europe, Newington
                  {"\n"}
                  Date: Monday 12 July 2021
                  {"\n"}
                  Time: 12pm to 12:30pm
                  {"\n"}
                  Alert: Get tested immediately. 
                  {"\n"}
                  Self-isolate until you get a negative result.
                </Text>
              </View>
            </Callout>
          </Marker>



        </MapView>
      </View>


    </ScreenContainer>
  );
};


const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});


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

  // const [routeData, setRouteData] = useState([]);
  // const data = {
  //   u_id: 0
  // }

  const [routeData, setRouteData] = useState([])

  useEffect(() => {
    fetch('http://192.168.0.10:3000/routes/display', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { u_id: 0 } // hard-coded
      )
    })
    .then(resp => resp.json())
    .then(newData => {
      setRouteData(newData)
    })
  }, []);

  // Simulation of travelling
  const simulate = () => {
    console.log('simulation started')

    const lats = [-33.8352145, -33.8352207, -33.8335497, -33.8340637, -33.8346338, -33.8352145];
    const lons = [151.0581797, 151.0575254, 151.0570188, 151.0552415, 151.0569567, 151.0581797];

    for (let i = 0; i < 6; i++) {
      const data = {
        u_id: 0,
        lat: lats[i],
        lon: lons[i]
      }

      fetch('http://192.168.0.10:3000/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
  }

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 200}}>
        <Text style={EmptyFLStyles.textStyle}>No routes to show.</Text>
        <Button
          title="Simulate"
          onPress={() => simulate()}
        />
      </View>
    )
  };

  const renderItem = ({item}) => {

    return (
      <TouchableOpacity>
        <View style={{paddingVertical: 20, marginBottom: 20, paddingHorizontal: 20, backgroundColor: '#C4C4C4', borderRadius: 12}}>
          <Image
            style={{height: 220, marginBottom: 10}}
            source={require('./route_icon.png')}/>
          
          <Text style={FLItemsStyles.textStyle}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScreenContainer>
      <View>
        <Text style={FLItemsStyles.title}>Your journeys</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data = {routeData}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.key)}
          ListEmptyComponent={ListEmptyComponent}/>
      </View>
    </ScreenContainer>
  );
};

const EmptyFLStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textStyle: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
  }
})

const FLItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'left',
    marginTop: 40,
    marginBottom: 20
  },
  textStyle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 18,
    textAlign: 'right',
    paddingVertical: 10
  }
});



export const Day1Route1 = () => {
  return (
    <ScreenContainer>
      <View style={{paddingVertical: 10}}>
          <Image source={require('./route_icon.png')}/>
          <Text></Text>
        </View>
    </ScreenContainer>
  );
};



