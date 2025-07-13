import { StyleSheet, Text, View , Image, TextInput, KeyboardAvoidingView, Platform , Button, Alert, TouchableOpacity} from 'react-native'
import historyimage from '../assets/history.png'
import {Link} from 'expo-router'
import { cache, useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import * as SQLite from 'expo-sqlite';


const getDate = async ()=> {
  try{
      console.log('start data besse man .... ')
      const db = await SQLite.openDatabaseAsync('nowdata')
      await db.execAsync(`
      CREATE TABLE IF NOT EXISTS hall (id INTEGER PRIMARY KEY NOT NULL, hall TEXT NOT NULL, location TEXT NOT NULL , howMnayAre TEXT);
      `)
  }catch(e){
    console.error('my  bad ' , e)
  }
 }





const home = ({navigation }) => {
  const router = useRouter()
  const [hall , sethall] = useState('')
  const [many , setmany] = useState('')
  const [location , setlocation] = useState('')
  const [people , setpeople] = useState('')
  const [fetchdata , setdb] = useState('')
  const [list , setlist] = useState([])
useEffect(() => {
  const showdata = async ()=> {
  try{
      console.log('start shoing the data from databease wait .... ')
  const db = await SQLite.openDatabaseAsync('nowdata')

   const all = await db.getAllAsync('SELECT * FROM hall');
   let n = 0
   setdb([...fetchdata , ...all]) 
  // console.log(all)
    console.log('done with dat ')

  }catch(e){
    console.error('my mstic ' , e)
  }
 }
showdata()
}, [])

  const alloj= {'hall' : hall , 'howMnayAre' :  people , 'location' :  location , 'many' :  many , 'date' :  new Date() }

   const insertData = (async (alloj)=> {
  try{
      console.log('start insertData.... ')
  const db = await SQLite.openDatabaseAsync('nowdata')
    const result = await db.runAsync('INSERT INTO hall ( hall, location , howMnayAre) VALUES (?, ? , ?  )', alloj.hall, alloj.location , alloj.many);
    console.log(result.lastInsertRowId, result.changes);
    console.log('done with dat ')
  }catch(e){
    console.error('my mstic ' , e)
  }
 })


  const add = () =>  {
    getDate()
    if (hall && many && location){
      const getdate = () => {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        Alert.alert('اضافة' , ' تمت الاضافة بنحاح')

        return 'يوم'+ day +' شهر'+ month
      } 
    
        setlist([...list ,
      {'name' : hall, 'many' : many, 'location' : location, 'people' : people, 'date' : getdate()} 
    ]) 
    }
  }  
// console.log(fetchdata ? fetchdata : 'ther no hall add yet ...')

  return (
    <>
  
    <Text style={style.title}> حساب الحفلات </Text>
<Button onPress={() => insertData(alloj)} title='insert'></Button>
<Button title='showdata'></Button>
 <View style={style.containerText}>
    <KeyboardAvoidingView style={{flexDirection : 'row' , flexWrap : 'wrap' , justifyContent: 'center'}} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <TextInput style={style.textInput} value={hall}  onChangeText={ t => {sethall(t)}}  placeholder=' اسم القاعة'/>
        <TextInput style={style.textInput} value={many} keyboardType="numeric" onChangeText={ t => {setmany(t)}} placeholder='عدد السخانات'/>
        <TextInput style={style.textInput} value={location} onChangeText={ t => {setlocation(t)}} placeholder='الموقع'/>
        <TextInput style={style.textInput} value={people} keyboardType="numeric" onChangeText={ t => {setpeople(t)}} placeholder='عدد الاشخاص'/>
      </KeyboardAvoidingView>
      <TouchableOpacity style={style.bbb} onPress={add}>
        <Text style={{textAlign : 'center' , color : '#fff'}}>حفظ</Text> 
        </TouchableOpacity>
    </View>
    <View style={style.container}>
<Link
  style={style.link}
  href=""
  onPress={() =>  router.push({ pathname: '/hall', params: { list : JSON.stringify(fetchdata) } })}
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
  width : 100, 
  backgroundColor : 'coral',
  borderRadius : 10, 
  padding : 5 ,
  color : 'white',
  fontWeight : 'bold'

  
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
    color :  '#000',
    textAlign : 'center',
    margin : 10, 
    backgroundColor : '#ddd' ,
    padding : 8,
    borderColor : 'red',
    width : 120,
    borderRadius :10 ,
  }, 
  containerText : {
    flex : 1 , 
   
    justifyContent : "center" , 
    alignItems : 'center' , 
    marginTop : 50 ,
  }
})
