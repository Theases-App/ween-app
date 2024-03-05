import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image,TextInput} from 'react-native';
import {useState,useEffect} from 'react';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import DropDownPicker from 'react-native-dropdown-picker';
import {NavigationContainer} from '@react-navigation/native';
import IP from "../ip.json"
export default function Signup() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Tunis', value: 'Tunis'},
      {label: 'Hammamet', value: 'Hammamet'},
      {label: 'Sousse', value: 'Sousse'},
      {label: 'Sfax', value: 'Sfax'},
      {label: 'Djerba', value: 'Djerba'},
      {label: 'Other', value: 'Other'}
    ]);
    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState('')
    const [role, setRole] = useState('client') 
    const [wrong, setWrong] = useState(true)
    const [refresh, setRefresh] = useState(true)

    // const navigate = useNavigate()
    // const defaultTheme = createTheme()
    const obj={fullname: fullname,
        emailphone: email,
        password: psw,
        age:age,
        country:value,
        role:role}

        const headers = {
            "Content-Type": "application/json",
          };
         
    const handleSubmit = (data) => {
      
        axios.post(`http://${IP}:8080/user/signup`,data)
        .then((res)=>{
        console.log("done",res.data)
          //    / navigate('/signin')
       }
        )
        .catch((err)=>{
            console.log(err)
        })
    }
 
  return (

   
    <View style={{justifyContent:'center',alignItems:"center",flex:1}}>
        
         <View style={{justifyContent:'center',alignItems:"center",position:"absolute",top:100}}> 
       <Text style={{color:"#ff5252",fontFamily:"sans-serif-light",fontWeight: 'bold',fontSize:26}}> Inscription </Text>
       </View>
       
       <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
       <ScrollView style={{marginTop:180,flex:1}}>
   <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={"#111111"}
        onChangeText={setFullname}
        value={fullname}
        keyboardType="email-address"
        autoCapitalize="none"
      />
        <TextInput
        style={styles.input}
        placeholderTextColor={"#111111"}
        placeholder="Age"
        onChangeText={setAge}
        value={+age}
       
      />
        <TextInput
        style={styles.input}
        placeholderTextColor={"#111111"}
        placeholder="Email Adress Or Phone Number"
        onChangeText={setEmail}
        value={email}
       
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={"#111111"}
        placeholder="Password"
        onChangeText={setPsw}
        value={psw}
        secureTextEntry
      />
     
     <DropDownPicker style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='Select your Country'
    />
   
    <View  style={{top:90,height:200,width:150,marginLeft:80,flex:1}}>
      <Button  onPress={()=>handleSubmit(obj
            ,console.log('click'))}
       
       style={{borderColor:"black"}}
      color="#ff5252"
      title="Confirm "
     />
     </View>
     </ScrollView>
    
      </View > 
  
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
      marginBottom:35
    },
    button: {
     paddingBottom:200,
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