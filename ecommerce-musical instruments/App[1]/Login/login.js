import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const login= ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("./firstpage.png")}
        style={{
          height: 2340
        }}
      >
        <TouchableOpacity onPress={App}>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 1300,
              marginLeft: 300,
              fontSize: 60,
              border: "solid",
              marginRight: 300,
              borderRadius: 12,
              borderWidth: 10,
              color: "white",
              width: 600,
              textAlign: "center",
              backgroundColor: "gray",
              height: 150,
              paddingTop: 20
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={App}>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 70,
              marginLeft: 300,
              fontSize: 60,
              border: "solid",
              marginRight: 300,
              borderRadius: 12,
              borderWidth: 10,
              color: "white",
              width: 600,
              textAlign: "center",
              backgroundColor: "#EC4D37",
              height: 150,
              paddingTop: 20
            }}
          >
            Sign-up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

export default login;
