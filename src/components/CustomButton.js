import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const CustomButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CF9B88',
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    margin:20
  },
});

export default CustomButton;
