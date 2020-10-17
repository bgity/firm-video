import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LiveChannelScreen = props => {
    return (
      <View style={styles.container}>
        <Text>Live video screen</Text>
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

  export default LiveChannelScreen;
  