import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const WithNavigator = () => (
  <NavigationNativeContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={(props) => (
        <View style={[styles.container, { backgroundColor: '#11FFFF'}]}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Button title="Go To Dashboard" onPress={() => props.navigation.navigate('Dashboard')} />
        </View>
      )} />
       <Stack.Screen name="Dashboard" component={() => (
        <View style={[styles.container, { backgroundColor: '#FF11FF' }]}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      )} />
    </Stack.Navigator>
  </NavigationNativeContainer>
)

const WithoutNavigator = () => (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
  </View>
)

export default function App() {
  return (
    <Provider store={store}>
      {/* <WithoutNavigator /> */}
      <WithNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
