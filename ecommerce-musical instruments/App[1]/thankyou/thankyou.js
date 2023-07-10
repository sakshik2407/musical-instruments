import React from 'react';
import { Text, View } from 'react-native';

const thankyou = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "", justifyContent: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./shopping-bag.png")}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: "",
            marginBottom: 20
          }}
        >
          Order Confirmed!
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "",
            marginBottom: 10,
            fontWeight: "bold"
          }}
        >
          Thank you...!
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: 200,
            height: 50,
            borderRadius: 25,
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => console.log("Continue Shopping clicked")}
        >
          <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default thankyou;
