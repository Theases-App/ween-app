
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import { IP } from '../ip.json';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Allcategory() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    axios.get(`http://${IP}:8080/event/getall`)
      .then((res) => {
        setEvents(res.data);
        setFilteredEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (text) => {
    const searchTerm = text.toLowerCase();
    const filtered = events.filter((event) =>
      event.eventname.toLowerCase().includes(searchTerm)
    );
    setFilteredEvents(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={{
            flex: 1,
            height: 45,
            borderRadius: 20,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 8,
            paddingRight: 50,
            color: 'white',
            width: 80,
            
          
          }}
          placeholder="Event name"
          placeholderTextColor="#CCCCCC" 
          onChangeText={handleSearch}
        />
        <Icon name="search" style={{ color: 'white', paddingLeft: 20 }} size={30} />
      </View>
      {filteredEvents.map((event) => (
        <View key={event.id} style={styles.eventContainer}>
          <Image source={{ uri: event.image }} style={styles.circularImage} />
           <Text style={styles.text}>{event.eventname} </Text> 
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E2D29",
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  circularImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default Allcategory;
