import { View,FlatList,ViewPropTypes,Text,ScrollView,StyleSheet,TouchableOpacity,Image,Pressable,TouchableWithoutFeedback} from 'react-native';

 import{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import Button from 'react-native-button';
import {IP} from "../ip.json"
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;





const Postdetails=({route})=>{
   const [currentLocation, setCurrentLocation] = useState(null);
   const [initialRegion, setInitialRegion] = useState(null);
   const[user_iduser,setuser_iduser]=useState(0)
   const[event_idevent,setevent_idevent]=useState(0)
 
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
       console.log("longitude:", location.coords.longitude);
 
       
     };
 
     getLocation();
   }, []);
   const addtofavorite=()=>{
    const obj={
      user_iduser:user_iduser,
      event_idevent:event_idevent
    }
    axios.post(`http://${IP}:8080/favorite/addfavorit`,obj).then((res)=>{
      console.log("liked");
    })
    .catch((error)=>{
      console.log(error);
    })
   }







  
const item = route.params.item 

  const Navigation = useNavigation()
  const [chat,setChat]=useState(true)
  const [selectedIcon, setSelectedIcon] = useState('');
  const [chating,setChating]=useState("")
  const [text,setText]=useState("Buy a Ticket")

   useEffect(async()=>{
   const x= await AsyncStorage.getItem("id")
   axios.get(`http://${IP}:8080/res/getall/${x}/${item.idevent}`)
     .then((res) => {
       setChating(res.data)
       if(res.data[0]){
        setText("Join Chat Room")
       }
       else {
        setText("Buy a Ticket")
       }
     }).catch((err) => {
       console.log(err)
     })
   },[])

   console.log(text);

  
   const chatting= async()=>{
       if (text==="Join Chat Room"){
        Navigation.navigate("pay")
        }
        else if (text==="Buy a Ticket"){
         Navigation.navigate("ticketdetails",{item})
    
      }
    }
   
const handleIconPress = (iconName) => {
  addtofavorite()
   setSelectedIcon(iconName)
 }


 const iconStyle = (iconName) => ({
   color: selectedIcon === iconName ? '#ff5252' : 'white',
 })


return (
   <View style={{backgroundColor:"#111111",flex:1}}>
<View style={{marginTop:120}}>
<Text style={{position:"absolute",marginTop:-60,marginLeft:140,color:"white",fontFamily:"Inter-Black",fontSize:23}}>  {item.eventname}</Text>
</View>

<ScrollView>

   <View style={{marginBottom:300}}>
   <Image style={{marginLeft:0,height:280,width:420,borderRadius:10}} source={{uri:item.image}}/>
</View>

  

    <View style={{backgroundColor:"black",borderColor:"black",marginTop:-340,height:160,borderRadius:5,width:420}}>

<Text style={{color:"#ff5252",
       fontFamily:"Inter-Black",
       fontSize:20,
       marginLeft:20,
       marginTop:8

 }}>{item.eventname}</Text>


  <Text style={{color:"white",
      fontFamily:"Inter-Black",
      fontSize:20,
      marginLeft:21,
  

   }}>{item.placename}</Text>

<View style={{marginTop:-40,marginLeft:200}}>
<TouchableWithoutFeedback onPress={() => handleIconPress('heart')} > 
        <Icon name="heart" style={iconStyle('heart')} size={30} />
      </TouchableWithoutFeedback>
</View>


<Text style={{color:"white",
     marginLeft:310,
     marginTop:-19,
     fontFamily:"Inter-Black",
     fontSize:17,

}}>{item.price+" "+"Dt"}</Text>


<Text style={{color:"#ff5252",
     marginLeft:280,
     marginTop:-44,
     fontFamily:"Inter-Black",
      fontSize:16,

}}>{"Starting From"}</Text>

<View style={{marginTop:40,marginLeft:20}}>
        <Icon name="calendar" style={iconStyle('calendar')} size={25} />
</View>

<Text style={{color:"white",
     marginLeft:70,
     marginTop:-24,
     fontFamily:"Inter-Black",
      fontSize:16,

}}>{item.date}</Text>

<Text style={{color:"white",
     marginLeft:330,
     marginTop:-20,
     fontFamily:"Inter-Black",
      fontSize:16,

}}>{item.location}</Text>

<View>
   <TouchableOpacity onPress={()=>{chatting()}}>


    <Button style={{marginTop:20,
  fontFamily:"Inter-Black",
  backgroundColor:"#111111",color:"#ff5252",
  width:300,height:32,
  marginLeft:70,fontSize:20,
  borderColor:"#ff5252",
  borderRadius:10
  }} > {text} </Button> 
  
 

<View style={{marginTop:-27,marginLeft:120}}>
<Icon name="check" style={iconStyle('check')} size={20} />
</View>
</TouchableOpacity>
</View>


</View>

<View style={{backgroundColor:"#ececec",borderColor:"#ececec",marginTop:0,height:490,borderRadius:5,width:420}}>
 <Text style={{marginTop:10,fontSize:20,marginLeft:20,marginRight:20,justifyContent:"center",alignContent:"center",alignItems:"center"}}>* {item.description}</Text>
 <Text style={{marginTop:10,fontSize:20,marginLeft:20,justifyContent:"center",alignContent:"center",alignItems:"center"}}>*{item.description}</Text>




<View style={styles.container}>
       {initialRegion && (
         <MapView style={styles.map} initialRegion={initialRegion}>
           {currentLocation && (
             <Marker
               coordinate={{
                 latitude: currentLocation.latitude,
                 longitude: currentLocation.longitude,
               }}
               title="your location
               "
             />
           )}
         </MapView>
       )}
     </View>











<View>


<View style={{marginTop:22,marginLeft:10,color:"black"}}>
<Icon name="phone" style={{color:'black'}} size={20} />
</View>
<Text style={{marginLeft:50,marginTop:-22,fontSize:18}}>{ item.phonenumber}</Text>



<View style={{marginLeft:10,marginTop:22,color:"black"}}>
<Icon name="facebook" style={{color:'black'}} size={20} />
</View>
<Text style={{marginLeft:50,marginTop:-22,fontSize:18}} onPress={()=>{}}>{ "See on Facebook"}</Text>



<View style={{marginLeft:10,marginTop:22,color:"black"}}>
<Icon name="instagram" style={{color:'black'}} size={20} />
</View>
<Text style={{marginLeft:50,marginTop:-22,fontSize:18}}>{ "See on Instagram"}</Text>
</View>

</View>

</ScrollView> 


   </View>
)
   

    
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
    paddingTop:250
   },
   map: {
     width: "70%",
     height: "100%",
     paddingBottom:200,
     marginBottom: 400,
     borderRadius: 20,
   },
 });

export default Postdetails;




