import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={inputValue}
        onChangeText={setInputValue}
        multiline 
        numberOfLines={4}
      />
    
      <Text style={styles.output}>You typed:</Text>
      <Text style={styles.inputValue}>{inputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%'
  },
  input: {
    borderWidth: 'none',
    borderColor: '#ccc', 
    borderRadius: 10, 
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9', 
    width: '100%',
    padding: 15, 
  },
  output: {
    fontSize: 18,
    paddingBottom: 20
  },
  inputValue: {
    fontSize: 18,
    backgroundColor: '#E6DAC2', 
    padding: 15,
    borderRadius: 5,
  },
});

export default InputComponent;
