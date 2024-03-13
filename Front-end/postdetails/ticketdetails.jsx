import { View,FlatList,ViewPropTypes,Text,ScrollView,TouchableOpacity,Image,Pressable,TouchableWithoutFeedback} from 'react-native';
 import React from 'react'; 
 import{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import {IP} from "../ip.json"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from 'react-native-button'
const Postdetails=({route})=>{
   
const item =route.params.item
const [data,setData]=useState([])

useEffect(()=>{
  axios.get(`http://${IP}:8080/cat/getall/${item.idevent}`).then((res)=>{
    setData(res.data)
  }).catch((err)=>{
    console.log(err)
  })
})

  const [selectedIcon, setSelectedIcon] = useState('');

 
const handleIconPress = (iconName) => {
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

  

    <View style={{backgroundColor:"black",borderColor:"black",marginTop:-340,height:120,borderRadius:5,width:420}}>

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
<TouchableWithoutFeedback onPress={() => handleIconPress('heart')}>
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


</View>

<View style={{backgroundColor:"#ececec",borderColor:"#ececec",marginTop:0,height:420,borderRadius:5,width:420}}>
 <Text style={{marginTop:10,fontSize:20,marginLeft:20,justifyContent:"center",alignContent:"center",alignItems:"center"}}>{}</Text>





</View>

</ScrollView>


   </View>
)
   

    
}

export default Postdetails;




