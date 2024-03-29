import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { IP } from '../ip.json';
import Nav from '../Nav/Nav';
const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    if (notifications.length > 0) {
      fetchEvents(notifications.map(notification => notification.idevent).join(','));
    }
  }, [notifications]);

  const fetchNotifications = () => {
    axios.get(`http://${IP}:8080/notification/notif`)
      .then((res) => {
        setNotifications(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const fetchEvents = (eventIds) => {
    axios.get(`http://${IP}:8080/event/getall`, {
      params: {
        idevent: eventIds
      }
    })
    .then((res) => {
      setEvents(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleNotificationPress = async (idnotification) => {
    try {
      await axios.put(`http://${IP}:8080/notification/update/${idnotification}`, { seen: 'seen' });
      
      const index = notifications.findIndex(notification => notification.idnotification === idnotification);
      if (index !== -1) {
        const updatedNotifications = [...notifications];
        updatedNotifications[index].seen = 'seen';
        setNotifications(updatedNotifications);
        console.log("updated");
        navigation.navigate('eventdetail', { eventId: notifications[index].idevent });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{backgroundColor:"#2E2D29",flex:1}}>
      <Text style={{marginTop:80,marginLeft:125,fontSize:30,color:"#ff5252"}}>Notifications</Text>
   <View style={{marginTop:40,backgroundColor:"#2E2D29",flex:1}}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {notifications.map((notification, index) => {
        const event = notification.event;
        return (
          <TouchableOpacity key={index} onPress={() => handleNotificationPress(notification.idnotification)}>
            <View style={styles.notificationContainer}>
              <Image source={{ uri: event.image }} style={styles.image} />
              <View style={styles.notificationContent}>
                <Text style={styles.eventName}>{event.eventname}</Text>
                <Text style={styles.date}>{event.date}</Text>
                <Text style={styles.message}>A new event has been dropped!</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
    </View>
    <Nav/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#2E2D29',
    paddingTop: 20,
   
  },
  notificationContainer: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
  },
  date: {
    fontSize: 14,
    color: '#ccc',
  },
  message: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 4,
  },
});

export default Notification;
