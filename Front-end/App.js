import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import EventCntry from './country/EventCntry.jsx';
import IndexC from './country/IndexC.jsx';
import Nav from './Nav/Nav.jsx';
import Search from './Search/Search.jsx';
import Home from './Homes.jsx';
import Allcategory from './Search/Allcategory.jsx';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
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
import Addevent from './components/addevent.jsx';
import EditUser from './components/edituser.jsx';
import UpdatingCountry from './components/updatingcountry.jsx'
import EditPictureAndCountry from './components/editpictureANDcountry.jsx';
import Noticket from './postdetails/Notickets.jsx';
import Pay from './postdetails/Pay.jsx';
import Rooms from "./chat/Rooms.jsx";
import Chat from "./chat/Chat.jsx";
import Date from "./Nav/Date.jsx"
import Dates from "./Nav/Dates.jsx"
import Wishlist from './components/wishlist.jsx';

const Stack= createNativeStackNavigator()

export default function App() {
  const Stack= createNativeStackNavigator()

  return (


<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="signup"
          component={Signup} 

        />
    
      <Stack.Screen
          name="signin"
          component={Signin} 
          

        />
      

        <Stack.Screen
        
          name="home"
          component={Home}
          options={{ headerShown: false
          
          }
        }   
        />
         <Stack.Screen
        
   
      <Stack.Screen
          name="signup"
          component={Signup} 

        />
          <Stack.Screen
          name="signin"
          component={Signin} 
          

        />
            <Stack.Screen
          name="eventdetail"
          component={Eventdetails} 
          options={{ headerShown: false
        
        }
      }   
      />
      <Stack.Screen
        
        name="ticketdetails"
        component={Ticket}
        options={{ headerShown: false
        
          }
        }
        />
           <Stack.Screen name='your favorite' options={{ headerShown: false
        
          }} component={Wishlist}></Stack.Screen>
       
        
     

     
     <Stack.Screen
        
        name="dates"
        component={Dates}
        options={{ headerShown: false
        
        }
      }
      
      />
        <Stack.Screen
        
        name="EditUser"
        component={EditUser}
        options={{ headerShown: false
        
        }
      }
      
      />
      
      <Stack.Screen
        
        name="Addevent"
        component={Addevent}
        options={{ headerShown: false
        
        }
      }   
      />
      
        <Stack.Screen
        
        name="Clubbing"
        component={Clubbing}
        options={{ headerShown:false}}  />
        <Stack.Screen
        
        name="Concerts"
        component={Concerts}
        options={{ headerShown: false
        
        }
      }/>
      <Stack.Screen
        
        name="Hotelresto"
        component={Hotelresto}
        options={{ headerShown: false
        
        }
        }/>
      <Stack.Screen
        
        name="Spectacles"
        component={Spectacles}
        options={{ headerShown: false }}/>

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
         options={{ headerShown: false }}
        />

         


         <Stack.Screen
          name="IndexC"
          component={IndexC} 
          options={{ headerShown: false

          }
        }
        />
        <Stack.Screen

       

          name="search"
          component={Search} 
        
        />

    
            
   
      <Stack.Screen
        name="Rooms"
        component={Rooms}

         />
      
        <Stack.Screen
          name="noticket"
          component={Noticket} 
          options={{ headerShown: false
        
          }
        }
        />
 <Stack.Screen
          name="date"
          component={Date} 
          options={{ headerShown: false
        
          }
        }
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

      
      } />
        

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