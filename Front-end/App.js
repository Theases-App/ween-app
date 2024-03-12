import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import EventCntry from './country/EventCntry.jsx';
import IndexC from './country/IndexC.jsx';
import Nav from './Nav/Nav.jsx';
import Search from './Search/Search.jsx';
import Home from './Homes.jsx';
import Allcategory from './Search/Allcategory.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin from './signin & signup/signin.js';
import Signup from './signin & signup/signup.js';
const Stack= createNativeStackNavigator()

import Index from './signin & signup/index.js';
import Homepage from "./homepage/index.js"


export default function App() {
  
  return (



<NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
        
          name="home"
          component={Home}
          options={{ headerShown: false
          
          }
        }
        
        />
        <Stack.Screen
          name="IndexC"
          component={IndexC}
          options={{ headerShown: false

          }
        }
        />
        <Stack.Screen
          name="EventCntry"
          component={EventCntry} 

        />

     
        <Stack.Screen
          name="search"
          component={Search} 

        />
        <Stack.Screen
          name="signin"
          component={Signin} 

        />
        <Stack.Screen
          name="signup"
          component={Signup} 

        />

       
        <Stack.Screen
          name="Allcategory"
          component={Allcategory}
       options={{headerTitle:"Allcategory",headerTintColor:"#ff5252",headerStyle: {
        backgroundColor: "#111111", 
      },
      headerTitle: () => (
        <Image
          source={require("./idk/image.png")} 
          style={{ width: 100, height: 40 }} 
        />

      ),
    }
   

    // <View  style={{backgroundColor:"#111111",flex:1,justifyContent:"center",alignItems:"center"}} >
     
   
  //  <TouchableOpacity style={{color:"#ff0000"}} >
    

      
      }
        />
      </Stack.Navigator>


     </NavigationContainer>




   

  
     
      
     
    
     
  )

      // </TouchableOpacity>
    
  

    //  </View>
     
  ;

}

