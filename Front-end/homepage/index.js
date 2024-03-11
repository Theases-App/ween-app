import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import Homepage from "./homepage"
import Clubbing from "./clubing"
import Concerts from "./concerts"
import Sports from "./sports"
import Hotelresto from "./hotelresto"
import Spectacles from './spectacles';
export default function index() {
  return (

    <View >
   
  
   <TouchableOpacity style={{color:"#ff0000"}} >
    
      </TouchableOpacity>
      {/* <Clubbing/> */}
      {/* <Sports/> */}
      {/* <Concerts/> */}
      <Homepage/>
      {/* <Hotelresto/> */}
      {/* <Spectacles/> */}

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