import React from 'react';
import { StyleSheet, View, SafeAreaView  } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackVideoScreen from './HomeStackVideoScreen';
import LiveStackChannelScreen from './LiveStackChannelScreen';
import TopStackViewedVideoScreen from './TopStackViewedVideoScreen';
import VideoStackDetailScreen from './VideoStackDetailScreen';

//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
       tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
       
        labelStyle: {
          fontSize: 12,
          fontWeight: '700',
          padding:10
        },
        tabStyle:{
          backgroundColor: '#4630eb',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }} 
    >
      <Tab.Screen
        name="Home"
        component={HomeStackVideoScreen}
        options={{
          tabBarLabel: 'HOME',
         /*   tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ), */
         /*  HomeTab: {
            screen: HomeStack,
            navigationOptions: {
              tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, {color: tintColor}]}>
                  Home
                </Text>
              ),
              tabBarIcon: ({ tintColor }) => (
                <Icon
                  name='home-tab'
                  size={21}
                  color={tintColor}
                />
              )
            },
          }, */
        }}
      />
      <Tab.Screen
        name="Live Channel"
        component={LiveStackChannelScreen}
        options={{
          tabBarLabel: 'LIVE',
          /*  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ), */
        }}
      />
      <Tab.Screen
         name="VideoDetails"
        component={VideoStackDetailScreen}
        options={{
          tabBarLabel: 'CATEGORIES',
          labelStyle: {
           marginLeft:20
          },
          /* tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ) */
        }}
      />
       <Tab.Screen
      
        name="TopViewedVideo"
        component={TopStackViewedVideoScreen}
        options={{
          tabBarLabel: 'TOP VIEWED',
          /*  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ), */
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;