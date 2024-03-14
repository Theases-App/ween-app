import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {IP} from '../ip.json'

export default function UsersOfRoom({roomId}) {
    const [users,setUsers]=useState([])
   console.log(roomId);
    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/room/${roomId}`)
        .then((res)=>{
            setUsers(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <View>
            <Text>Users</Text>
            {users?.map((el,i)=>(
                
                    <Text>{el.User.fullname}</Text>
                           
             ))}
        </View>
    )
}