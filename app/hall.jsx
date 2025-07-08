import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import Namehall from '../components/hall'
import { useLocalSearchParams } from 'expo-router';
import { NativeStackView } from '@react-navigation/native-stack';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
const Contact = () => {

  const {list} = useLocalSearchParams()


const makeObj = (JSON.parse(list))


  return (
    <View style={styles.container}>
      <Text style={styles.title }>قائمة الحفلات</Text>
      <View style={styles.halls}>
        <Namehall hall={makeObj.map(obj => {return obj})} />
      </View>
        <Link  href='/'> back home  </Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container : {
    flex : 1, 
    alignItems : 'center', 
    justifyContent : "center"
  },
  halls : {
    flex : 1 ,
    border : 1 ,
     borderColor :'black' ,
  },
  title:{
    fontSize: 23,
    margin : 10 ,
  
    fontWeight : 'bold',
    color : 'red',
  }
})