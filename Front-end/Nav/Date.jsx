import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { IP } from "../ip.json"
import Nav from './Nav';
import Dates from './Dates';
function dates() {

  const [data, setData] = useState([])
  const Navigation = useNavigation()
  // const [chosenDate, setChosenDate] = useState(new Date());
  const [data2, setData2] = useState([])
  const [refresh, setRefresh] = useState(true);
  const [availableDates, setAvailableDates] = useState([])
  const [selected, setSelected] = useState('');
  const [title, setTitle] = useState("")

  useEffect(() => {
    axios.get(`http://${IP}:8080/event/getall`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err, "err")
    })
  }, [])


  const r = (selectedDate) => {
    // console.log(data);
    setSelected(selectedDate);
    setAvailableDates(data.filter((e) => {
      return (e.date === selectedDate && e.adminmessage == 1)
    }))
  }
  
 

  //    useEffect(()=>{
  //   var date= new Date().getDate()
  //   var month = new Date().getMonth() +1
  //   var year = new Date().getFullYear() 
  //   var hours = new Date().getHours() 
  //   var min=new Date().getMinutes()
  //   var sec =new Date().getSeconds()
  //   setData1(date+ " / " +month+ " / "+ year + " ")
  // },[])



  return (
    <View style={{ backgroundColor: "#2E2D29", flex: 1 }}>

      <View style={{
        backgroundColor: "", marginTop: 65,
        marginBottom: 10
      }}>

        <Text style={{
          fontSize: 26,
          fontFamily: "Inter-Black", color: "#ececec",
          marginLeft: 125
        }}> Select A Date  </Text>

        <Calendar style={{ marginTop: 30, width: 400, left: 13, borderRadius: 10 }}
          onDayPress={day => {
            r(day.dateString)
          }}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
          }}
        />
        {/* <TouchableOpacity onPress={()=>{}}>
    
      <View style={{marginTop:20,backgroundColor:"#ff5252",
      height:40,width:200,marginLeft:110,borderRadius:20
    }}>
      <Text style={{fontSize:18,marginLeft:32,marginTop:8}}> See Date Events </Text>

      </View>
    </TouchableOpacity> */}

      </View>

      <View style={{ backgroundColor: "#2E2D29", flex: 1 }}>
        <View style={{ marginTop: 20 }}>

          <ScrollView style={{ marginBottom: 0, marginTop: -10 }}>

            <View>
              <Text style={{
                fontSize: 26,
                 color: "#ececec",
                marginLeft: 105

              }}> {availableDates.length === 0 ? "No Events Available ": "Your Date Events" } </Text>
              <FlatList
                data={availableDates} horizontal={true} renderItem={({ item }) => <View>

                  <ScrollView>


                    <TouchableOpacity style={{ justifyContent: "space-between", padding: 5 }} onPress={() => { Navigation.navigate('eventdetail', { item }) }}>

                      <View style={{ backgroundColor: "white", borderColor: "black", borderRadius: 20, height: 270, width: 420, marginTop: 15 }} >

                        <Image style={{
                          height: 250,
                          width: 400,
                          borderRadius: 15,
                          marginLeft: 10,
                          marginTop: 10

                        }} source={{ uri: item.image }} />

                        <View style={{ backgroundColor: "#ececec", borderColor: "black", marginTop: -60, height: 70, borderRadius: 20 }}>

                          <Text style={{
                            color: "#ff5252",
                            fontFamily: "Inter-Black",
                            fontSize: 20,
                            marginLeft: 20,
                            marginTop: 8

                          }}>{item.eventname}</Text>


                          <Text style={{
                            color: "#111111",
                            fontFamily: "Inter-Black",
                            fontSize: 20,
                            marginLeft: 21,


                          }}>{item.placename}</Text>


                          <Text style={{
                            color: "#111111",
                            marginLeft: 310,
                            marginTop: -24,
                            fontFamily: "Inter-Black",
                            fontSize: 17,

                          }}>{item.price + " " + "Dt"}</Text>


                          <Text style={{
                            color: "#ff5252",
                            marginLeft: 280,
                            marginTop: -46,
                            fontFamily: "Inter-Black",
                            fontSize: 16,

                          }}>{"Starting From "}</Text>
                        </View>

                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>}

              />
            </View>
          </ScrollView>

        </View>
      </View>
    </View>
  )
}

export default dates
