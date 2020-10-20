import * as React from 'react';
import { Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import CatagoriesScreen from '../screens/CatagoriesScreen';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['1deg', '0deg'],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
const CategoriesStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      headerMode='float'
      screenOptions={{
        cardOverlayEnabled: true,
        gestureEnabled: true,
        ...MyTransition,
      }}
    >
      <Stack.Screen
        name='Catagories Screen'
        component={CatagoriesScreen}
        options={{
          title: 'Custom animation',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 65,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default CategoriesStackScreen;
