import {useEffect,useState} from 'react'
import { View ,Text,TouchableOpacity} from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import Nav from './Nav';
function dates() {

  const [data,setData]=useState("")
  const Navigation = useNavigation()
  const [chosenDate, setChosenDate] = useState(new Date());

   useEffect(()=>{
  var date= new Date().getDate()
  var month = new Date().getMonth() +1
  var year = new Date().getFullYear() 
  var hours = new Date().getHours() 
  var min=new Date().getMinutes()
  var sec =new Date().getSeconds()
  setData(date+ " / " +month+ " / "+ year + " ")
},[])

   const [selected, setSelected] = useState('');
const x=selected
console.log(x);
  return (
    <View style={{backgroundColor:"#2E2D29",flex:1}}>

     <View style={{backgroundColor:"",marginTop:85,
    marginBottom:10}}>

     <Text style={{fontSize:26,
      fontFamily:"Inter-Black",color:"#ececec",
      marginLeft:125
      }}> Select A Date  </Text>

 <Calendar style={{marginTop:50,width:400,left:13,borderRadius:10}}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
    <TouchableOpacity onPress={()=>{Navigation.navigate("dates",{x})}}>
    
      <View style={{marginTop:60,backgroundColor:"#ff5252",
      height:40,width:200,marginLeft:110,borderRadius:20
    }}>
      <Text style={{fontSize:18,marginLeft:32,marginTop:8}}> See Date Events </Text>

      </View>
    </TouchableOpacity>
    
    </View>
    {/* <View style={{marginTop:270}}><Nav/></View> */}
    
     </View>
  )
}

export default dates
