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
import Eventdetails from "./postdetails/Eventdetails.jsx"
import Ticket from "./postdetails/ticketdetails.jsx"
import Clubbing from "./homepage/clubing.js"
import Concerts from './homepage/concerts.js';
import Hotelresto from './homepage/hotelresto.js';
import Spectacles from './homepage/spectacles.js';
import Sports from './homepage/sports.js';
import addevent from './components/addevent.jsx'
import EditUser from './components/edituser.jsx';
import EditPictureAndCountry from './components/editpictureANDcountry.jsx';
import UpdatingCountry from './components/updatingcountry.jsx';
import Wishlist from './components/wishlist.jsx';
const Stack= createNativeStackNavigator()

import Index from './signin & signup/index.js';
import Homepage from "./homepage/index.js"





export default function App() {
  
  return (



<NavigationContainer>
      <Stack.Navigator>



      { <Stack.Screen
          name="signup"
          component={Signup} 

        /> }
      { <Stack.Screen
          name="signin"
          component={Signin} 

        /> }
              <Stack.Screen name='Your Favorites' component={Wishlist}>

</Stack.Screen>
       
          <Stack.Screen
        
        name="ticketdetails"
        component={Ticket}
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
        
        name="home"
        component={Home}
        options={{ headerShown: false
        
        }
      }
      
      />
           <Stack.Screen
        
        name="Clubbing"
        component={Clubbing}
        options={{ headerShown: false
        
        }
      }
      
      />
           <Stack.Screen
        
        name="Concerts"
        component={Concerts}
        options={{ headerShown: false
        
        }
      }
      
      />
         <Stack.Screen
        
        name="Hotelresto"
        component={Hotelresto}
        options={{ headerShown: false
        
        }
      }
      
      />
         <Stack.Screen
        
        name="Spectacles"
        component={Spectacles}
        options={{ headerShown: false
        
        }
      }
      
      />
      <Stack.Screen
        
        name="Sports"
        component={Sports}
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
          name="eventdetail"
          component={Eventdetails} 

        />
{/*    
          <Stack.Screen name="Edit" component={EditUser} >
         
          
       
       </Stack.Screen> */}
        
     
    
      
       
        {/* <Stack.Screen name="Edit" component={EditUser} >
         
          
       
       </Stack.Screen> */}
       {/* <Stack.Screen name="add event" component={addevent} ></Stack.Screen> */}
       {/* <Stack.Screen name="pick your city" component={UpdatingCountry} >
          
       
          </Stack.Screen> */}
            {/* <Stack.Screen name="Edit Profile Picture" component={EditPictureAndCountry} >
          
       
          </Stack.Screen> */}
        


       
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

