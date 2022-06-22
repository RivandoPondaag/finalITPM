import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'
import { Logo } from '../../assets'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In"/>

      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
        <Logo/>
        </View>
      <TextInput title="NIK" placeholder ="Type Your NIK"/>

      <Gap height={16}/>
      <TextInput title="Password" placeholder ="Type Your Password"/>
      <Gap height={24}/>
      <Button title="Sign In" onPress={()=>navigation.navigate('Menu')}/>
      <Gap height={24}/>
      <Button title="Create New Account" color='#8D92A3' onPress={()=>navigation.navigate('SignUP')}/>
      <Gap height={10}/>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Guest')}>
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