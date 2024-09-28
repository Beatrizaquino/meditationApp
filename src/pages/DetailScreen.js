import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import InputComponent from '../components/InputComponent';

const DetailScreen = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.Text}>Write what you are feeling...</Text>
        <Image source={require('../assets/image2.png')} style={styles.image} />
        <InputComponent />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4E7E9', 

  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  Text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
});

export default DetailScreen;
