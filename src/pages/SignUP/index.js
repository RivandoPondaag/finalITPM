import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import {launchImageLibrary} from 'react-native-image-picker'



const SignUP = ({navigation, route}) => {
    const [uri, setUri] = useState(route.params.uri);

    const [photo, setPhoto]= useState('');
    const [hasPhoto, setHasPhoto]= useState(false); 

    const [fullName, setFullName]=useState('');
    const [kolom, setKolom]=useState('');
    const [nik, setNik]=useState('');
    const [jenisKelamin, setJenisKelamin]=useState('');
    const [password, setPassword]=useState('');

    const onSubmit = async() => {
        const reqOpt = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                nama: fullName,
                kolom: kolom,
                NIK: nik,
                jenisKelamin: jenisKelamin,
                password: password,
                photo: (photo === '') ? null : photo,
            }),
        };

        const req = await fetch(`${uri}createAccount`, reqOpt);
        const res = await req.json();
        if(res.status === 'success') {
            navigation.replace('SignIn');
        }
        else if(res.status === 'error') {
            // code klo akun nd bisa ta daftar
        }
    };

    const getPhoto = async () =>{
        
        const result = await launchImageLibrary({
            maxHeight:200,
            maxWidth:200,
            includeBase64: true,
        });
        setPhoto(result.assets[0].uri)
        setHasPhoto(true);
    }

  return (
    <View style={styles.page}>
    <Header title='SignUp' onBack={()=>navigation.goBack()}/>
    <View style={styles.contentWrapper}>

       <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.avatarWrapper}>
        <View style={styles.border}>
        <TouchableOpacity onPress={getPhoto} activeOpacity={0.7}>
            {
                !hasPhoto&& (
                    <View style={styles.addPhoto}>
                    <Text style={{color:'white'}}>Add Photo</Text>
                    </View>
                )
            }
            {
                hasPhoto && (
                    <Image source={{uri: photo}} style={styles.avatar}/>
                ) 
            }
        </TouchableOpacity>
        </View>
        </View>
        <TextInput title='Nama' placeholder='Masukan nama anda' value={fullName} onChangeText={value=>setFullName(value)}/>
        <TextInput title='Kolom' placeholder='Masukan Kolom anda' value={kolom} onChangeText={value=>setKolom(value)}/>
        <TextInput title='NIK' placeholder='Masukan NIK anda' value={nik} onChangeText={value=>setNik(value)}/>
        <TextInput title='Jenis Kelamin' placeholder='Masukan Jenis Kelamin anda' value={jenisKelamin} onChangeText={value=>setJenisKelamin(value)}/>
        <TextInput title='Password' placeholder='Masukan Password anda' value={password} onChangeText={value=>setPassword(value)} secureTextEntry/>
        <Gap height={24}/>
        <Button title='Selanjutnya' onPress={onSubmit}/>
        <Gap height={24}/>

       </ScrollView>
    </View>
    </View>
  )
}

export default SignUP

const styles = StyleSheet.create({

    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 24,
        paddingHorizontal: 24,
    },
    page:{
        flex: 1,
    },
    addPhoto:{
        height: 90,
        width: 90,
        backgroundColor: '#83078EB0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    border:{
        borderWidth: 1,
        borderColor: '#8D92A3', 
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
    },
    avatarWrapper:{
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    },
    avatar:{
        height:90,
        width: 90,
        borderRadius:90,
    },

})