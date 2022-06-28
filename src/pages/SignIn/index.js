import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Logo } from '../../assets'

const uri = 'http://192.168.43.219:3000/';

const SignIn = ({navigation}) => {
  const [NIK, setNIK] = useState('');
  const [password, setPassword] = useState('');

  const SignIn_onPress = async() => {
    const req = await fetch(`${uri}signIn?NIK=${NIK}&password=${password}`);
    const res = await req.json();
    if(res.status === 'success') {
      if(res.desc.type === 'User') {
        // kalo akun terdaftar sbg user
        navigation.navigate('Menu', {uri: uri, data: res.desc});
      }
      // kalo akun terdaftar sbg operator
      else if(res.desc.type === 'Operator') {
        navigation.replace('Oprator', {uri: uri});
      }
    }
    else if(res.status === 'error') {
      if(res.message === 'Akun tidak terdaftar.') {
        // kalo akun belum terdaftar
        console.log(`Akun tidak terdaftar`);
      }
      else {
        // kalo jadi error lain
      }
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In"/>

      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
        <Logo/>
        </View>
      <TextInput title="NIK" placeholder ="Type Your NIK" onChangeText={setNIK} />

      <Gap height={16}/>
      <TextInput title="Password" placeholder ="Type Your Password" onChangeText={setPassword} secureTextEntry/>
      <Gap height={24}/>
      <Button title="Sign In" onPress={SignIn_onPress}/>
      <Gap height={24}/>
      <Button title="Create New Account" color='#8D92A3' onPress={()=>navigation.navigate('SignUP', {uri: uri})}/>
      <Gap height={10}/>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Guest', {uri: uri})}>
      <View style={styles.guestTextWrapper}>
      <Text style={styles.text}>Login as guest</Text>
      </View>
      </TouchableOpacity>
      
      </View>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({

  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 24,
    paddingTop: 26,
  },
  page:{
    flex:1,
  },
  logoWrapper:{
    alignItems: 'center',
  },
  guestTextWrapper:{
    alignItems: 'flex-end',
    
  },
  text:{
    color: '#83078EB0',
  }
})