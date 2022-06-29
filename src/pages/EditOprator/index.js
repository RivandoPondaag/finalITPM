import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Header, TextInput,Button } from '../../components'
import {showMessage} from 'react-native-flash-message'


const EditOprator = ({navigation, route}) => {
  const uri = route.params.uri;
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const Simpan_onPress = async() => {
    const reqOpt = {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    const req = await fetch(`${uri}updateOperator`, reqOpt);
    const res = await req.json();
    if(res.status === 'success') {
      // code klo berhasil ubah username & password
      showMessage({
        message: "Berhasil Diperbaharui",
        color:"white",
        backgroundColor:"#1C8E1A"
      });
      navigation.replace('SignIn');
    }
    else {
      // code klo gagal ubah username & password}
      showMessage({
        message: "Gagal Diperbaharui",
        color:"white",
        backgroundColor:"#D9435E"
      });
    };
  }

    
  return (
    <View style={{backgroundColor:"white",flex:1,}}>
    <Header title='Edit Operator' onBack={()=>navigation.goBack()}/>
    <View style={{flex:1,backgroundColor:'white'}}>
    <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Edit NIK'placeholder='Masukan NIK yang baru' onChangeText={val => setUsername(val)} />
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Edit Password'placeholder='Masukan password yang baru' onChangeText={val => setPassword(val)} />
     </View>
     <View style={{paddingHorizontal:10,paddingTop:10}}>
     <Button title="Simpan" color='#83078EB0' onPress={Simpan_onPress} />
     </View>

    
    </View>
    
    </View>
  )
}

export default EditOprator

const styles = StyleSheet.create({})