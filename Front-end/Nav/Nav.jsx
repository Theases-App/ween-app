import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {  TouchableWithoutFeedback,StyleSheet, View } from 'react-native';

const Nav = () => {

  const [selectedIcon, setSelectedIcon] = useState('home');

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
  };


  const iconStyle = (iconName) => ({
    color: selectedIcon === iconName ? '#ff5252' : 'white',
  });
    return (
      <View
      style={{
        backgroundColor: '#111111',
        flexDirection: 'row',
        gap: 60,
        alignItems: 'center',
        paddingBottom: 40,
        borderRadius: 8,
        width: 600,
        height: 100,
        paddingTop: 20,
        paddingLeft: 15,
      }}
    >
     

      <TouchableWithoutFeedback onPress={() => handleIconPress('heart')}>
        <Icon name="heart" style={iconStyle('heart')} size={30} />
      </TouchableWithoutFeedback>

      

    

      <TouchableWithoutFeedback onPress={() => handleIconPress('star')}>
        <Icon name="star" style={iconStyle('star')} size={30} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleIconPress('home')}>
        <Icon name="home" style={iconStyle('home')} size={30} />
      </TouchableWithoutFeedback>
      
      <TouchableWithoutFeedback onPress={() => handleIconPress('bell')}>
        <Icon name="bell" style={iconStyle('bell')} size={30} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleIconPress('user')}>
        <Icon name="user" style={iconStyle('user')} size={30} />
      </TouchableWithoutFeedback>
    </View>


   );
  };


    

export default Nav;