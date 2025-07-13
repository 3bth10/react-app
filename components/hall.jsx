import { StyleSheet, Text, View } from 'react-native'

const hall = (obj) => {
  let num = 0;
  let ff = 0;
  const now = obj.hall.map(el =>  {
    num++ 
     ff = el.location == 'مكة' ? 50 : 0
     el.many > 11 ? ff*2 : ff
     return el } )

  return (
    <View style={styles.containerhall}>
      <Text> عدد الحفلات {num} </Text>

{     now.map((el , i)=> {
   return <View style={styles.con }>
   
     <Text style={styles.hall}>  {el.hall}</Text> 
     <Text style={styles.hall}>  {el.location}</Text> 
     <Text style={styles.hall}>  {el.howMnayAre}</Text> 
     <Text style={styles.hall}>  {el.people}</Text> 
     <Text style={styles.hall}>  {el.date}</Text> 
     <Text style={styles.hall}>  {ff}</Text> 
     </View>
})}

    </View>  )}

export default hall

const styles = StyleSheet.create({ 
containerhall : {
  
  borderColor : 'back' ,
  alignItems : 'center',
  justifyContent : 'center',
  padding : 10 ,
  margin : 5 , 
 

},
header : {
  flexDirection: 'row',
  margin : 5 , 
  padding : 5, 
  backgroundColor : 'coral',
},

  con : {
    flexDirection : 'row',
    margin : 5,   padding : 5 ,
    borderWidth : 1 ,
    borderStyle : 'dashed',
    borderColor: 'black',
    borderRadius : 10 ,
    color : '#fff',
    alignItems : 'center'
  
  },
  hall : {

    backgroundColor : '#ddd',
    padding : 5 ,
    borderRadius : 10 ,
    margin : 2 , 
    
  }
})