import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Home = ({navigation}) => {
    const styles = StyleSheet.create({
        sk: {
          fontSize: 60,
          borderBottomWidth: 1,
          margin: 20,
          backgroundColor: "",
          marginTop: 190,
          marginLeft: 110,
          marginRight: 120,
          height: 120,
          borderRadius: 0,
          borderWidth: 0
        },
        pass: {
          fontSize: 60,
          borderBottomWidth: 1,
          color: "black",
          margin: 20,
          backgroundColor: "",
          marginTop: 110,
          marginLeft: 110,
          marginRight: 120,
          height: 120,
          borderRadius: 0,
          borderWidth: 0
        },
        botton: {
          alignSelf: "center",
          marginTop: 200,
          marginLeft: 300,
          fontSize: 60,
          border: "solid",
          marginRight: 300,
          borderRadius: 70,
          borderWidth: 2,
          width: 750,
          height: 140,
          textAlign: "center",
          alignItem: "center",
          backgroundColor: "black",
          color: "white",
          padding: 10
        },
        err: {
          border: "solid",
          borderRadius: 50,
          padding: 40,
          marginTop: 70,
          backgroundColor: "#FF2400"
        },
        err2: {
          border: "solid",
          borderRadius: 50,
          padding: 40,
          marginTop: 70,
          backgroundColor: "green"
        },
        error: {
          fontSize: 50
        }
      });
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [errorText, setErrorText] = useState("");
      const [selectedEmail, setSelectedEmail] = useState("sk@gmail.com");
      const [selectedPassword, setSelectedPassword] = useState("sakshi");
      const [col, setCol] = useState(styles.err);
    
      const checkLogin = () => {
        setErrorText("");
        console.log("checkLogin clicked");
        if (password.length === 0) {
          setCol(styles.err);
          setErrorText("Please Enter An Password");
        } else if (email.length === 0) {
          setCol(styles.err);
          setErrorText("Please Enter An Email");
        } else if (password !== selectedPassword) {
          setCol(styles.err);
          setErrorText("Please Enter Correct Password");
        } else if (email !== selectedEmail) {
          setCol(styles.err);
          setErrorText("Please Enter Correct Email ID");
        } else if (password.length && email.length === 0) {
          setErrorText("Please enter email id or password ");
        } else if (password === selectedPassword && email === selectedEmail) {
          setCol(styles.err2);
          setErrorText("login successfully! ");
        } else {
          console.log("Login sucess");
        }
      };
  return (
    <ScrollView>
    <ImageBackground
      source={require("./02.jpg")}
      style={{
        height: 2340
      }}
    >
      <Text
        style={{
          fontSize: 130,
          marginTop: 340,
          marginLeft: 110,
          fontWeight: "bold",
          color: "white",
          fontFamily: "lucida fax"
        }}
      >
        Welcome!
      </Text>
      <Text
        style={{
          fontSize: 130,
          fontFamily: "lucida fax",
          marginTop: 200,
          fontWeight: "bold",
          paddingLeft: 100,
          color: "white"
        }}
      >
        Sign In{" "}
      </Text>
      <View style={{ paddingRight: 50 }}>
        <TextInput
          placeholder=" Email Address"
          onChangeText={setEmail}
          value={email}
          style={styles.sk}
        />
        <TextInput
          placeholder=" Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          style={styles.pass}
        />
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 50,
              alignSelf: "end",
              marginRight: 110,
              marginTop: 20,
              borderRadius: 20,
              textDecorationLine: "Underline"
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {errorText.length > 0 && (
          <View style={col}>
            <Text style={styles.error}>{errorText} </Text>
          </View>
        )}

        <TouchableOpacity onPress={checkLogin}>
          <Text style={styles.botton}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}></View>
    </ImageBackground>
  </ScrollView>
);
}
  

export default HomeScreen;
