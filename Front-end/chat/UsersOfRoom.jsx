/*import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity} from "react-native"
import {IP} from '../ip.json'

export default function UsersOfRoom({roomId}){
    const [users,setUsers]=useState([])
   console.log("room",roomId)
   console.log(users,"usersss");

    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/room/${roomId}`)
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <View>
            <Text style={{color:"red"}}>Users</Text>
            {users.map((el,i)=>(

                    <Text style={{color:"white"}}>{el.User.fullname}</Text>     
    
            ))}
        </View>
    )
}*/
/*import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity, StyleSheet,Image} from "react-native"
import {IP} from '../ip.json'

export default function UsersOfRoom({roomId}){
    const [users,setUsers]=useState([])
    console.log("room",roomId)
    console.log(users,"usersss");

    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/room/${roomId}`)
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Users</Text>
            {users.map((el,i)=>(
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
            src={el.User.image}
            style={{ width: 30, height:30, borderRadius:25 }}
          />
                <Text style={styles.userText} key={i}>{el.User.fullname}</Text>
            </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width:170 ,
    },
    title: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    userText: {
        color: "black",
        marginBottom: 5,
    },
});*/

import axios from "axios"
import React,{useState, useEffect } from "react"
import {View,Text, TouchableOpacity, StyleSheet,Image} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import {IP} from '../ip.json'

export default function UsersOfRoom({roomId}){
    const [users,setUsers]=useState([])
    console.log("room",roomId)
    console.log(users,"usersss");

    useEffect(()=>{
        axios.get(`http://${IP}:8080/chat/room/${roomId}`)
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <View style={styles.container}>
        <View style={{  alignItems: 'center' }}>
        <Icon name="user" size={20} color="black" />
            <Text style={styles.title}>Users</Text>
        </View>
            {users.map((el,i)=>(
                <View style={styles.userContainer} key={i}>
                    <Image
                        source={{ uri: el.User.image }}
                        style={styles.userImage}
                    />
                    <Text style={styles.userText}>{el.User.fullname}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 170,
    },
    title: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 25,
        marginRight: 10,
    },
    userText: {
        color: "black",
    },
});

