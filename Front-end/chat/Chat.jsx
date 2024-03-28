/*import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView,KeyboardAvoidingView,Platform } from "react-native";
import axios from "axios";
import { IP } from '../ip.json';
import io from 'socket.io-client';

const socket = io(`http://${IP}:3001`);

export default function Chat({ route }) {
    const [conv, setConv] = useState([]);
    const [text, setText] = useState("");
    const [refresh, setRefresh] = useState(false);
    // const roomsId = route.params.idRooms;
    const roomsId = 1;
    const userId = 1;

    useEffect(() => {
        axios.get(`http://${IP}:8080/message/msg/${roomsId}`)
            .then(ress => {
                setConv(ress.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [refresh]);

    const handleAdd = async () => {
        try {
            await axios.post(`http://${IP}:8080/message/msg`, {
                content: text,
                chatRoomId: roomsId,
                UserIduser: userId
            });
            await socket.emit('send', {
                content: text,
                chatRoomId: roomsId,
                UserIduser: userId
            });
            setText("");
            setRefresh(!refresh);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        socket.connect();
        socket.on('recive', (message) => {
            setConv([...conv, message]);
            setRefresh(!refresh);
        });

        return () => {
            socket.disconnect();
        };
    }, [refresh]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {conv.map((el, i) => (
                    <View key={i} style={el.UserIduser === userId ? styles.sentMessageContainer : styles.receivedMessageContainer}>
                        <Text style={styles.messageText}>
                            {el.UserIduser === userId ? 'Me: ' : el.User.fullname + ': '}{el.content}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TextInput
                    onChangeText={setText}
                    value={text}
                    style={styles.input}
                    placeholder="Type your message..."
                />
              
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
    sentMessageContainer: {
        backgroundColor: '#DCF8C6',
        alignSelf: 'flex-end',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
    },
    receivedMessageContainer: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
        paddingVertical: 5,
        
    },
    input: {
        flex: 1,
        height: 40,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#111111',
        paddingHorizontal: 20,
        padding: 50,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

})*/


import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from "react-native";
import axios from "axios";
import { IP } from "../ip.json";
import io from "socket.io-client";
import Icon from 'react-native-vector-icons/FontAwesome5';

const socket = io(`http://${IP}:3001`);

export default function Chat({ route }) {

  const [conv, setConv] = useState([]);
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const roomsId = route.params.idRooms;
  const [userId,setuserId]=useState('')

  useEffect(() => {
    axios
      .get(`http://${IP}:8080/message/msg/${roomsId}`)
      .then((ress) => {
        setConv(ress.data);
        console.log("tnhhod", ress.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [refresh, roomsId]);

   
   
    const get=async()=>{
        setuserId(await AsyncStorage.getItem("id")) 
        console.log(userId);
    }
    get() 
    
    useEffect(() => {
      console.log(roomsId, "hhhh");
        axios.get(`http://${IP}:8080/message/msg/${roomsId}`)
            .then(ress => {
                setConv(ress.data);
                console.log(ress.data,"response");
                setLoading(false); 
            })
            .catch(err => {
                console.log(err);
                setLoading(false); 
            });
    }, [refresh, roomsId]);



  const handleAdd = async () => {
    try {
      console.log({
        chatRoom_idchat:roomsId,
        content: text,
        eventIdevent: roomsId,
        user_iduser: userId
      }, "============================");
      await axios.post(`http://${IP}:8080/message/msg`, {
        chatRoom_idchat:roomsId,
        content: text,
        eventIdevent: roomsId,
        user_iduser: userId
      });
      await socket.emit("send", {
        content: text,
        chatRoom_idchat: roomsId,
        user_iduser: userId
      });
      setText("");
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    socket.connect();
    socket.on("recive", (message) => {
      setConv((prevConv) => [...prevConv, message]);
      setRefresh(!refresh);
    });

    return () => {
      socket.disconnect();
    };
  }, [refresh]);
console.log("bbbbb",conv);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          {conv &&
            Array.isArray(conv) &&
            conv.map((el, i) => (
              <View
                style={{ flex: 1, marginVertical: 10, paddingHorizontal: 5 }}
              >
                <View
                  key={i}
                  style={
                    el.UserIduser === userId
                      ? styles.sentMessageContainer
                      : styles.receivedMessageContainer
                  }
                >
                  <Image
                    src={el.User? el.User.image: ""}
                    style={{ width: 42, height: 42, borderRadius: 35 }}
                  />
                  <Text style={styles.messageText}>
                    {/*el.UserIduser === userId ? 'Me: ' : el.fullname + ': '*/}
                    {el.content}
                  </Text>
                </View>
              </View>
            ))}
        </ScrollView>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.inputContainer}
      >
        <TextInput
          onChangeText={setText}
          value={text}
          style={{
            flex: 1,
            height: 40,
            marginHorizontal: 10,
            marginVertical: 20,
            borderWidth: 1,
            borderRadius: 15,
            paddingHorizontal: 10,
            borderColor: "white",
            color: "white"
          }}
          placeholder="Type your message..."
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Icon name="paper-plane" size={25} color="#f7f3f3" />
        </TouchableOpacity> 



            <KeyboardAvoidingView
               behavior={Platform.OS ==="ios" ? "padding" : "height"}  keyboardVerticalOffset={Platform.OS==="ios" ? 100 : 0}
                style={styles.inputContainer}  >
               <TextInput
                    onChangeText={setText}
                    value={text}
                    style={{  
                        flex: 1,
                        height: 40,
                        marginHorizontal: 10,
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 10,
                        borderColor: '#111111',
                        color: '#111111',}}
                    placeholder="Type your message..."
                />
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
           

        
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111"
  },
  scrollView: {
    flexGrow: 1
  },
  sentMessageContainer: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 6,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
  receivedMessageContainer: {
    backgroundColor: "#ff5252",
    alignSelf: "flex-end",
    right: 0,
    marginVertical: 5,
    marginHorizontal: 10,
    padding:6,
    borderRadius: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 20
  },
  messageText: {
    fontSize: 16,
    color: "#111111"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    paddingVertical: 5
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    marginBottom: 100,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: "#111111",
    color: "#111111"
  },
  button: {
    backgroundColor: "#ff5252",
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10
  },
  buttonText: {
    color: "#ececec",
    fontSize: 16,
    fontWeight: "bold"
  }
});
