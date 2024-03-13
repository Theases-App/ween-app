import axios from "axios"
import React,{useState, useEffect } from "react"
import {StyleSheet,View,Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {IP} from "../ip.json"

export default function Rooms(){
    const [rooms,setRooms]=useState([])
    const navigation=useNavigation()
    const UserIduser=1
    console.log(IP)
    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/rooms/${UserIduser}`)
        .then((res)=>{
            setRooms(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(rooms,"rooms");
  



    return(
        <View>
        {console.log(rooms,"r")}
        {rooms.map((el,i)=>(
            <TouchableOpacity onPress={()=>{navigation.navigate("Chat",{chatRoomId:el.id})}} key={i}>
        <Text style={styles.text}>{el.event.eventname}</Text>
         </TouchableOpacity>
    ))}
        </View>
            


    
    )
}

const styles = StyleSheet.create({
   
  
    text: {
      fontSize: 12,
      paddingTop:100,
      paddingLeft:100,
      fontWeight: 'bold',
      color:"black"
    }
  
  })