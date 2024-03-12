import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import Edituser from './components/edituser';
import EditpictureANDcountry from './components/editpictureANDcountry.jsx';
//khalil
import Index from './signin & signup/index.js';
import Homepage from "./homepage/index.js"
import Addevent from './components/addevent.jsx';
import editpictureANDcountry from './components/editpictureANDcountry.jsx';
import Updatingcountry from './components/updatingcountry.jsx';
export default function App() {
  return (

    <View  style={{flex:1,justifyContent:"center",alignItems:"center"}} >
     
   
   <TouchableOpacity style={{color:"#ff0000"}} >
     
      

      </TouchableOpacity>
      {/* <Updatingcountry/> */}
      {/* <EditpictureANDcountry/> */}
      {/* <Edituser  />  */}
      {/* <Addevent/> */}
    
    {/* <Homepage/> */}
    {/* <Index/> */}

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
    width:2, 
    height: 3, 
  },
});