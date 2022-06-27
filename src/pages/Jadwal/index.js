import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons';

const Jadwal = ({navigation, route}) => {
  const uri = route.params.uri;
  const jenisKelamin = route.params.jenisKelamin;

  const [tempatDuduk, setTempatDuduk] = useState(null);
  const [kapasitas, setKapasitas] = useState(null);
  const [presentase, setPresentase] = useState(null);
  const [sesiPagi, setSesiPagi] = useState(null);
  const [sesiSiang, setSesiSiang] = useState(null);
  const [sesiMalam, setSesiMalam] = useState(null);
  const [lakiLaki, setLakiLaki] = useState(null);
  const [perempuan, setPerempuan] = useState(null);

  useEffect(() => {
    (async() => {
      const req = await fetch(`${uri}getJadwal`);
      const res = await req.json();
      if(res.status === 'success') {
        // jika backend berhasil mengirim jumlah kapasitas
        setKapasitas(res.desc.kapasitas);
        setPresentase(res.desc.presentase);
        setSesiPagi(res.desc.sesiPagi);
        setSesiSiang(res.desc.sesiSiang);
        setSesiMalam(res.desc.sesiMalam);
        setLakiLaki(res.desc.lakiLaki);
        setPerempuan(res.desc.perempuan);
      }
      else {
        // jika backend gagal mengirim jumlah kapasitas
      }
    })();
  }, [sesiPagi, sesiSiang, sesiMalam, lakiLaki, perempuan]);

  const PesanTempat_onPress = async(waktu=null) => {
    let reqOpt = {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: null,
    };

    if(waktu === `pagi`) {
      if(parseInt(tempatDuduk) + parseInt(sesiPagi) <= parseInt(kapasitas*presentase/100)) {
        // kalo tempat duduk yang dibooking tidak melebihi batas kapasitas
        reqOpt.body = JSON.stringify({
          sesiPagi: parseInt(tempatDuduk) + parseInt(sesiPagi),
          lakiLaki: (jenisKelamin === 'Laki-laki') ? lakiLaki+1 : lakiLaki,
          perempuan: (jenisKelamin === 'Perempuan') ? perempuan+1 : perempuan,
        });
        setSesiPagi(parseInt(tempatDuduk) + parseInt(sesiPagi));
        (jenisKelamin === 'Laki-laki') && setLakiLaki(parseInt(lakiLaki) + 1);
        (jenisKelamin === 'Perempuan') && setPerempuan(parseInt(perempuan) + 1);
      }
      else {
        // kalo tempat duduk yang dibooking melebihi batas kapasitas
      }
    }
    else if(waktu === `siang`) {
      if(parseInt(tempatDuduk) + parseInt(sesiSiang) <= parseInt(kapasitas)) {
        // kalo tempat duduk yang dibooking tidak melebihi batas kapasitas
        reqOpt.body = JSON.stringify({
          sesiSiang: parseInt(tempatDuduk) + parseInt(sesiSiang),
          lakiLaki: (jenisKelamin === 'Laki-laki') ? lakiLaki+1 : lakiLaki,
          perempuan: (jenisKelamin === 'Perempuan') ? perempuan+1 : perempuan,
        });
        setSesiSiang(parseInt(tempatDuduk) + parseInt(sesiSiang));
        (jenisKelamin === 'Laki-laki') && setLakiLaki(parseInt(lakiLaki) + 1);
        (jenisKelamin === 'Perempuan') && setPerempuan(parseInt(perempuan) + 1);
      }
      else {
        // kalo tempat duduk yang dibooking melebihi batas kapasitas
      }
    }
    else if(waktu === `malam`) {
      if(parseInt(tempatDuduk) + parseInt(sesiMalam) <= parseInt(kapasitas)) {
        // kalo tempat duduk yang dibooking tidak melebihi batas kapasitas
        reqOpt.body = JSON.stringify({
          sesiMalam: parseInt(tempatDuduk) + parseInt(sesiMalam),
          lakiLaki: (jenisKelamin === 'Laki-laki') ? lakiLaki+1 : lakiLaki,
          perempuan: (jenisKelamin === 'Perempuan') ? perempuan+1 : perempuan,
        });
        setSesiMalam(parseInt(tempatDuduk) + parseInt(sesiMalam));
        (jenisKelamin === 'Laki-laki') && setLakiLaki(parseInt(lakiLaki) + 1);
        (jenisKelamin === 'Perempuan') && setPerempuan(parseInt(perempuan) + 1);
      }
      else {
        // kalo tempat duduk yang dibooking melebihi batas kapasitas
      }
    }

    const req = await fetch(`${uri}changeJadwal`, reqOpt);
    const res = await req.json();
    if(res.status === 'success') {
      // code kalo berhasil booking
    }
    else {
      // code kalo gagal booking
    }
  };

  return (
    <View style={styles.page}>
      <Header title='Pesan Tempat' onBack={()=>navigation.goBack()}/>
      
      
      <View style={{marginBottom: 10,marginHorizontal:5}}>
      <TextInput title='Jumlah' placeholder="Masukan jumlah tempat duduk" onChangeText={setTempatDuduk}/>
      </View>
      <View style={{marginLeft:10,}}>
        <Text style={{color:'black',fontWeight:'bold'}}>{`${sesiPagi}/${kapasitas*presentase/100} (${presentase}% dari ${kapasitas})`}</Text>
      </View>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:10, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',margin:20,}}>Sesi Pagi </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>5.30 - 7.00 </Text>
        </View>
        </View>

      </View>
     
      </View>
      <View style={{marginRight:15, marginLeft:250, marginTop:5}}>   
      <Button title="Pesan tempat" onPress={() => PesanTempat_onPress(`pagi`)} />
      </View>
   
      <Gap height={20}/>
      <View style={{marginLeft:10,}}>
        <Text style={{color:'black',fontWeight:'bold'}}>{`${sesiSiang}/${kapasitas*presentase/100} (${presentase}% dari ${kapasitas})`}</Text>
      </View>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:10, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',margin:20,}}>Sesi Siang </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>10.00 - 11.30 </Text>
        </View>
        </View>

      </View>
     
      </View>
      <View style={{marginRight:15, marginLeft:250, marginTop:5}}>   
      <Button title="Pesan tempat" onPress={() => PesanTempat_onPress(`siang`)} />
      </View>
      <Gap height={20}/>
      <View style={{marginLeft:10,}}>
        <Text style={{color:'black',fontWeight:'bold'}}>{`${sesiMalam}/${kapasitas*presentase/100} (${presentase}% dari ${kapasitas})`}</Text>
      </View>
      <View style={{backgroundColor:'white',borderRadius:15,elevation:10, marginHorizontal:5,}}>
      <View style={styles.pagi}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#83078EB0',margin:20,}}>Sesi malam </Text>
        
        <View style={styles.jamWrapper}>
        <View style={styles.wrapper}>
        <Icon name="alarm-sharp" size={20} color="#83078EB0" />
        <Text style={{color:'black'}}>17.00 - 18.30 </Text>
        </View>
        </View>

      </View>
      
      </View>
      <View style={{marginRight:15, marginLeft:250, marginTop:5}}>   
      <Button title="Pesan tempat" onPress={() => PesanTempat_onPress(`malam`)} />
      </View>

    </View>
  )
}

export default Jadwal

const styles = StyleSheet.create({

  pagi:{
    backgroundColor:'white',
    flexDirection:'row',
    marginHorizontal:10,
  },
  siang:{
    backgroundColor:'white',
    flexDirection:'row',
    
  },
  malam:{
    backgroundColor:'white',
    flexDirection:'row',

  },
  txtSiang:{
    
  },
  jamWrapper:{
    alignItems:'flex-end',
    flex:1,
    
    
  },
  page:{
    flex:1,
    backgroundColor:'white',
  },
  wrapper:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
 
  

})