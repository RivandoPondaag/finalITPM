import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Logo } from '../../assets/icon'

const Guest = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>

    
       <Header title='Guest'  onBack={()=>navigation.goBack()}/>
       <Gap height={20}/>
       <View style={{justifyContent:'center',alignItems:'center'}}>
        <Logo/>
      </View>
     
       <View style={{marginTop:20,marginHorizontal:20,flex:1,}}>
       <TextInput title="Name" placeholder ="Type Your name"/>
       <Gap height={10}/>

       <TextInput title="Address" placeholder ="Type Your address"/>
       <Gap height={50}/>
       <Button title='Continue' onPress={()=>navigation.navigate('Menu')}/>
       </View>

    </View>
  )
}

export default Guest

const styles = StyleSheet.create({})