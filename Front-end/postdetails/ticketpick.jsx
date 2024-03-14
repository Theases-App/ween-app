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

    const ticketpick=({e})=>{
    
       const [focus, setFocus] = useState('white')
       const [ticket, setTicket] = useState('')
    return (
              <View>

              <TouchableOpacity
                onPress={() => {
                  setTicket(e)
                  AsyncStorage.getItem('id').then((value) => {
                    console.log(value, "id")
                    setFocus("red")
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
                  <Text style={{ fontFamily: "Inter-Black", fontSize: 20, marginLeft: 220, marginTop: -27 }}>{e.price + " " + "Dt"}</Text>
                  <Icon name="check" style={{ marginLeft: 10, marginTop: -23 }} size={20} />

                </View>

              </TouchableOpacity>
              {/* <View style={{marginTop:-50,color:"red",marginLeft:40}}>
   <CheckBox onPress={()=>{console.log("bara nikomek")}}></CheckBox>
   </View> */}
            </View>
        )
  }
  export default ticketpick