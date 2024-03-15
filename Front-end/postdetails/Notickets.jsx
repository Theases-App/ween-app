import { View,FlatList,ViewPropTypes,Text,ScrollView,TouchableOpacity,Image,Pressable,TouchableWithoutFeedback} from 'react-native';
 import React from 'react'; 
 import{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import {IP} from "../ip.json"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'

const Noticket=()=>{
  const navigation=useNavigation()
    return (
      <View style={{backgroundColor:"#111111",flex:1}}>
      <View style={{
      marginTop:350
      ,height:80,width:300,
      marginLeft:70
      }}>
        <Text style={{color:"#ff5252",fontSize:30}}> Sorry No More Tickets </Text>
        <Text style={{color:"#ff5252",fontSize:30,marginLeft:28}}> We are Sold Out </Text>
      </View>
      <View style={{color:"white",
      backgroundColor:"#ff5252",width:150,height:50,
      marginLeft:140,
      marginTop:70
      }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("home")}}>
        <Text style={{marginTop:10,marginLeft:14,fontSize:20}}> Back Home </Text>
        </TouchableOpacity>
      </View>
      </View>
    )
}

export default Noticket;