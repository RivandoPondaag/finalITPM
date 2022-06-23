import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, TextInput } from '../../components'

const Oprator = ({navigation, route}) => {
  const uri = route.params.uri;
  const [kapasitas, setKapasitas] = useState(null);
  const [judul, setJudul] = useState(null);
  const [pengumuman, setPengumuman] = useState(null);

  const Kirim_onPress = async() => {
    const reqOpt = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        kapasitas: kapasitas,
        judul: judul,
        pengumuman: pengumuman,
      }),
    };

    const req = await fetch(`${uri}postPengumuman?kapasitas=${kapasitas}&judul=${judul}&pengumuman=${pengumuman}`, reqOpt);
    const res = await req.json();
    if(res.status === 'success') {
      // kode jika berhasil terkirim
    }
    else {
      // kode jika tidak berhasil terkirim
    }
  };

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
     <Header title='Operator'/>
    <Gap height={10}/>
     <View style={{flex:1,}}>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Jumlah Kapasitas'placeholder='Masukan Jumlah Kapasitas dalam %' onChangeText={setKapasitas} />
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Judul Pengumuman'placeholder='Masukan Judul Pengumuman' onChangeText={setJudul} />
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Isi Pengumuman'placeholder='Masukan isi Pengumuman' onChangeText={setPengumuman} />
     </View>
     <View style={{paddingHorizontal:10,paddingTop:40,}}>
     <Button title='Kirim' onPress={Kirim_onPress}/>
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