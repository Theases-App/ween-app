import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View,Button ,TouchableOpacity,Image} from 'react-native';
import IndexC from './country/IndexC.jsx';
import EventCntry from './country/EventCntry.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack= createNativeStackNavigator()
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      
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
 
      </Stack.Navigator>

     </NavigationContainer>



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