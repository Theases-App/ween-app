import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {IP} from '../ip.json'
import UsersOfRoom from "./UsersOfRoom.jsx"

export default function Rooms() {
    const [rooms,setRooms]=useState([])
    const [show,setShow]=useState(0)
    const navigation=useNavigation()
    const UserIduser=1
    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/rooms/${UserIduser}`)
        .then((res)=>{
            setRooms(res.data)
            console.log("room data",res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handleShow=(ids)=>{
        ids==show?setShow(0):setShow(ids)
    }
    return (
        <View>
            {rooms.map((el,i)=>(
                <TouchableOpacity onPress={()=>{navigation.navigate("Chat",{idRooms:el.id})}} key={i}>
                    <Text>Event Title :{el.event.eventname}</Text>
                    <TouchableOpacity onPress={()=>{handleShow(el.id)}} key={i}><Text>see Users</Text></TouchableOpacity>  
                    {(show==el.id)&&<UsersOfRoom roomId={el.eventIdevent}/>}
                </TouchableOpacity>           
             ))}
        </View>
    )
}