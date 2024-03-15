import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { IP } from "../ip.json";

const UpdatingCountry = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = [
    { uri: 'https://content.r9cdn.net/rimg/dimg/22/6e/d852e28f-city-48786-17178de2113.jpg?width=1366&height=768&xhint=2195&yhint=1391&crop=true', country: 'Sousse' },
    { uri: 'https://content.r9cdn.net/rimg/dimg/26/b8/1213a0c2-city-32784-164a49510b9.jpg?crop=true&width=1020&height=498', country: 'Tunis' },
    { uri: 'https://i.ytimg.com/vi/qjqzsjezxUY/maxresdefault.jpg', country: 'Sfax' },
    { uri: 'https://www.aviontourism.com/images/1920-900-fix/32b7e49d-8ff5-4a68-8ffc-d64116a441da', country: 'Hammamet' },
    { uri: 'data:image/jpeg;base64,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', country: 'Jerba' }
  ];

  const handleImagePressIn = async (index) => {
    setHoveredIndex(index);
    setSelectedCountry(countries[index].country);
    Alert.alert(
      'Are you sure?',
      `Do you want to update your country to ${countries[index].country}?`,
      [
        {
          text: 'Cancel',
          onPress: () => setSelectedCountry(''),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => updateCountry(index)
        }
      ],
      { cancelable: false }
    );
  };

  const updateCountry = async (index) => {
    try {
      await axios.put(`http://${IP}:8080/user/editcountry/2`, { country: countries[index].country });
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
  },
  imageContainer: {
    width: 250,
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
