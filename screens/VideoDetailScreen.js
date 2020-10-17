import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const VideoDetailScreen = props => {
    return (
      <View style={styles.container}>
        <Text>video Detail Screen screen</Text>
        
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

  export default VideoDetailScreen;
  