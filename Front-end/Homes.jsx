import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Nav from './Nav/Nav.jsx';
import Search from './Search/Search.jsx';
import Allcategory from './Search/Allcategory.jsx';
import axios from 'axios';
import { IP } from './ip.json';
import Homepage from './homepage/homepage.js';

import Eventdetails from "./postdetails/Eventdetails.jsx"

import Map from './Map/Map.jsx'
 import Addevent from './components/addevent.jsx'
 import EditPictureAndCountry  from './components/editpictureANDcountry.jsx'
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
         
        </View>
        <Search />

        <Homepage/>
       {/* <Eventdetails/> */}

       

        {/* <Map/> */}
        {/* <Addevent/> */}
        {/* <EditPictureAndCountry /> */}

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
    marginTop:15
  },
  circleContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop:250
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
