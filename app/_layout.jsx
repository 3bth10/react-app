import { StyleSheet, Text, View ,  } from 'react-native'
import{ Slot, Stack} from 'expo-router'


const RootLayout = () => {

  return (
    <View style={{flex : 1 , }} >
    <Stack screenOptions={{headerStyle :{backgroundColor : '#ddd' },
    headerTintColor : 'brown'
    }} >
        <Stack.Screen name='index' options={{title : 'Home'}} />
        <Stack.Screen name='hall' options={{title : 'Hall hostry'}} />
    </Stack>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})