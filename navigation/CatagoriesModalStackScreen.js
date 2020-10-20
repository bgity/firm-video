import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CatagoriesModalScreen from '../screens/CatagoriesModalScreen';
const Stack = createStackNavigator();
const CatagoriesModalStackScreen = ({ state, navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        mode: 'modal',
        headerMode: 'none',
        cardStyle: {
          backgroundColor: 'black',
          opacity: 0.8,
        },
      }}
    >
      <Stack.Screen
        name='CatagoriesModal'
        component={CatagoriesModalScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CatagoriesModalStackScreen;
