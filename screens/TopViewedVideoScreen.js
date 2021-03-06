import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopViewedVideoScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Top viewed video screen</Text>
    </View>
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

export default TopViewedVideoScreen;
