import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const hall = (obj) => {
  const now = obj.hall.map(el =>  {return el} )

  return (
    <View style={styles.containerhall}>
      
{     now.map((el , i)=> {
   return <View style={styles.con}>
     <Text style={styles.hall}>  {el.name}</Text> 
     <Text style={styles.hall}>  {el.location}</Text> 
     <Text style={styles.hall}>  {el.many}</Text> 
     <Text style={styles.hall}>  {el.people}</Text> 
     <Text style={styles.hall}>  {el.date}</Text> 
     </View>
})}
    </View>  )}

export default hall

const styles = StyleSheet.create({ 
containerhall : {
  flex : 1 , 
},
  con : {
   
    flexDirection : 'row'
  },
  hall : {
   
    backgroundColor : 'coral' , 
    fontSize : 14 ,
    borderRadius : 10,
    color : '#fff', 
    textAlign : 'center',
    margin : 5, 
    padding : 10 ,

  }
})