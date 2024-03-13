import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView, Modal } from "react-native";
import axios from "axios";
import { IP } from "../ip.json";
import Map from '../Map/Map.jsx'
const Addevent = () => {
  const [eventname, setEventName] = useState("");
  const [eventcategory, setEventCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedInput, setSelectedInput] = useState("");

  const eventCategories = ["Sports", "Concerts", "Hotel & resto", "Clubbing", "Spectacles"];
  const countries = ["Hammamet", "Tunis", "Sousse", "Sfax", "Djerba"];

  const add = () => {
    const eventData = {
      eventname: eventname,
      eventcategory: eventcategory,
      image: image,
      price: price,
      country: country,
      location: location,
    };

    axios
      .post(`http://${IP}:8080/event/add/2`, eventData)
      .then((res) => {
        console.log("Event added successfully");
        setEventName("");
        setEventCategory("");
        setImage("");
        setPrice(0);
        setCountry("");
        setLocation("");
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectInput = (input) => {
    setSelectedInput(input);
    if (input === "eventcategory") {
      setOptions(eventCategories);
    } else if (input === "country") {
      setOptions(countries);
    }
    setModalVisible(true);
  };

  const selectItem = (item) => {
    if (selectedInput === "eventcategory") {
      setEventCategory(item);
    } else if (selectedInput === "country") {
      setCountry(item);
    }
    setModalVisible(false);
  };

  const cancelSelection = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start an Event</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          placeholder="Event name"
          placeholderTextColor="#999999"
          onChangeText={(val) => setEventName(val)}
        />

        <TouchableOpacity
          style={styles.input}
          onPress={() => selectInput("eventcategory")}
        >
          <Text>{eventcategory || "Select Event Category"}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Image URL"
          placeholderTextColor="#999999"
          onChangeText={(val) => setImage(val)}
        />

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#999999"
          onChangeText={(val) => setPrice(val)}
        />

        <TouchableOpacity
          style={styles.input}
          onPress={() => selectInput("country")}
        >
          <Text>{country || "Select Country"}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#999999"
          onChangeText={(val) => setLocation(val)}
        />


<Map/>

      </ScrollView>
      
      <TouchableOpacity style={styles.addButton} onPress={add}>
        <Text style={styles.buttonText}>Add Event</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionItem}
                onPress={() => selectItem(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={cancelSelection}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff", 
    position: 'relative', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100, 
  },
  input: {
    borderWidth: 1, 
    borderColor: "#000000", 
    color: "#000000", 
    padding: 8,
    margin: 10,
    width: 250,
    borderRadius: 20,
  },
  title: {
    position: 'absolute', 
    top: 50,
    fontSize: 20,
    color: "#000000", 
  },
  addButton: {
    backgroundColor: "#ff5252",
    padding: 10,
    borderRadius: 20,
    marginBottom: 80,
  },
  buttonText: {
    color: "#ffffff", 
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    width: 200,
    alignItems: "center"
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#000000",
  }
});

export default Addevent;
