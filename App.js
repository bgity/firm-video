import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

/* import HomeStackVideoScreen from './navigation/HomeStackVideoScreen';
import LiveStackChannelScreen from './navigation/LiveStackChannelScreen';
import TopStackViewedVideoScreen from './navigation/TopStackViewedVideoScreen';
import VideoStackDetailScreen from './navigation/VideoStackDetailScreen';  */
import LiveStackChannelScreen from './navigation/LiveStackChannelScreen';
import VideoStackDetailScreen from './navigation/VideoStackDetailScreen';
import TabNavigator from './navigation/TabNavigator';
import { DrawerContent } from './navigation/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='HomeDrawer' component={TabNavigator} />
        <Drawer.Screen name='SupportScreen' component={SupportScreen} />
        <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
        <Drawer.Screen name='VideoDetails' component={VideoStackDetailScreen} />
        {/*  <Drawer.Screen name="Live Channel" component={LiveStackChannelScreen} /> */}
        {/* <Drawer.Screen name="TopViewedVideo" component={TopStackViewedVideoScreen}/>
        <Drawer.Screen name="VideoDetails" component={VideoStackDetailScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
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
