import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP } from '../ip.json';

const UpdatingCountry = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('id')
      .then(id => {
        setUserId(id);
      })
      .catch(error => console.error('Error retrieving user ID:', error));
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    {
      uri:
        'https://content.r9cdn.net/rimg/dimg/22/6e/d852e28f-city-48786-17178de2113.jpg?width=1366&height=768&xhint=2195&yhint=1391&crop=true',
      country: 'Sousse',
    },
    {
      uri: 'https://content.r9cdn.net/rimg/dimg/26/b8/1213a0c2-city-32784-164a49510b9.jpg?crop=true&width=1020&height=498',
      country: 'Tunis',
    },
    { uri: 'https://i.ytimg.com/vi/qjqzsjezxUY/maxresdefault.jpg', country: 'Sfax' },
    { uri: 'https://www.aviontourism.com/images/1920-900-fix/32b7e49d-8ff5-4a68-8ffc-d64116a441da', country: 'Hammamet' },
    { uri: 'https://media.istockphoto.com/id/1148208298/photo/tunisia-djerba-guellala.jpg?s=612x612&w=0&k=20&c=5folmhYLTWqtVCDowe_LopPN0bzOg0Gg8o3B6gJZR88=', country: 'Jerba' },
  ];

  const handleImagePressIn = async index => {
    setHoveredIndex(index);
    setSelectedCountry(countries[index].country);
    Alert.alert(
      'Are you sure?',
      `Do you want to update your country to ${countries[index].country}?`,
      [
        {
          text: 'Cancel',
          onPress: () => setSelectedCountry(''),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => updateCountry(index),
        },
      ],
      { cancelable: false }
    );
  };

  const updateCountry = async index => {
    try {
      await axios.put(`http://${IP}:8080/user/editcountry/${iduser}`, { country: countries[index].country });
      console.log('Country updated successfully!');
    } catch (error) {
      console.error('Error updating country:', error);
    }
  };

  const handleImagePressOut = () => {
    setHoveredIndex(null);
    setSelectedCountry('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {countries.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPressIn={() => handleImagePressIn(index)}
            onPressOut={handleImagePressOut}
          >
            <View style={[styles.imageContainer, hoveredIndex === index && styles.hoveredImageContainer]}>
              <Image source={{ uri: item.uri }} style={styles.image} />
              <Text style={styles.country}>{item.country}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: "#111111",
  },
  imageContainer: {
    width: 390,
    height: 200,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  hoveredImageContainer: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  country: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: 5,
  },
});

export default UpdatingCountry;
