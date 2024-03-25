import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { IP } from "../ip.json";
import { FontAwesome5 } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const EditUser = () => {
  const [iduser, setIdUser] = useState(null); 
  const [userData, setUserData] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
   
    const fetchUserId = async () => {
      try {
        const id = await AsyncStorage.getItem("id");
        if (id !== null) {
          setIdUser(id); 
        }
      } catch (error) {
        console.error("Error retrieving user ID:", error);
      }
    };

    fetchUserId(); 

   
    if (iduser) {
      axios.get(`http://${IP}:8080/user/getuser/${iduser}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [iduser, refresh]);

  const deleteUser = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            axios.delete(`http://${IP}:8080/user/delete/${iduser}`)
              .then((res) => {
                console.log("User has been deleted");
               
              })
              .catch((error) => {
                console.log(error);
              });
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  const updateUser = () => {
    const updatedUserData = {
      age: parseInt(inputValues.age),
      fullname: inputValues.fullname,
      password: inputValues.password,
    };

    axios.put(`http://${IP}:8080/user/editprofile/${iduser}`, updatedUserData)
      .then((res) => {
        console.log('updated');
        setIsModalVisible(false);
        setIsBlurred(false);
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openModal = () => {
    setInputValues({
      age: userData.age ? userData.age.toString() : '',
      fullname: userData.fullname || '',
      password: userData.password || '',
    });
    setIsModalVisible(true);
    setIsBlurred(true);
  };

  const cancelUpdate = () => {
    setIsModalVisible(false);
    setIsBlurred(false);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.editProfileText}>Edit Profile</Text>
    <View style={{backgroundColor:"#DDD6D1",padding:30, marginTop:"10%",borderWidth:2,borderColor:"#ececec"}}>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{userData.emailphone}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Fullname:</Text>
        <Text style={styles.info}>{userData.fullname}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>{userData.age}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={openModal}>
        <FontAwesome5 name="edit" size={16} color="#fff" />
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
      </View>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={inputValues.fullname}
            onChangeText={(text) => setInputValues({ ...inputValues, fullname: text })}
            placeholder="Fullname"
          />
          <TextInput
            style={styles.input}
            value={inputValues.age}
            onChangeText={(text) => setInputValues({ ...inputValues, age: text })}
            placeholder="Age"
          />
          <View style={styles.passwordInput}>
            <FontAwesome5 name="lock" size={16} color="#ccc" />
            <TextInput
              style={{ ...styles.input, marginLeft: 10 }}
              value={inputValues.password}
              onChangeText={(text) => setInputValues({ ...inputValues, password: text })}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={updateUser}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={cancelUpdate}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {isBlurred && <View style={styles.blurBackground} />}
    </View>
   


   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingTop: 60,
    
  },
  editProfileText: {
    fontSize: 40,
    color: "#ececec", 
    fontFamily:'sans-serif-light',
    alignSelf: 'center',
    marginBottom: 15,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  info: {
    fontSize: 16,
    color: '#000',
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff5252',
    alignSelf: 'center',
    marginBottom: 15,
  },
  deleteButton: {
    alignSelf: 'center',
    marginLeft:'66%'
  },
  deleteButtonText: {
    color: 'red',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#ff5252',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ddd',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default EditUser;