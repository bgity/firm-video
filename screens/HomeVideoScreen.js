import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from '../component/Carousel';
import CategoriesFlatList from '../component/CategoriesFlatList';
import { dummyData } from '../data/Data';

const HomeVideoScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel data={dummyData} />
        <CategoriesFlatList />
        <CategoriesFlatList />
        <CategoriesFlatList />
        <CategoriesFlatList />
        {/*  <Text>Home video screen</Text>
      <Button title="Show All"  onPress={() => navigation.navigate('Live Channel')}/>  */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeVideoScreen;
