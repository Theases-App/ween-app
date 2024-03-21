import { View, FlatList, ViewPropTypes, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { IP } from "../ip.json"
import { useNavigation } from '@react-navigation/native'



const homepage = () => {

      const Navigation = useNavigation()
      const [refresh, setRefresh] = useState(true);
      const [data, setData] = useState([])

      const clubing = []
      const sports = []
      const spectacles = []
      const concerts = []
      const hotelresto = []
      useEffect(() => {
            axios.get(`http://${IP}:8080/event/getall`).then((res) => {
                  setData(res.data)
            }).catch((err) => {
                  console.log(err, "err")
            })
      }, [refresh])

      data.map((e) => {
            if (e.eventcategory === "clubbing" && e.adminmessage == 1) {
                  clubing.push(e)
            }
      })

      data.map((e) => {
            if (e.eventcategory === "sports" && e.adminmessage == 1) {
                  sports.push(e)
            }
      })

      data.map((e) => {
            if (e.eventcategory === "spectacles" && e.adminmessage == 1) {
                  spectacles.push(e)
            }
      })

      data.map((e) => {
            if (e.eventcategory === "concerts" && e.adminmessage == 1) {
                  concerts.push(e)
            }
      })

      data.map((e) => {
            if (e.eventcategory === "hotel & resto" && e.adminmessage == 1) {
                  hotelresto.push(e)
            }
      })

      return (
            <View style={{ marginTop: 0 }} >

        <ScrollView style={{ marginBottom: 50 }}>

                        <View style={{ justifyContent: "center", gap: 35 }}>
                      <View>
                              <View style={{display:"flex",flexDirection:"row",flexBasis:"auto",columnGap:200}}>
                        

                                    <Text style={{ fontFamily: "Inter-Black", fontSize: 24, color: "#ececec", marginLeft: 12 }}> Clubbing </Text>
                                    <Pressable   onPress={()=>{Navigation.navigate("Clubbing")}}>
                              <Text style={{
                                          fontFamily: "Inter-Black", fontSize: 20, color: "#ff5252"
                                         
                                    }} > Show All</Text></Pressable> 
                                    </View>

                                    <Text style={{ fontFamily: "Inter-Black", fontSize: 14, color: "#ececec", marginTop: -10, marginLeft: 45 }}> _________________________________________ </Text>

                                    <FlatList
                                          data={clubing} horizontal={true} renderItem={({ item }) => (<View>



                                                <TouchableOpacity style={{ justifyContent: "space-between", padding: 5 }}  onPress={()=>{Navigation.navigate('eventdetail', {item})}} >

                                                      <View style={{ backgroundColor: "#ececec", borderColor: "black", borderRadius: 20, height: 270, width: 420, marginTop: -5 }} >

                                                            <Image style={{
                                                                  height: 250,
                                                                  width: 400,
                                                                  borderRadius: 15,
                                                                  marginLeft: 10,
                                                                  marginTop: 10

                                                            }}

                                                            source={{ uri: item.image }} />

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

                                          </View>)}

                                    />
                              </View>



                              <View>
                              <View style={{display:"flex",flexDirection:"row",flexBasis:"auto",columnGap:150}}>
                        

                        <Text style={{ fontFamily: "Inter-Black", fontSize: 24, color: "#ececec", marginLeft: 12 }}> Hotel & Resto </Text>
                        <Pressable   onPress={()=>{Navigation.navigate("Hotelresto")}}>
                  <Text style={{
                              fontFamily: "Inter-Black", fontSize: 20, color: "#ff5252"
                             
                        }} > Show All</Text></Pressable> 
                        </View>

                                    <Text style={{ fontFamily: "Inter-Black", fontSize: 14, color: "#ececec", marginTop: -10, marginLeft: 45 }}> _________________________________________ </Text>

                                    <FlatList
                                          data={hotelresto} horizontal={true} renderItem={({ item }) => (<View>




                                                <TouchableOpacity style={{ justifyContent: "space-between", padding: 5 }} onPress={()=>{Navigation.navigate('eventdetail', {item})}}>

                                                      <View style={{ backgroundColor: "#ececec", borderColor: "black", borderRadius: 20, height: 270, width: 420, marginTop: -5 }} >

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

                                          </View>)}

                                    />
                              </View>




                              <View>
                              <View style={{display:"flex",flexDirection:"row",flexBasis:"auto",columnGap:220}}>
                        

                        <Text style={{ fontFamily: "Inter-Black", fontSize: 24, color: "#ececec", marginLeft: 12 }}> Sports </Text>
                        <Pressable   onPress={()=>{Navigation.navigate("Sports")}}>
                  <Text style={{
                              fontFamily: "Inter-Black", fontSize: 20, color: "#ff5252"
                             
                        }} > Show All</Text></Pressable> 
                        </View>

                                    <Text style={{ fontFamily: "Inter-Black", fontSize: 14, color: "#ececec", marginTop: -10, marginLeft: 45 }}> _________________________________________ </Text>

                                    <FlatList
                                          data={sports} horizontal={true} renderItem={({ item }) =>(<View>

                                                <TouchableOpacity style={{ justifyContent: "space-between", padding: 5 }} onPress={()=>{Navigation.navigate('eventdetail', {item})}}>

                                                      <View style={{ backgroundColor: "#ececec", borderColor: "black", borderRadius: 20, height: 270, width: 420, marginTop: -5 }} >

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

                                          </View>)}

                                    />
                              </View>




                              <View>
                              <View style={{display:"flex",flexDirection:"row",flexBasis:"auto",columnGap:198}}>
                        

                        <Text style={{ fontFamily: "Inter-Black", fontSize: 24, color: "#ececec", marginLeft: 12 }}> Concerts </Text>
                        <Pressable   onPress={()=>{Navigation.navigate("Concerts")}}>
                  <Text style={{
                              fontFamily: "Inter-Black", fontSize: 20, color: "#ff5252"
                             
                        }} > Show All</Text></Pressable> 
                        </View>

                                    <Text style={{ fontFamily: "Inter-Black", fontSize: 14, color: "#ececec", marginTop: -10, marginLeft: 45 }}> _________________________________________ </Text>

                                    <FlatList
                                          data={concerts} horizontal={true} renderItem={({ item }) => (<View>




                                                <TouchableOpacity style={{ justifyContent: "space-between", padding: 5 }} onPress={()=>{Navigation.navigate('eventdetail', {item})}}>

                                                      <View style={{ backgroundColor: "#ececec", borderColor: "black", borderRadius: 20, height: 270, width: 420, marginTop: -5 }} >

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

                                          </View>)}

                                    />
                              </View>




                              <View>
                              <View style={{display:"flex",flexDirection:"row",flexBasis:"auto",columnGap:175}}>
                        

                        <Text style={{ fontFamily: "Inter-Black", fontSize: 24, color: "#ececec", marginLeft: 12 }}> Spectacles </Text>
                        <Pressable   onPress={()=>{Navigation.navigate("Spectacles")}}>
                  <Text style={{
                              fontFamily: "Inter-Black", fontSize: 20, color: "#ff5252"
                             
                        }} > Show All</Text></Pressable> 
                        </View>

                                    <Text style={{ fontFamily: "Inter-Black", fontSize: 14, color: "#ececec", marginTop: -10, marginLeft: 45 }}> _________________________________________ </Text>

                                    <FlatList
                                          data={spectacles} horizontal={true} renderItem={({ item }) => (<View>




                                                <TouchableOpacity style={{ justifyContent: "space-between", padding: 5 }} onPress={()=>{Navigation.navigate('eventdetail', {item})}}>

                                                      <View style={{ backgroundColor: "#ececec", borderColor: "black", borderRadius: 20, height: 270, width: 420, marginTop: -5 }} >

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

                                          </View>)}

                                    />
                              </View>

                        </View>

                  </ScrollView>

            </View>
      );
};

export default homepage