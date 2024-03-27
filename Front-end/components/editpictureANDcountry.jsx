import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { IP } from "../ip.json";
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import EditUser from './edituser';
import Addevent from './addevent';
import UpdatingCountry from './updatingcountry';
import { useNavigation } from '@react-navigation/native'
import Nav from '../Nav/Nav';
const EditPictureAndCountry = () => {
  const [userData, setUserData] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [gallery, setGallery] = useState(null);
  const navigation = useNavigation()
  useEffect(() => {
    axios.get(`http://${IP}:8080/user/getuser/2`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGallery(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewImage(result.uri);
    }
  }

  if (gallery === false) {
    return <Text>No access to Internal Storage</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: "-10%", color: '#ff5252', fontFamily: 'sans-serif-light', fontSize: 40 }}>Profile</Text>
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
        <View style={{marginTop:350,marginLeft:-100}}>
       <Nav/>
       </View>
        {/* <View style={{marginTop:-200}}> <Nav/></View> */}
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
