import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { IP } from '../ip.json';

const Wishlist = () => {
  const [favs, setFavs] = useState([]);
  const [iduser, setIdUser] = useState(null); 
  const [events, setEvents] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("id")
      .then((id) => {
        setIdUser(id); 
      })
      .catch((error) => console.error("Error retrieving user ID:", error));
  }, []);

  useEffect(() => {
    if (iduser) {
      axios.get(`http://${IP}:8080/favorite/${iduser}`)
        .then((res) => {
          setFavs(res.data);
        
          fetchFavoredEvents(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [iduser]);

  const fetchFavoredEvents = (favorites) => {
    
    const eventIds = favorites.map((fav) => fav.event_idevent);
   
    axios.get(`http://${IP}:8080/event/getall`, {
      params: {
        idevent: eventIds.join(',')
      }
    })
    .then((res) => {
      setEvents(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <View style={styles.container}>
      {events.map((event, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.eventName}>{event.eventname}</Text>
          <Text style={styles.eventCategory}>{event.eventcategory}</Text>
          <Image source={{ uri: event.image }} style={styles.image} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0', 
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default Wishlist;
