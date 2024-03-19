import {useEffect,useState} from 'react'
import { View ,Text} from 'react-native'


function dates() {
  const [data,setData]=useState("")

   useEffect(()=>{
  var date= new Date().getDate()
  var month = new Date().getMonth() +1
  var year = new Date().getFullYear() 
  var hours = new Date().getHours() 
  var min=new Date().getMinutes()
  var sec =new Date().getSeconds()
  setData(date+ " / " +month+ " / "+ year + " ")
},[])
   
  return (
    <View style={{color:"red",
    marginTop:280,marginBottom:10}}>

     <Text style={{fontSize:26,
      fontFamily:"Inter-Black",color:"#ececec",
      marginLeft:160
      }}> Current </Text>
  
     <Text style={{fontSize:26,fontFamily:"Inter-Black",
     color:"#ff5252",
     marginLeft:130
     }}>{data}</Text>
    </View>
  )
}

export default dates
