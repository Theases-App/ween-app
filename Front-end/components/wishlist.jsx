import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { IP } from '../ip.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Wishlist = () => {
  const [favs, setFavs] = useState([]);
  const [events, setEvents] = useState([]);

  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchIdFromStorage = async () => {
      try {
        const res = await AsyncStorage.getItem("id");
        console.log("Retrieved id from AsyncStorage:", res);
        setId(res);
      } catch (err) {
        console.log("Error retrieving id from AsyncStorage:", err);
      }
    };
    fetchIdFromStorage();
  }, []);

  useEffect(() => {
    if (id !== null) {
      fetchFavorites();
    }
  }, [id]);

  const fetchFavorites = () => {
    axios.get(`http://${IP}:8080/favorite/${id}`)
      .then((res) => {
        setFavs(res.data);
        fetchFavoredEvents(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmRemoveFav = (eventId) => {
    Alert.alert(
      "Remove from Favorites",
      "Are you sure you want to remove this item from favorites?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => removingFav(eventId),
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  const removingFav = () => {
    axios.delete(`http://${IP}:8080/favorite/${id}`).then((res) => {
      console.log("Removed from favorites");
      fetchFavorites();
    })
    .catch((error) => {
      console.log(error);
    });
  };

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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {favs.map((event, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: event.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.eventName}>{event.eventname}</Text>
              <Text style={styles.eventCategory}>{event.eventcategory}</Text>
            </View>
            <TouchableOpacity onPress={() => confirmRemoveFav(favs[index].id)} style={styles.removeButton}>
              <MaterialCommunityIcons name="heart-broken" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#111111', 
  },
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventName: {
    flex: 1, 
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000', 
  },
  eventCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default Wishlist;
