import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Logo } from '../../assets/icon'

const Guest = ({navigation, route}) => {
  const uri = route.params.uri;
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  const Continue_onPress = async() => {
    const reqOpt = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name,
        address: address,
      }),
  };

    const req = await fetch(`${uri}guestSignIn`, reqOpt);
    const res = await req.json();
    if(res.status === 'success') {
      navigation.replace('Menu', {uri: uri, data: {
        _id: res.desc._id,
        nama: name,
        kolom: '',
        NIK: null,
        jenisKelamin: null,
        password: null,
        photo: null,
        address: address,
      }, type: 'Guest'});
    }
    else if(res.status === 'error') {
      // code kalo guest nd bsa masuk
    }
  };

  return (
    <View style={{backgroundColor:'white',flex:1}}>

    
       <Header title='Guest'  onBack={()=>navigation.goBack()}/>
       <Gap height={20}/>
       <View style={{justifyContent:'center',alignItems:'center'}}>
        <Logo/>
      </View>
     
       <View style={{marginTop:20,marginHorizontal:20,flex:1,}}>
       <TextInput title="Name" placeholder ="Type Your name" onChangeText={setName} />
       <Gap height={10}/>

       <TextInput title="Address" placeholder ="Type Your address" onChangeText={setAddress} />
       <Gap height={50}/>
       <Button title='Continue' onPress={Continue_onPress}/>
       </View>

    </View>
  )
}

export default Guest

const styles = StyleSheet.create({})