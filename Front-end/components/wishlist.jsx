import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { IP } from '../ip.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Nav from '../Nav/Nav';

const Wishlist = () => {
  const [favs, setFavs] = useState([]);
  const [events, setEvents] = useState([]);

  const [id, setId] = useState(null);
const[eventid,setEventId]=useState(0)
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
    console.log('favvs',favs);
  }, [id]);

  const fetchFavorites = () => {
    
    axios.get(`http://${IP}:8080/favorite/${id}`)
      .then((res) => {
        console.log(id);
        setFavs(res.data);
        fetchFavoredEvents(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmRemoveFav = (idevent) => {
    setEventId(idevent)
    Alert.alert(
      "Remove from Favorites",
      "Are you sure you want to remove this activity from favorites?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => removingFav(idevent),
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  const removingFav = (id) => {
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
  <View style={{backgroundColor:"#2E2D29",flex:1}}>
    <ScrollView style={styles.scrollView}>
      <Text style={{color:"#ff5252",marginTop:70,marginLeft:160,fontSize:30}}>Favorite</Text>
      <View style={{marginTop:10}}>
      <View style={styles.container}>
        {favs.map((event, index) => (
          
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: event.event.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.eventName}>{event.event.eventname}</Text>
              <Text style={styles.eventCategory}>{event.event.eventcategory}</Text>
            </View>
            <TouchableOpacity onPress={() => confirmRemoveFav(event.event.idevent)} style={styles.removeButton}>
              <MaterialCommunityIcons name="heart-broken" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      </View>
    </ScrollView>
    <View >
      <Nav/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#2E2D29', 
    
  },
  container: {
    marginTop:20,
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
