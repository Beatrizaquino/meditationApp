import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image source={require('../assets/image1.png')} style={styles.image} />

      <Text style={styles.welcomeText}>
        <Text style={styles.boldText}>Welcome To, </Text>
        {'\n'}
        <Text style={styles.lightText}>Meditation App</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <CustomButton iconName="music" onPress={() => navigation.navigate('Playlist')} />
        <CustomButton iconName="info" onPress={() => navigation.navigate('Detail')} />
        <CustomButton iconName="cog" onPress={() => navigation.navigate('Settings')} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4E7E9', 
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
  boldText: {
    fontWeight: 'bold',
  },
  lightText: {
    fontWeight: '300',
    fontSize: 38
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    width: '100%', 
  },
});

export default HomeScreen;
