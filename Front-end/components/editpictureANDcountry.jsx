import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { IP } from "../ip.json";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const EditPictureAndCountry = () => {
  const [userData, setUserData] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [iduser, setIdUser] = useState(null); 

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
    axios.put(`http://${IP}:8080/user/editimage/${iduser}`, obj)
      .then((res) => {
        console.log("updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <View style={styles.container}>
      {userData && (
        <View style={styles.userInfoContainer}>
          <View style={styles.userImageContainer}>
            <Image
              style={styles.userImage}
              source={{ uri: userData.image }}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.cameraIcon} onPress={() => console.log('Camera icon clicked')}>
              <MaterialIcons name="camera-alt" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.fullname}>{userData.fullname}</Text>
        </View>
      )}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="person" size={30} color="black" />
          <Text style={styles.actionText}>Edit User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text style={styles.actionText}>City</Text>
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
    backgroundColor: '#f0f0f0',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  userImage: {
    width: '100%',
    height: '100%',
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
    color: '#333',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
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
  actionText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default EditPictureAndCountry;
