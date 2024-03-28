/*import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {IP} from '../ip.json'
import UsersOfRoom from "./UsersOfRoom.jsx"

import lookup from "socket.io-client"


import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Rooms() {

    const [rooms,setRooms]=useState([])
    const [show,setShow]=useState(0)
    const navigation=useNavigation()
    const [id,setId]=useState('')

    const get=async()=>{
        setId(await AsyncStorage.getItem("id")) 
        console.log(id);
    }
    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/rooms/${id}`)
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
        <View style={{marginBottom:700}}>
            {rooms.map((el,i)=>(

                
                <TouchableOpacity onPress={()=>{navigation.navigate("Chat",{idRooms:el.id})}} key={i}>
                {console.log(el)}
                    <Text style={{color:"white"}}>Event Title :{el.event.eventname}</Text>
                    <TouchableOpacity onPress={()=>{handleShow(el.id)}} key={i}><Text style={{color:"white"}}>see Users</Text></TouchableOpacity>  

                <TouchableOpacity onPress={()=>{navigation.navigate("Chat",{idRooms:el.idchat})}} key={i}>
                    <Text>Event Title :{el.event.eventname}</Text> 
                    <TouchableOpacity onPress={()=>{handleShow(el.idchat)}} key={i}><Text>see Users</Text></TouchableOpacity>  

                    {(show==el.id)&&<UsersOfRoom roomId={el.eventIdevent}/>}
                </TouchableOpacity>           
             ))}
        </View>
    )
}*/

import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity, StyleSheet,Image} from "react-native"
import { useNavigation } from "@react-navigation/native"
import {IP} from '../ip.json'
import UsersOfRoom from "./UsersOfRoom.jsx"
import lookup from "socket.io-client"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Rooms() {
    const [rooms,setRooms]=useState([])
    const [show,setShow]=useState(0)
    const navigation=useNavigation()
    const [UserIduser,setUserIduser]=useState('')

    const r=async()=>{
        setUserIduser(await AsyncStorage.getItem("id"))
        console.log(UserIduser)
    }
    r()
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
        <View style={{backgroundColor:"#2E2D29",flex:1}}>
        <View style={styles.container}>
            {rooms.map((el,i)=>(
                <TouchableOpacity 
                    key={i} 
                    onPress={()=>{navigation.navigate("Chat",{idRooms:el.eventIdevent})}}
                    style={styles.roomContainer}
                >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                src={el.event.image}
                style={{ width:50, height: 50, borderRadius: 40, marginLeft:10 }}
              />
                    <Text style={[styles.eventTitle, { marginLeft: 20 }]}>{el.event.eventname}</Text>
                </View>
                    <TouchableOpacity onPress={()=>{handleShow(el.id)}} key={i}>
                        <Text style={styles.seeUsers}>See Users</Text>
                    </TouchableOpacity>  
                    {(show==el.id)&&<UsersOfRoom roomId={el.eventIdevent}/>}
                </TouchableOpacity>           
             ))}
        </View>
        </View>
    )
}    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:500,
       
    },
    roomContainer: {
        backgroundColor:'#ff5252',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center'
    },
    eventTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    seeUsers: {
        color: "white",
        textDecorationLine: "underline",
        marginBottom: 10,
    }
});

