import {View,Text} from "react-native"
import axios from "axios"
import React,{useState, useEffect } from "react"
import {IP} from "../ip.json"
export default function Chat({route}) {
   const [conv,setConv]=useState([])
   const roomsId=route.params.chatRoomId
   useEffect(()=>{
    axios.get(`http://${IP}:8080/message/msg/${roomsId}`)
    .then(ress =>{
        setConv(ress.data)
        console.log(ress.data);
    })
    .catch(err =>{
        console.log(err)
    })
   },[])
    return (
        <View>
            {conv.map((el,i)=>(
                <View>
                     <Text>{el.fullname+"  /"+el.content}</Text>
                </View>
            ))}
                   
            
            </View>
    )
}