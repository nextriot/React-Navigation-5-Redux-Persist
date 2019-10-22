import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const WithNavigator = () => (
  <NavigationNativeContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={() => <Text>Open up App.tsx to start working on your app!</Text>} />
    </Stack.Navigator>
  </NavigationNativeContainer>
)

const WithoutNavigator = () => (
  <Text>Open up App.tsx to start working on your app!</Text>
)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <WithoutNavigator />
        {/* <WithNavigator /> */}
      </View>
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
