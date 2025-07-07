import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title }>contact page  </Text>
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
  title:{
    fontSize: 23,
    margin : 10 ,
    fontWeight : 'bold',
    color : 'red',
  }
})