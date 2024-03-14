import { View,FlatList,ViewPropTypes,Text,ScrollView,TouchableOpacity,Image,Pressable,TouchableWithoutFeedback} from 'react-native';
 import React from 'react'; 
 import{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import {IP} from "../ip.json"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from 'react-native-button'
import { useNavigation } from '@react-navigation/native'

const Pay=()=>{
  const Navigation = useNavigation()
  return (
    <View style={{backgroundColor:"#111111",flex:1}}> 
      <Text style={{marginTop:70,marginLeft:80,
      fontSize:30,
      color:"white"
      }}> Payment Methods </Text>

  <TouchableOpacity onPress={()=>{Navigation.navigate("payment")}}>
    <View style={{backgroundColor:"white"
    ,width:350,height:120,
    marginLeft:40,
    marginTop:100,
    borderRadius:20

    }}>
    
    <Text style={{color:"black",
      fontSize:26,
      marginTop:29,
      marginLeft:20,
      color:"#ff5252"

  }}> Payement with Visa Card </Text>

  
   
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Pay