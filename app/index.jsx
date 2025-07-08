import { StyleSheet, Text, View , Image, TextInput, KeyboardAvoidingView, Platform , Button} from 'react-native'
import logo from '../assets/110.png'
import historyimage from '../assets/history.png'
import {Link} from 'expo-router'
import Hall from '../components/hall'
import homeHall from '../app/hall'
import { useState } from 'react'
import { useRouter } from 'expo-router'

const home = ({navigation }) => {
  const router = useRouter()
  

  const [hall , sethall] = useState()
  const [many , setmany] = useState()
  const [location , setlocation] = useState()
  const [people , setpeople] = useState()
  const [list , setlist] = useState([])

  const add = () =>  {
    if (hall && many ){
      const getdate = () => {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        return 'يوم'+ day +' شهر'+ month
      } 
        setlist([...list ,
      {'name' : hall, 'many' : many, 'location' : location, 'people' : people, 'date' : getdate()} 
    ]) 
    }
  }  


  return (
    <>
    <Text style={style.title}> حساب الحفلات </Text>

 <View style={style.containerText}>
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <TextInput style={style.textInput} onChangeText={ t => {sethall(t)}}  placeholder='Enter nema of the hall '/>
        <TextInput style={style.textInput} keyboardType="numeric" onChangeText={ t => {setmany(t)}} placeholder='عدد السخانات'/>
        <TextInput style={style.textInput} onChangeText={ t => {setlocation(t)}} placeholder='الموقع'/>
        <TextInput style={style.textInput} keyboardType="numeric" onChangeText={ t => {setpeople(t)}} placeholder='عدد الاشخاص'/>
      </KeyboardAvoidingView>
      <Button color={'coral'} title='حفظ' onPress={add}/>
    </View>
    <View style={style.container}>
<Link
  style={style.link}
  href=""
  onPress={() => router.push({ pathname: '/hall', params: { list : JSON.stringify(list) } })}
>
  <Image source={historyimage} style={{ width: 40, height: 40 }} />
  سجل الحفلات
</Link>  
  </View>
  
    </>

  )
}

export default home
const style = StyleSheet.create ({
  container : {
    flex : 1, 
    alignItems : 'center', 
    justifyContent : "center"
  },
   
bbb:{
  backgroundColor : 'red',
  color : 'green',
}, 
  title:{
   
    fontSize: 33,
    margin : 20,
    fontWeight : 'bold',
    color : 'coral',
    textAlign : "center"
  } , 
  link : {
  
    textAlign : 'cnter' ,
    alignItems : 'center', 
    width : 200,
    color: "coral",
    fontSize : 18 , 
    fontWeight : 'bold' , 
    margin: 20 , 
  }, 
  img : {
    width : 100,
    height : 100,
    margin : 20 , 
    padding : 10 ,
    borderRadius : 20 , 
  },
  textInput : {
    flex  : 1, 
    textAlign : 'center',
    margin : 10, 
    backgroundColor : '#ddd' ,
    padding : 8,
    borderColor : 'red',
    
  }, 
  containerText : {
    flex : 1 , 
    justifyContent : "center" , 
    alignItems : 'center' , 
    marginTop : 50 ,
  }
})
