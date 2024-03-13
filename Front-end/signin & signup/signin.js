 import { StatusBar } from 'expo-status-bar';
 import axios from 'axios';
 import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image,TextInput} from 'react-native';
 import {useState,useEffect} from 'react';
 import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
 import DropDownPicker from 'react-native-dropdown-picker';
 import { SocialIcon } from 'react-native-elements'
 import { useNavigation } from '@react-navigation/native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import {IP} from "../ip.json"

 export default function Signin() {
  const navigation=useNavigation()
   
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [wrong, setWrong] = useState(true);
  const [refresh, setRefresh] = useState(true);

 
  // const navigation = useNavigation();

const obj={emailphone:email,password:psw}

  const handleSubmit = async (data) => {
    if (data.emailphone === "ween@rbk.tn" && data.password === "12345678") {
      // navigation.navigate("/admin");
      console.log("welcome to admin dashboard")
    } else {
      await axios.post(`http://${IP}:8080/user/signin`, data)
        .then((result) => {
         console.log(result.data)
          author(result.data.iduser, result.data.token, result.data.role);
          console.log("entered")
        })
        .catch((err) => {
          setWrong(false);
          console.log(err);
        });
    }
  };

const  author = async (id, token, role) => {
    const data = { token: token };
    await axios.post(`http://${IP}:8080/token/add/${id}`, data)
      .then(() => {
        axios.get(`http://${IP}:8080/block/check/${id}`)
          .then(async(result) => {
            console.log(result);
            if (result.data) {
              alert(
                "you are blocked by the admin, please contact with him on tel: 20 048 441"
              );
            } else {
              AsyncStorage.setItem("id",toString(id))
              if (role === "client") {
                // navigation.navigate("/");
                console.log("done")
              }
      }})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } 
 
  return (

   
    <View style={{justifyContent:'center',alignItems:"center"}}>
         <View style={{justifyContent:'center',alignItems:"center",position:"absolute",top:60}}> 
       <Text style={{color:"#ff5252",fontFamily:"sans-serif-light",fontWeight: 'bold',fontSize:26,position:'sticky',top:0}}> Connection </Text>
       </View>
     <ScrollView style={{marginTop:140}}>
       <View style={{justifyContent:'center',alignItems:"center",marginTop:40}}>
      
 
        <TextInput
        style={styles.input}
        placeholderTextColor={"#111111"}
        placeholder="Email Adress Or Phone Number"
        onChangeText={setEmail}
        value={email}
         
      />
    
    {wrong ? (
           <TextInput
           onPress={()=>{!refresh}}
          style={styles.input}
        placeholderTextColor={"#111111"}
        placeholder="Password"
        onChangeText={setPsw}
         value={psw}
         secureTextEntry
        refresh
                    
     />
        ) : (
     <TextInput
     onPress={()=>{!refresh}}
       autoFocus={true}
      style={styles.input2}
    
      placeholderTextColor={"#111111"}
      placeholder="Password"
      onChangeText={setPsw}
      value={psw}
      secureTextEntry
   
                  />
                  )
                  }
    
     
    <View  style={{top:5 ,height:100,width:150}}>
      <Button  onPress={()=>handleSubmit(obj)}
       style={{borderColor:"black"}}
      color="#ff5252"
      title="Confirm "
     />
     </View>
      
      </View > 
      <View style={{justifyContent:'center',alignItems:"center",position:"absolute",top:260,left:130}}> 
       <Text style={{color:"#ececec",fontFamily:"sans-serif-light",fontWeight: 'bold',fontSize:15}}> Or </Text>
       </View>

       <View  style={{width:280,justifyContent:'space-between',gap:10,left:10}}>
     
    
     <SocialIcon  style={{height:50}} onPress={()=>{}}
  title='Sign In With Facebook'
  button
  type='facebook'
/>
  
<SocialIcon  
    style={{height:50}}   onPress={()=>{}}
   title='Sign In With Google'
  button
  light
  type='google'
/>
<SocialIcon
    style={{height:50}}   onPress={()=>{}}
   title='Sign In With Instagram'
  button
  type='instagram'
/>
<View style={{top:20,gap:20,left:60,flex:1,height:100}}> 
       <Text style={{color:"#ececec",fontFamily:"sans-serif-light",fontWeight: 'bold',fontSize:12,left:12}}> I don't Have An Account </Text>
       <Text style={{color:"#ececec",fontFamily:"sans-serif-light",fontWeight: 'bold',fontSize:12}}> Oups ! I forget My Password </Text>
       </View>
      
     </View>
     </ScrollView>
     </View>
  );

      }
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropdown: {
        marginTop:10,
        height: 10,
        width:300,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        borderColor:"white"
      },
    input: {
    
    backgroundColor:"#ececec",
      width: 300,
      height: 40,
      marginVertical: 10,
      padding: 10,
      borderColor: 'white',
      borderWidth: 1.5,
      borderRadius: 5,
      color:"black",
      fontFamily:"sans-serif-light",
      marginBottom:30
    },
    input2: {
    
      backgroundColor:"#ececec",
        width: 300,
        height: 40,
        marginVertical: 10,
        padding: 10,
        borderColor: 'red',
        borderWidth: 1.5,
        borderRadius: 5,
        color:"black",
        fontFamily:"sans-serif-light",
        marginBottom:30
      },
    button: {
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
     color:"#ff5252",
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
