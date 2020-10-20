import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

const CatagoriesModalScreen = ({ state, navigation }) => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
    >
      <View
        style={{
          height: '90%',
          width: '90%',
          backgroundColor: '#fff',
          justifyContent: 'center',
          marginBottom: 50,
          marginTop: 70,
          marginLeft: 20,
          borderRadius: 10,
        }}
      >
        <Text>Testing a modal with transparent background</Text>
        <Button onPress={() => navigation.goBack()} title='Dismiss' />
      </View>
    </View>
  );
};

export default CatagoriesModalScreen;
