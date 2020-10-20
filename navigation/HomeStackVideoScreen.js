import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeVideoScreen from '../screens/HomeVideoScreen';
import LiveChannelScreen from '../screens/LiveChannelScreen';
import TopViewedVideoScreen from '../screens/TopViewedVideoScreen';
import VideoDetailScreen from '../screens/VideoDetailScreen';

const Stack = createStackNavigator();

const HomeStackVideoScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: '#4630eb' } }}
    >
      <Stack.Screen
        name='Home'
        component={HomeVideoScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='#4630eb'
              marginLeft={10}
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
          title: 'TCS VIDEO',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 65,
          },
        }}
      />
      {/*  <Stack.Screen name="Live Channel" component={LiveChannelScreen} />
        <Stack.Screen name="TopViewedVideo" component={TopViewedVideoScreen} />
        <Stack.Screen name="VideoDetails" component={VideoDetailScreen} /> */}
    </Stack.Navigator>
  );
};
export default HomeStackVideoScreen;
