import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const hall = (props) => {
  return (
    <View>
      <Text style={styles.hall}>   {props.hall.name}</Text>
      <Text style={styles.hall}>   {props.hall.many}</Text>
      <Text style={styles.hall}>   {props.hall.location}</Text>
      <Text style={styles.hall}>   {props.hall.people}</Text>  
      <Text style={styles.hall}>   {props.hall.date}</Text>  
    </View>
  )
}

export default hall

const styles = StyleSheet.create({ 
  hall : {
    backgroundColor : 'green' , 
    fontSize : 19 ,
    borderRadius : 30,
    color : '#fff', 
    width : 100,
    textAlign : 'center'
  }
})