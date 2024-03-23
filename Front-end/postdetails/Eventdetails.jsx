import { View,FlatList,ViewPropTypes,Text,ScrollView,ActivityIndicator,StyleSheet,TouchableOpacity,Image,Pressable,TouchableWithoutFeedback} from 'react-native';
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
  
// const theme = useColorScheme();
// const isDarkTheme = theme === 'dark';


const Postdetails=({route})=>{
   const [currentLocation, setCurrentLocation] = useState(null);
   const [initialRegion, setInitialRegion] = useState(null);
   const [loading,setLoading]=useState(true)


 
   const item = route.params.item 
   useEffect(()=>{
    const test=async()=>{
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
    }
       test()
      },[])

   useEffect(() => {
     const getLocation = async () => {
       let { status } = await Location.requestForegroundPermissionsAsync();
       setLoading(false)
       if (status !== "granted") {
         console.log("Permission to access location was denied");
         return;
       }
 
       let location = await Location.getCurrentPositionAsync({});
       setCurrentLocation(location.coords);
 
       setInitialRegion({
         latitude:item.map ,
         longitude: item.map2,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       });
 
       
       console.log("Latitude:", location.coords.latitude);
       console.log("longitude:", location.coords.longitude);
       console.log( "this is the lat",item.map)
     };
 
     getLocation();
   }, []);

//    if (loading){
//     return (
//           <View style={[styles.container, styles.horizontal]}>
// <ActivityIndicator style={{ marginLeft:10,marginTop:-400}} size="large" color="#ff5252" />
// </View>
//     )
//     }
   const addtofavorite = async () => {
    try {
      const userId = await AsyncStorage.getItem("id");
      const obj = {
        user_iduser: userId,
        event_idevent: item.idevent
      };
  
      axios.post(`http://${IP}:8080/favorite/addfavorit`,obj)
        .then((res) => {
          console.log("Liked");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  const Navigation = useNavigation()
  const [selectedIcon, setSelectedIcon] = useState('');
  const [chating,setChating]=useState("")
  const [text,setText]=useState("Buy a Ticket")


  
   const chatting=()=>{
       if (text==="Join Chat Room"){
        Navigation.navigate("chat")
        }
        else if (text==="Buy a Ticket"){
         Navigation.navigate("ticketdetails",{item})
    
      }
    }
   
const handleIconPress = (iconName) => {
   setSelectedIcon(iconName)
   addtofavorite()
 }


 const iconStyle = (iconName) => ({
   color: selectedIcon === iconName ? '#ff5252' : 'white',
 })
 const iconStyle2 = (iconName) => ({
  color: selectedIcon === iconName ? '#ff5252' : '#ff525',
})

return (
   <View style={{backgroundColor:"#2E2D29",flex:1}}>
<View style={{marginTop:120}}>
<Text style={{position:"absolute",marginTop:-60,marginLeft:150,color:"white",fontFamily:"Inter-Black",fontSize:23}}>  {item.eventname}</Text>
</View>
<ScrollView>

   <View style={{marginBottom:300}}>
   <Image style={{marginLeft:0,height:280,width:430,borderRadius:10}} source={{uri:item.image}}/>
</View>

  

    <View style={{backgroundColor:"#111111",borderColor:"black",marginTop:-340,height:180,borderRadius:5,width:430}}>

<Text style={{color:"#ff5252",
       fontFamily:"Inter-Black",
       fontSize:20,
       marginLeft:20,
       marginTop:8

 }}>{item.eventname}{console.log("this is the item",item)}</Text>


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


<Text style={{
     color:"white",
     marginLeft:310,
     marginTop:-16,
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

<Text style={{
     color:"white",
     marginLeft:70,
     marginTop:-24,
     fontFamily:"Inter-Black",
      fontSize:16,

}}>{item.date}</Text> 

<View style={{marginTop:-20,marginLeft:380,color:"red"}}>
<Icon name="search-location" style={{color:"white"}} size={15} />
</View>
<Text style={{color:"white",
     marginLeft:330,
     marginTop:-20,
     fontFamily:"Inter-Black",
      fontSize:16,

}}>{item.location}</Text>


<View>
   <TouchableOpacity  onPress={()=>{chatting()}}>

<View style={{ backgroundColor:"#EAEAEA", width:260,height:32,
borderRadius:10,
marginTop:25,left:85}}>
    <Text style={{marginTop:2,
    padding:2,
  fontFamily:"Inter-Black",
 color:"#ff5252",
 
  marginLeft:80,fontSize:20,
  
  }} > {text} </Text> 

</View>

<View style={{marginTop:-27,marginLeft:125}}>
<Icon name="check" style={iconStyle2('check')} size={20} />
</View>
</TouchableOpacity>
</View>


</View>

<View style={{backgroundColor:"#ececec",borderColor:"#ececec",marginTop:0,height:490,borderRadius:5,width:430}}>

 <Text style={{marginTop:10,fontSize:20,marginLeft:20,marginRight:20,justifyContent:"center",alignContent:"center",alignItems:"center"}}>* {item.description}</Text>

 <View style={styles.container}>
       {initialRegion && (
         <MapView style={styles.map} initialRegion={initialRegion}>
           {currentLocation && (
             <Marker
            
               coordinate={{
                  latitude:currentLocation.latitude ,
                longitude: currentLocation.longitude,
               }}
               title="your location"
               
             />
           )}

           <Marker    coordinate={{latitude: item.map,
            longitude: item.map2}}/>

           
         </MapView>
       )}
     </View>

<View style={{marginTop:-20,marginBottom:20}}>


<View style={{marginTop:-30,marginLeft:10,color:"black"}}>
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
    paddingTop:200,
    marginTop:"30%",
   },
   map: {
     width: "100%",
     height: 250,
    
     marginBottom: 400,
     borderRadius: 20,
   },
   textD:{
    color:"black"
   },
   textL:{
  color:"white"
   }
 });

export default Postdetails;




