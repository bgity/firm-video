import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
{
  /* <View style={styles.container}>
        <Video
        source={{
          uri:
            'https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile_id=119&oauth2_token_id=57447761',
        }}
      /> 
    </View> */
}
const VideoDetailScreen = (props) => {
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});

export default VideoDetailScreen;
