import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa os ícones

const data = [
  { id: '1', title: 'Music for Deep Meditation', duration: '30:00' },
  { id: '2', title: 'Relaxing Nature Sounds', duration: '45:00' },
  { id: '3', title: 'Calm Piano Melodies', duration: '60:00' },
  { id: '4', title: 'Guided Meditation', duration: '20:00' },
  { id: '5', title: 'Soothing Ambient Music', duration: '50:00' },
];

const DataListComponent = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.duration}>Duration: {item.duration}</Text>
          <Icon name="play" size={24} color="#FFADB9" style={styles.playButton} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    flex: 1, 
    fontSize: 16,
  },
  duration: {
    marginRight: 10,
    color: '#777',
  },
  playButton: {
    marginLeft: 10, 
  },
});

export default DataListComponent;
