import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IP } from "../ip.json"
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EventCntry from './EventCntry';

const IndexC = () => {
  const navigation = useNavigation()

  const countries = [
    { name: 'Sousse', imageUrl: 'https://strongcitiesnetwork.org/wp-content/uploads/2023/10/R-4.jpg' },
    { name: 'Tunis', imageUrl: 'https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2016/11/tunis-centre-ville-indic.jpg' },
    { name: 'Hammamet', imageUrl: 'https://res.cloudinary.com/lastminute-contenthub/s--Qnsk6FIG--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Africa/Tunisia/Hammamet/hammamet_shutterstock_1328602211' },
    { name: 'Djerba', imageUrl: 'https://www.forbes.fr/wp-content/uploads/2023/01/dar-oomi-vue-magique-de-lun-des-roof-tops.jpg' },
    { name: 'Sfax', imageUrl: 'https://yaluna.tn/wp-content/uploads/2023/03/Good-News-Template-74-scaled.jpg' }
  ];

  return (
    <View style={{ backgroundColor: "#111111" }}>
      <View style={{ position: '-webkit-sticky', position: 'sticky', top: 0, marginTop: 60, left: 110 }}>
        <Text style={styles.title}> Countries</Text>
      </View>
      <ScrollView>
        <View style={{ justifyContent: 'space-between', gap: 10, marginTop: '5%',marginBottom:"25%" }}>
          {countries.map((country, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate("EventCntry", { countryName: country.name })}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: country.imageUrl }} />
                <Text style={styles.imageText}>{country.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  title:{
      color: '#ff5252',
      fontFamily:'sans-serif-light',
      fontSize: 40,
  },
  image:{
    marginLeft:5,
      width: 403,
      height: 170,
      borderRadius:10
  },
  imageContainer: {
      position: 'relative',
    },
  imageText: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: '#ececec',
      fontSize: 25,
      fontfamily: "sans-serif-light",
  },
})

export default IndexC;
