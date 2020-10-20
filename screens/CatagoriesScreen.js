import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
const CatagoriesScreen = () => {
  return (
    <View style={styles.content}>
      <Button
        mode='contained'
        onPress={() => navigation.push('Catagories Screen')}
        style={styles.button}
      >
        Push new screen
      </Button>
      <Button
        mode='outlined'
        onPress={() => navigation.pop()}
        style={styles.button}
      >
        Go back
      </Button>
    </View>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({
  button: {
    margin: 8,
  },
  content: {
    flex: 1,
    padding: 8,
  },
});
