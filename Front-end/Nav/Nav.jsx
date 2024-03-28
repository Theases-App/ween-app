import React, { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableWithoutFeedback, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  axios  from 'axios';
import { IP } from '../ip.json';

const Nav = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState('home');
  const [notificationCount, setNotificationCount] = useState(0); 

  useEffect(()=>{
    axios.get(`http://${IP}:8080/notification/notif`).then((res)=>{
      const notseen=res.data.filter(e=>e.seen==="not seen")
      setNotificationCount(notseen.length)
      console.log(notseen,"dadada");
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
  };

  const iconStyle = (iconName) => ({
    color: selectedIcon === iconName ? '#ff5252' : 'white',
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 60,
        alignItems: 'center',
        backgroundColor: "#111111",
        paddingBottom: 40,
        borderRadius: 8,
        width: 600,
        height: 90,
        paddingTop: 20,
        paddingLeft: 15,
        marginTop: -70
      }}
    >

      <TouchableWithoutFeedback onPress={() => { navigation.navigate("your favorite"), handleIconPress('heart') }}>
        <View>
          <Icon name="heart" style={iconStyle('heart')} size={30} />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => { navigation.navigate("IndexC"), handleIconPress('star') }}>
        <View>
          <Icon name="star" style={iconStyle('star')} size={30} />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {navigation.navigate("home"), handleIconPress('home')}}>
        <Icon name="home" style={iconStyle('home')} size={30} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => { navigation.navigate("Notifications"), handleIconPress('bell') }}>
        <View>
          <Icon name="bell" style={iconStyle('bell')} size={30} />
          {notificationCount > 0 && (
            <View style={{
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: 'red',
              borderRadius: 10,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ color: 'white', fontSize: 12 }}>{notificationCount}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("signin")}>
        <View>
          <Icon name="user" style={iconStyle('user')} size={30} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Nav;
