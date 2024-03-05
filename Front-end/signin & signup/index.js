import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import Signup from "./signup"
import Signin from './signin';
export default function index() {
  return (

    <View >
        <Image style={{position:"absolute",top:-150,height:100,width:100,left:97}} source={require("../idk/image.png")} ></Image>
  
   
   <TouchableOpacity style={{color:"#ff0000"}} >
    
      </TouchableOpacity>
     
    <Signin/>
 
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