import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'

const Oprator = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
     <Header title='Operator'/>
    <Gap height={10}/>
     <View style={{flex:1,}}>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Jumlah Kapasitas'placeholder='Masukan Jumlah Kapasitas dalam %'/>
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Judul Pengumuman'placeholder='Masukan Judul Pengumuman'/>
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Isi Pengumuman'placeholder='Masukan isi Pengumuman'/>
     </View>
     <View style={{paddingHorizontal:10,paddingTop:40,}}>
     <Button title='Kirim'/>
     </View>
     <View style={{paddingHorizontal:10,paddingTop:10}}>
     <Button title="Keluar" color='#8D92A3' onPress={()=>navigation.navigate('SignIn')}/>
     </View>
     </View>
    </View>
  )
}

export default Oprator

const styles = StyleSheet.create({})