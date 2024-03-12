import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Nav from './Nav/Nav.jsx';
import Search from './Search/Search.jsx';
import Allcategory from './Search/Allcategory.jsx';
import axios from 'axios';
import { IP } from './ip.json';

export default function Home() {
  const [date, setdate] = useState([]);

  useEffect(() => {
    axios.get(`http://${IP}:8080/event/getall`)
      .then((res) => {
        setdate(res.data);
        console.log("this is the data from home ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
      <View style={styles.viewstyle1}>
        <View style={styles.viewstyle}>
          <Image source={require("./idk/image.png")} style={styles.img} />
          <View style={styles.circleContainer}>
            {date.map((event) => (
              <View key={event.idevent} style={styles.eventContainer}>
                <Text style={{color:"white"}}>{event.date.slice(5,10)}</Text>
                <View style={styles.circle}>
                  <Text style={{color:"white"}}>{event.date.length}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <Search />
        <Nav />
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  viewstyle1: {
    backgroundColor: "#111111",
    flex: 1,
    justifyContent: "center",
  },
  viewstyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    position: "absolute",
    top: 10,
    height: 100,
    width: 100,
  },
  circleContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', // Align circles in the center horizontally
    marginTop: 20,  
    paddingBottom:600
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff5252',
    marginHorizontal: 5,   
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});