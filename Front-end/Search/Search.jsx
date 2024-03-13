import React from 'react';
  import { View ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

;
import {useNavigation} from'@react-navigation/native'

function Search() {
  const navigation=useNavigation()

  return (

    
    <View style={{ position: 'absolute', top:60, right: 20 }}> 
     <View >
      <TouchableOpacity onPress={()=>{navigation.navigate("Allcategory")}}>
       <Icon name="search" style={{ color: 'black' }} size={30} />
      </TouchableOpacity>
      </View>
      </View>
    
  );
}

export default Search;
