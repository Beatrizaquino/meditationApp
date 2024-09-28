import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DataListComponent from '../components/DataListComponent'; 

const PlaylistScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditation Playlist</Text>
      <DataListComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#CF9B88'
  },
});

export default PlaylistScreen;
