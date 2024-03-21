import { View,FlatList,ViewPropTypes,Text,ScrollView,TouchableOpacity,Image,Pressable} from 'react-native';
 import React from 'react'; 
 import{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import {IP} from "../ip.json"
import { useNavigation } from '@react-navigation/native'

const clubbing=()=>{
  const Navigation = useNavigation()
    const [refresh, setRefresh] = useState(true);
    const [data,setData]=useState([])
    const clubing=[]
    useEffect(()=>{
        axios.get(`http://${IP}:8080/event/getall`).then((res)=>{
             setData(res.data)
        }).catch((err)=>{
            console.log(err,"err")
        })
          },[refresh])

          data.map((e)=>{
            if (e.eventcategory === "clubbing" && e.adminmessage == 1){
              clubing.push(e)
            } })
        
return (


<View style={{backgroundColor:"#2E2D29",flex:1}}>
<View style={{marginTop:80}}>

<View>
  

  <Text style={{fontFamily:"Inter-Black",fontSize:24,color:"#ececec",alignItems:"center",marginTop:-20,marginLeft:150}}> Clubbing </Text>
 
  </View>


<ScrollView  style={{marginBottom:50,marginTop:20}}>



<View>
     


   <FlatList 
       data={clubing}  renderItem={({item})=><View>
      
         <ScrollView>


<TouchableOpacity style={{justifyContent:"space-between",padding:5}} onPress={()=>{Navigation.navigate('eventdetail', {item})}}>

<View style={{backgroundColor:"white",borderColor:"black",borderRadius:20,height:270,width:420,marginTop:-5}} >  

       <Image style={{
        height:250,
        width:400,
        borderRadius:15,
        marginLeft:10,
        marginTop:10
       
        }}source={{uri:item.image}}/>

  <View style={{backgroundColor:"#ececec",borderColor:"black",marginTop:-60,height:70,borderRadius:20}}>

      <Text style={{color:"#ff5252",
             fontFamily:"Inter-Black",
             fontSize:20,
             marginLeft:20,
             marginTop:8
    
       }}>{item.eventname}</Text>


        <Text style={{color:"#111111",
            fontFamily:"Inter-Black",
            fontSize:20,
            marginLeft:21,
        
    
         }}>{item.placename}</Text>


  <Text style={{color:"#111111",
           marginLeft:310,
           marginTop:-24,
           fontFamily:"Inter-Black",
           fontSize:17,
      
      }}>{item.price+" "+"Dt"}</Text>


 <Text style={{color:"#ff5252",
           marginLeft:280,
           marginTop:-46,
           fontFamily:"Inter-Black",
            fontSize:16,
      
      }}>{"Starting From "}</Text>
   </View>

     </View>
    </TouchableOpacity>
    </ScrollView>
       </View>}

      />
</View>
</ScrollView>

</View>
</View>
)

}
export default clubbing