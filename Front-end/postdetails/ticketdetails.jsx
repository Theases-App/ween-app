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
import Ticketpick from "./ticketpick"
const Ticket = ({ route }) => {

  const [myid, setMyid] = useState('')
 
  const [res, setRes] = useState('')
  const Navigation = useNavigation()

  const item = route.params.item 

  const [chat,setChat]=useState(true)

  retrieveData = async () => {
    try {
      AsyncStorage.getItem('id').then((value) => {
        console.log(value);
      })
      if (value !== null) {
        setMyid(value)

      }
    } catch (error) {
      console.log(error)
    }
  };


  const [ticket, setTicket] = useState('')
  const [data, setData] = useState([])
 const [chating,setChating]=useState("")
  const cat = ticket.idcategorydetails

  useEffect(() => {
    axios.get(`http://${IP}:8080/cat/getall/${item.idevent}`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },[])

  
  const reservation = async () => {
    axios.get(`http://${IP}:8080/res/getall`)
      .then((res) => {
        setRes(res.data.length)
        setChating(res.data)
      }).catch((err) => {
        console.log(err)
      })
    if ( res > JSON.parse(item.numberpeople)) {
      Navigation.navigate("noticket")
    }
    else {
      const x = await AsyncStorage.getItem('id')
      axios.post(`http://${IP}:8080/res/add/${x}/${cat}/${item.idevent}`)
       .then((res) => {
        console.log(x);
        console.log("done inserting")
        Navigation.navigate("pay")
      }).catch((err) => {
        console.log(cat);
        console.log(err)
      })
    }
  }
  const [selectedIcon, setSelectedIcon] = useState('');

  
  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName)
  }

 

  const iconStyle = (iconName) => ({
    color: selectedIcon === iconName ? '#ff5252' : 'white',
  })


  return (
    <View style={{ backgroundColor: "#111111", flex: 1 }}>
      <View style={{ marginTop: 120 }}>
        <Text style={{ position: "absolute", marginTop: -60, marginLeft: 140, color: "white", fontFamily: "Inter-Black", fontSize: 23 }}>  {item.eventname}</Text>
      </View>



      <View style={{ marginBottom: 300 }}>
        <Image style={{ marginLeft: 0, height: 280, width: 430, borderRadius: 10 }} source={{ uri: item.image }} />
      </View>



      <View style={{ backgroundColor: "black", borderColor: "black", marginTop: -340, height: 120, borderRadius: 5, width: 430 }}>

        <Text style={{
          color: "#ff5252",
          fontFamily: "Inter-Black",
          fontSize: 20,
          marginLeft: 20,
          marginTop: 8

        }}>{item.eventname}</Text>


        <Text style={{
          color: "white",
          fontFamily: "Inter-Black",
          fontSize: 20,
          marginLeft: 21
        }}>{item.placename}</Text>

        <View style={{ marginTop: -40, marginLeft: 200 }}>
          <TouchableWithoutFeedback onPress={() => handleIconPress('heart')}>
            <Icon name="heart" style={iconStyle('heart')} size={30} />
          </TouchableWithoutFeedback>
        </View>


        <Text style={{
          color: "white",
          marginLeft: 310,
          marginTop: -17,
          fontFamily: "Inter-Black",
          fontSize: 17,

        }}>{item.price + " " + "Dt"}</Text>


        <Text style={{
          color: "#ff5252",
          marginLeft: 280,
          marginTop: -40,
          fontFamily: "Inter-Black",
          fontSize: 16,

        }}>{"Starting From"}</Text>

        <View style={{ marginTop: 40, marginLeft: 20 }}>
          <Icon name="calendar" style={iconStyle('calendar')} size={25} />
        </View>

        <Text style={{
          color: "white",
          marginLeft: 70,
          marginTop: -24,
          fontFamily: "Inter-Black",
          fontSize: 16,

        }}>{item.date}</Text>

        <Text style={{
          color: "white",
          marginLeft: 330,
          marginTop: -20,
          fontFamily: "Inter-Black",
          fontSize: 16,

        }}>{item.location}</Text>


      </View>

      <View style={{ backgroundColor: "#111111", borderColor: "#ececec", marginTop: 0, height: 420, borderRadius: 5, width: 430 }}>
        <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 20, justifyContent: "center", alignContent: "center", alignItems: "center" }}>{ }</Text>

        <Text style={{ color: "#ff5252", fontFamily: "Inter-Black", fontSize: 20, marginLeft: 160, marginTop: -30 }}>  Tickets : </Text>
        <Text style={{ color: "white", fontSize: 10, marginLeft: 100, marginTop: -10 }}>_____________________________________</Text>

      </View>


      <View style={{ display: "flex", flexDirection: "column", rowGap: 20, height: 250, marginTop: -380 }}>
        <ScrollView>
          {data.map((e) => {

            return (

            <View>
       <Ticketpick e={e} setTicket={setTicket}/>
            </View>

            )
          })}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => { reservation() }}>
        <View style={{
          backgroundColor: "#ff5252",
          color: "white",
          width: 200,
          marginTop: 20,
          marginLeft: 110,
          height: 45,
          borderRadius: 20
        }}>
          <Text style={{ color: "white", fontFamily: "Inter-Black",marginTop:10,
           fontSize: 20, marginLeft: 15 }}> Confirm Purchase</Text>
        </View>
      </TouchableOpacity>

    </View>
  )



}

export default Ticket;




