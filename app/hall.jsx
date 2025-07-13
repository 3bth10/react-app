import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native';
import Namehall from '../components/hall'
import { useLocalSearchParams } from 'expo-router';
import { NativeStackView } from '@react-navigation/native-stack';
const Contact = () => {

  const {list} = useLocalSearchParams()

// console.log(list , 'from hall')
const makeObj = (JSON.parse(list))


  return (
    

   
    <View style={styles.container}>
       <Text style={styles.title }>قائمة الحفلات</Text>
      <ScrollView justifyContent={'center'}>
     
      <View style={styles.halls}>
        <Namehall hall={makeObj.map(obj => {return obj})} />
        
      </View>
       </ScrollView>
          <Link style={styles.title }  href='/'> back home  </Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container : {
    flex : 1, 
    alignItems : 'center', 
    justifyContent : "center",
  
  },
  halls : {
    flex : 1 ,
     padding : 10 , 
  
     
  },
  title:{
    fontSize: 23,
    margin : 10 ,
    fontWeight : 'bold',
    color : 'coral',
  }
})