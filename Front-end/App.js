import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';

export default function App() {
  return (

    <View  style={{backgroundColor:"#111111",flex:1,justifyContent:"center",alignItems:"center"}} >
       <Image style={{marginTop:"-180%",height:100,width:100}} source={require("./idk/image.png")} ></Image>
    <StatusBar style="auto" />
   
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