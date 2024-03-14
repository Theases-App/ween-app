import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IP } from '../ip.json';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const EventCntry = ({ route }) => {
  const { countryName } = route.params;
  const [events, setEvents] = useState([]);
    console.log(countryName);
  useEffect(() => {
    axios.get(`http://${IP}:8080/event/getall//${countryName}`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryName]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{countryName}</Text>
      <ScrollView>
        {events.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <Image source={{ uri:event.image }} style={styles.image} />
            <Text style={styles.eventname}>{event.eventname}</Text>
            <Text style={styles.eventcategory}>{event.eventcategory}</Text>
            <Text style={styles.eventlocation}>{event.location}</Text>
            <Icon name="map-marker" style={styles.iconstyle} />
          </View>
        ))}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  title: {
    color: '#ff5252',
      fontFamily:'sans-serif-light',
      fontSize: 40,
      marginLeft:"35%",
      marginBottom:"2%"
  },
  eventContainer: {
    position: 'relative',
    marginBottom:"2%"
  },
  eventname: {

    position: 'absolute',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:"27%" ,
    marginLeft:"2%",
    color: '#ececec',
    fontFamily:'sans-serif-light',
  },
  eventcategory: {
    position: 'absolute',
    fontSize: 16,
    color: '#ececec',
    marginTop:"35%" ,
    marginLeft:"2%",
    
  },
  eventlocation:{
    position: 'absolute',
    fontSize: 14,
    color: '#ececec',
    marginTop:"44%" ,
    marginLeft:"6%",
    fontWeight: 'sans-serif-light',
  },
  image:{
    width: "full",
    height: 200,
  },
  iconstyle:{
    position: 'absolute',
    marginTop:"43%" ,
    marginLeft:"1%",
    fontSize:20,
    color:'#FFC93C',
  }
});

export default EventCntry;
