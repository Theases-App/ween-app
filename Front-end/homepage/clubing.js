import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';

export default function Clubing() {

    const [data,setData]=useState([])

      useEffect(()=>{
    axios.get("https://localhost:8080/event/getall").then((res)=>{
         setData(res.data)
         console.log(res.data)
    }).catch((err)=>{
        console.log(err,"err")
    })
      },[])
    
  return (

    <View >
    
   <TouchableOpacity style={{color:"#ff0000"}} >



    
      </TouchableOpacity>
     
    
 
     </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }

})
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor:"red",
    width:2, // Change the width as needed
    height: 3, // Change the height as needed
  },
});