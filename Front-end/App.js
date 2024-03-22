


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

import Rooms from "./chat/Rooms.jsx";
import Chat from "./chat/Chat.jsx";

import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Rooms">
      <Stack.Screen
        name="Chat"
        component={Chat}
         />
      <Stack.Screen
        name="Rooms"
        component={Rooms}
         />
      </Stack.Navigator>
    </NavigationContainer>
  //   <View  style={{backgroundColor:"#111111",flex:1,justifyContent:"center",alignItems:"center"}} >
  //      <Image style={{position:"absolute",top:10,height:100,width:100}} source={require("./idk/image.png")} ></Image>
  
   
  //  <TouchableOpacity style={{color:"#ff0000"}} >
       
      

  //     </TouchableOpacity>
    
    
 
  //    </View>
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