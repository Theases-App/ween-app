import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import axios from "axios";
import { IP } from "../ip.json";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native-elements";

const Addevent = () => {

  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [eventname, setEventName] = useState("");
  const [eventcategory, setEventCategory] = useState("");
  const [gallery,setGallery]=useState(null)
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedInput, setSelectedInput] = useState("");
  const [inputs, setInputs] = useState([{ category: '', price: '' }]);

  const eventCategories = [
    "sports",
    "concerts",
    "hotel & resto",
    "clubbing",
    "spectacles",
  ];
  const countries = ["Hammamet", "Tunis", "Sousse", "Sfax", "Djerba"];
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });

      console.log("Latitude:", location.coords.latitude);
      console.log("Longitude:", location.coords.longitude);
    };

    getLocation();
  }, []);
  useEffect(()=>{
    (async()=>{
      const galleryStatus=await ImagePicker.requestMediaLibraryPermissionsAsync()
      setGallery(galleryStatus.status === 'granted')
    })()
  },[])

  const pickImage=async()=>{
    let result =await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1,
    });
    console.log(result,'res');
 
    if(!result.canceled){
      setImage(result.assets[0].uri)
      console.log('image',image);
    }
    console.log('ima',image);
  }

  if(gallery===false){
    return <Text>No access to Internal Storage</Text>
  }

  const add = (id) => {
    const eventData = {
      eventname: eventname,
      eventcategory: eventcategory,
      image: image,
      price: price,
      country: country,
      location: location,
      map:selectedCoordinates.latitude,
      map2:selectedCoordinates.longitude
    };

    axios
      .post(`http://${IP}:8080/event/add/${id}`, eventData)
      .post(`http://${IP}:8080/event/add/${id}`, eventData)
      .then((res) => {
        console.log("Event added successfully",res.data);
        setEventName("");
        setEventCategory("");
        setImage("");
        setPrice(0);
        setCountry("");
        setSelectedCoordinates("")
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


  // const selectInput = (input) => {
  //   setSelectedInput(input);
  //   if (input === "eventcategory") {
  //     setOptions(eventCategories);
  //   } else if (input === "country") {
  //     setOptions(countries);
  //   }
  //   setModalVisible(true);
  // };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedCoordinates(coordinate);
    Alert.alert(
      "Location Selected",
      `Latitude: ${coordinate.latitude}, Longitude: ${coordinate.longitude}`,
      [{ text: "OK" }]
    );
    console.log(coordinate.latitude,"ahwaaaq",coordinate.longitude)
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

  const handleAddInput = () => {
    setInputs([...inputs, { category: '', price: '' }]);
  };

  const handleCategoryChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index].category = text;
    setInputs(newInputs);
  };

  const handlePriceChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index].price = text;
    setInputs(newInputs);
  };

  
  // const selectImage = () => {
  //   const options = {
  //     title: 'Select Image',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
    

  //   ImagePicker.showImagePicker(options, async(response) => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setImage(response.uri);
  //     }
  //   });


  //   console.log(options)
  // } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Event</Text>

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

        {/* <TouchableOpacity
          style={styles.input}
          onPress={selectImage}
        >
          <Text>{image ? "Image Selected" : "Select Image"}</Text>
        </TouchableOpacity> */}
        {/* <Button title='Pick Image' onPress={()=>pickImage()} />
        {image && <Image source={{uri:image}} />} */}
          {/* <TextInput
          style={styles.input}
          placeholder="Image URL"
          placeholderTextColor="#999999"
          onChangeText={(val) => setImage(val)}
        /> */}

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#999999"
          onChangeText={(val) => setPrice(val)}
        />
        <View style={{ marginTop: "2%" }} placeholder="image">
          <TouchableOpacity style={styles.imagebutton} onPress={()=>pickImage()}>
          { console.log('ima',image)}
          
           {image && <Image style={{width:"full",height:50}} source={{uri:image}} />}
            {/* <Text style={styles.image}>Image</Text> */}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.input}
          onPress={() => selectInput("country")}
        >
          <Text style={{ color: "#111111" }}>
            {country || "Select Country"}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#999999"
          onChangeText={(val) => setLocation(val)}
        />
       
        
        <View>
          {inputs.map((input, index) => (
            <View style={styles.containerCategory} key={index}>
              <View style={styles.column}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Category"
                  value={input.category}
                  onChangeText={text => handleCategoryChange(text, index)}
                />
              </View>
              <View style={{flex:1}}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Price"
                  value={input.price}
                  onChangeText={text => handlePriceChange(text, index)}
                  keyboardType="numeric"
                />
              </View>
              {index === inputs.length - 1 && (
                <TouchableOpacity onPress={handleAddInput}>
                  <Icon name="plus" size={20} color="#ff5252" style={styles.icon} />
                </TouchableOpacity>
              )}
            </View>


      ))}
      </View>
      {initialRegion && (
         <MapView
         style={styles.map}
         initialRegion={initialRegion}
         onPress={handleMapPress}
       >
         {currentLocation && (
           <Marker
             coordinate={{
               latitude: currentLocation.latitude,
               longitude: currentLocation.longitude,
             }}
             title="Your location"
           />
         )}
         {selectedCoordinates && (
           <Marker
             coordinate={{
               latitude: selectedCoordinates.latitude,
               longitude: selectedCoordinates.longitude,
             }}
             title="Selected Location"
             pinColor="red"
           />
         )}
       </MapView>

      )}
      
        <View style={{ marginTop: "2%" }}>
          <TouchableOpacity style={styles.addButton} onPress={add}>
            <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      

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
    backgroundColor: "#111111",
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    color: "#111111",
    padding: 9,
    margin: 10,
    width: 350,
    borderRadius: 20,
    backgroundColor: "#ececec",
  },
  title: {
    top: 50,
    fontSize: 40,
    color: "#ececec",
    fontFamily: "sans-serif-light",
  },
  addButton: {
    backgroundColor: "#ff5252",
    padding: 10,
    marginTop:-300,
    borderRadius: 20,
    width: "60%",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#6F6C6A",
    opacity: 0.95,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionItem: {
    color: "#ececec",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    width: 200,
    alignItems: "center",
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: { 
    color: "#ececec",
  },
containerCategory: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  // marginRight:150,
},
// column: {
//   flex: 1,
// },
inputs: {
  width:167,
  paddingHorizontal: 10,
  borderWidth:1,
  borderColor: "#ffffff",
  color: "#111111",
  borderRadius: 20,
  backgroundColor: "#ececec",
  padding: 7,
  
}, 
icon: {
  // alignSelf: 'center',
  marginLeft:145,
  marginTop:13,
},
image:{

},
imagebutton:{
  borderWidth: 1,
  borderColor: "#ffffff",
  color: "#111111",
  margin: 10,
  width: 350,
  borderRadius: 20,
  backgroundColor: "#ececec",
  padding:20
},
map: {
  width: "100%",
  height: "40%",
  marginBottom: 0 ,
  borderRadius: 20,

},

});

export default Addevent;

