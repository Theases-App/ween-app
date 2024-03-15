import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { CardField ,useConfirmPayment} from '@stripe/stripe-react-native';
import { Button } from 'react-native-elements';



const API_URL = "http://localhost:8080"
function StripeApp() {

    const [Email,setEmail]=useState("")   
    const [Carddetailes,setCarddetailes]=useState("")
    const {ConfirmPayment,loading}=useConfirmPayment() 

const fetch_secret_client= async ()=>{
const response = await fetch (`${API_URL}   /
create-payment-intent`,{
    method:"POST",
    // headers:{
    //     "Content-Type"
    // }

}


)

}


    const handelPayPress = async ()=>{
if (!Carddetailes?.complet || !Email) {
    Alert.alert("please enter complete card detailes and Email ") 
    return    
}
const billingDetailes={
        Email:Email
}

    }
  return (
    <View style={styles.contenier}>

        <TextInput 
        autoCapitalize='none'
        placeholder='Email'
        keyboardType='email-adress'
        onChange={value=>setEmail(value.nativeEvent.text)}  style ={styles.input}/>

<CardField postalCodeEnabled={true}
placeholders={{
   number: "4242 4242 4242 4242"
}}

style={styles.Cardcontainer} 
onCardChange={cardDetails=>{
    setCarddetailes(cardDetails)
}}
/>
<Button onPress={handelPayPress} title="pay" disabled = {loading}></Button>

    </View>

  );
}
export default StripeApp
const styles = StyleSheet.create({
    contenier:{
    flex:1,
    margin:20,
    justifyContent:"center",
    paddingBottom:400
    },
    
    input:{
        backgroundColor:"white",
        borderRadius:8,
        width:200,
        height:40,
        fontSize:20,
        padding:10,
  
    
    },
    card:{
        backgroundColor:"white",
    },
    Cardcontainer:{
        backgroundColor:"white",
        height:50,
        marginVertical:30,
         position:"center" ,
         justifyContent:"center",
         marginBottom:200,
         borderRadius:8
    }
    
    
    })