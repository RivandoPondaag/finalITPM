import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput,Button } from '../../components'


const EditOprator = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white",flex:1,}}>
    <Header title='Edit Operator' onBack={()=>navigation.goBack()}/>
    <View style={{flex:1,backgroundColor:'white'}}>
    <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Edit Username'placeholder='Masukan username yang baru' />
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Edit Password'placeholder='Masukan password yang baru' />
     </View>
     <View style={{paddingHorizontal:10,paddingTop:10}}>
     <Button title="Simpan" color='#83078EB0' />
     </View>

     
    </View>
    </View>
  )
}

export default EditOprator

const styles = StyleSheet.create({})