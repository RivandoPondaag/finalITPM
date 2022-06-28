import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Gap, Header, TextInput } from '../../components'

const Oprator = ({navigation, route}) => {
  const uri = route.params.uri;
  const [kapasitas, setKapasitas] = useState(null);
  const [presentase, setPresentase] = useState(null);
  const [judul, setJudul] = useState(null);
  const [pengumuman, setPengumuman] = useState(null);

  const Kirim_onPress = async() => {
    const reqOpt = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        kapasitas: kapasitas,
        presentase: presentase,
        judul: judul,
        pengumuman: pengumuman,
      }),
    };

    const req = await fetch(`${uri}postPengumuman?kapasitas=${kapasitas}&presentase=${presentase}&judul=${judul}&pengumuman=${pengumuman}`, reqOpt);
    const res = await req.json();
    if(res.status === 'success') {
      // kode jika berhasil terkirim
    }
    else {
      // kode jika tidak berhasil terkirim
    }
  };

  return (
    <ScrollView style={{flex:1,backgroundColor:'white'}}>
     <Header title='Operator'/>
    <Gap height={10}/>
     <View style={{flex:1,}}>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Jumlah Kapasitas'placeholder='Masukan Jumlah Kapasitas' onChangeText={setKapasitas} />
     </View>
     <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10,}}>
     <TextInput title='Presentase'placeholder='Masukan Jumlah Presentase' onChangeText={setPresentase} />
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
     <Button title="Keluar" color='#8D92A3' onPress={()=>navigation.navigate('SignIn', {uri: uri})}/>
     </View>
     <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('EditOprator', {uri: uri})}>
     <View style={{alignItems:'flex-end',marginRight:10,marginTop:5}}>
      <Text style={{fontWeight:'bold',color:'#83078EB0'}}>Edit Username dan Password</Text>
     </View>
     </TouchableOpacity>
     </View>
    </ScrollView>
  )
}

export default Oprator

const styles = StyleSheet.create({})