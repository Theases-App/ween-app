import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { IP } from "../ip.json";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import * as ImagePicker from 'expo-image-picker';
import EditUser from './edituser';
import Addevent from './addevent';
import UpdatingCountry from './updatingcountry';
import { useNavigation } from '@react-navigation/native'

const EditPictureAndCountry = () => {
  const [userData, setUserData] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [iduser, setIdUser] = useState(null); 
  const [gallery, setGallery] = useState(null);
  const navigation = useNavigation()
  useEffect(() => {
    
    AsyncStorage.getItem("id")
      .then((id) => {
        setIdUser(id); 
        axios.get(`http://${IP}:8080/user/getuser/${iduser}`)
          .then((res) => {
            setUserData(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.error("Error retrieving user ID:", error));
  }, []);

  const updateImage = () => {
    const obj = {
      image: newImage
    }
    axios.put(`http://${IP}:8080/user/editimage/2`, obj)
      .then((res) => {
        console.log("updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: "-40%", color: '#ff5252', fontFamily: 'sans-serif-light', fontSize: 40 }}>Profile</Text>
      {userData && (
        <View style={styles.userInfoContainer}>
          <View style={styles.userImageContainer}>
            <TouchableOpacity style={styles.cameraIcon} onPress={pickImage}>
              <MaterialIcons name="camera-alt" size={24} color="white" />
            </TouchableOpacity>
            {newImage && <Image source={{ uri: newImage }} style={styles.userImage} />}
          </View>
          <Text style={styles.fullname}>{userData.fullname}</Text>
        </View>
      )}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("EditUser")}>
          <MaterialIcons name="person" size={30} color="black" />
          <Text style={styles.actionText}>Edit User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("UpdatingCountry")}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text style={styles.actionText}>City</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "50%", marginTop: 8 }}>
        <TouchableOpacity style={styles.actionButtonevent} onPress={() => navigation.navigate("Addevent")}>
          <MaterialIcons name="playlist-add" size={35} color="black" />
          <Text style={styles.actionText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: "40%"

  },
  userImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#999999',
  },
  userImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cameraIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  fullname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ececec',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: "10%",
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  actionButtonevent: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default EditPictureAndCountry;
