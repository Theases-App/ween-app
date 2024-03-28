import { View, StyleSheet, StatusBar, FlatList, ViewPropTypes, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { IP } from "../ip.json"
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';
import { useContext } from 'react';
import Idcontext from "../UseContext"
import { useNavigation } from '@react-navigation/native'   

    const ticketpick=({e,setTicket,setPrice,price})=>{
    
       const [focus, setFocus] = useState('white')
       const [refresh,setRefresh]=useState(true)
       const [selectedIcon, setSelectedIcon] = useState('');

       const handleIconPress = (iconName) => {
        setSelectedIcon(iconName)
      }
       const iconStyle = (iconName) => ({
        color: selectedIcon === iconName ? '#ff5252' : 'black',
      })
    return (
              <View>

              <TouchableOpacity
                onPress={() => {
                  setTicket(e)
                  setPrice(e.price) 
                  AsyncStorage.getItem('id')
                  .then((value) => {
                    console.log(e.idcategorydetails);
                    console.log(value,"id");
                    setFocus("#ff5252")
                  }).catch((error)=>{
                    console.log(error);
                  })
                }}>

                <View
                  
                  style={{

                    backgroundColor: focus,
                    marginTop: 20,
                    borderColor: "red",
                    borderRadius: 20,
                    width: 310,
                    height: 60,
                    marginLeft: 50,

                  }}>

                  <Text style={{ fontFamily: "Inter-Black", fontSize: 20, marginLeft: 40, marginTop: 20 }}>{e.feature}</Text>
                  <Text style={{ fontFamily: "Inter-Black", fontSize: 20, marginLeft: 220, marginTop: -27 }}>{  Math.floor(e.price /1000 )  + " "+ "Dt"}</Text>
                 <View style={{ marginLeft: 10, marginTop: -19 }}>
                  <Icon name="check" style={iconStyle('check')} size={20} />
                  </View>
              
                </View>

              </TouchableOpacity>
             
            </View>
        )
  }
  export default ticketpick