import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeVideoScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Home video screen</Text>
        <Button title="Show All"  onPress={() => navigation.navigate('Live Channel')}/>
      </View>
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
  
  export default HomeVideoScreen;