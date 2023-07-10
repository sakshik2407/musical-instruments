import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="cart" component={cart} />
        <Stack.Screen name="signin" component={signin} />
        <Stack.Screen name="Second" component={thankyou} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;