import React from 'react';
  import { View ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

;
import {useNavigation} from'@react-navigation/native'

function Search() {
  const navigation=useNavigation()

  return (

    
    <View > 
     <View style={{ position: 'absolute', top:-100, right: 20 }}>

      <TouchableOpacity onPress={()=>{navigation.navigate("Allcategory")}}>
       <Icon name="search" style={{ color: 'white' }} size={30} />
      </TouchableOpacity>
      
      </View>
      
      <View style={{position:"absolute",top:-100,left:30}} >
<TouchableOpacity onPress={()=>{navigation.navigate("Addevent")}}>
 <Icon name="plus" style={{ color: 'white' }} size={30} />
</TouchableOpacity>

</View>
      </View>
    
  );
}

export default Search;
